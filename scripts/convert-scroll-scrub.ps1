# convert-scroll-scrub.ps1 <input.mp4>
# Produces scroll-scrub-optimized WebM (VP9) + MP4 (H.264):
#   - keyframe every 0.5s (fast random seek while scrubbing)
#   - audio stripped
#   - target ~4MB WebM / ~6MB MP4 (bitrate derived from duration)
# Outputs to public/media/ as scroll-scrub.webm / scroll-scrub.mp4
#
# Usage:  .\scripts\convert-scroll-scrub.ps1 .\raw\my-clip.mp4

param(
  [Parameter(Mandatory = $true)]
  [string]$InputFile
)

$ErrorActionPreference = 'Stop'

if (-not (Test-Path $InputFile)) {
  Write-Error "Input file not found: $InputFile"; exit 1
}
foreach ($bin in 'ffmpeg', 'ffprobe') {
  if (-not (Get-Command $bin -ErrorAction SilentlyContinue)) {
    Write-Error "$bin not found on PATH."; exit 1
  }
}

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$outDir = Join-Path (Split-Path -Parent $scriptDir) 'public\media'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$webm = Join-Path $outDir 'scroll-scrub.webm'
$mp4  = Join-Path $outDir 'scroll-scrub.mp4'

# Duration (seconds) -> target video bitrate for each container.
$dur = [double](& ffprobe -v error -show_entries format=duration `
  -of default=noprint_wrappers=1:nokey=1 $InputFile)
if (-not $dur -or $dur -le 0) { Write-Error "Could not read duration."; exit 1 }

# bitrate (kbps) = targetBytes * 8 / duration / 1000
$webmKbps = [int]((4MB * 8) / $dur / 1000)
$mp4Kbps  = [int]((6MB * 8) / $dur / 1000)
$keyExpr  = 'expr:gte(t,n_forced*0.5)'

Write-Host "Duration ${dur}s -> WebM ${webmKbps}k / MP4 ${mp4Kbps}k"

# --- WebM (VP9, two-pass for accurate size) ---
Write-Host "Encoding WebM (VP9, pass 1/2)..."
& ffmpeg -y -i $InputFile -an -c:v libvpx-vp9 -b:v "${webmKbps}k" `
  -force_key_frames $keyExpr -pass 1 -passlogfile "$outDir\ssp" `
  -f null $(if ($IsWindows) { 'NUL' } else { '/dev/null' })
Write-Host "Encoding WebM (VP9, pass 2/2)..."
& ffmpeg -y -i $InputFile -an -c:v libvpx-vp9 -b:v "${webmKbps}k" `
  -force_key_frames $keyExpr -pass 2 -passlogfile "$outDir\ssp" $webm
Remove-Item "$outDir\ssp*" -ErrorAction SilentlyContinue

# --- MP4 (H.264) ---
Write-Host "Encoding MP4 (H.264)..."
& ffmpeg -y -i $InputFile -an -c:v libx264 -preset slow `
  -b:v "${mp4Kbps}k" -maxrate "$([int]($mp4Kbps*1.5))k" -bufsize "${mp4Kbps}k" `
  -force_key_frames $keyExpr -pix_fmt yuv420p -movflags +faststart $mp4

Write-Host "Done:"
Get-Item $webm, $mp4 | ForEach-Object {
  "{0}  {1:N2} MB" -f $_.Name, ($_.Length / 1MB)
}
