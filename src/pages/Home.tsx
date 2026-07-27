import Hero from "../sections/Hero";
import AboutIntro from "../sections/AboutIntro";
import CoreStatement from "../sections/CoreStatement";
import Mission from "../sections/Mission";
import Code from "../sections/Code";
import Pillars from "../sections/Pillars";
import JoinPaths from "../sections/JoinPaths";
import Horizon from "../sections/Horizon";
import ReservedGallery from "../sections/ReservedGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <CoreStatement />
      <Mission />
      <Code />
      <Pillars />
      <JoinPaths />
      <Horizon />
      <ReservedGallery />
    </>
  );
}
