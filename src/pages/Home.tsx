import Hero from "../sections/Hero";
import AboutIntro from "../sections/AboutIntro";
import Mission from "../sections/Mission";
import Code from "../sections/Code";
import OurWork from "../sections/OurWork";
import Programs from "../sections/Programs";
import Impact from "../sections/Impact";
import WhoWeServe from "../sections/WhoWeServe";
import Participate from "../sections/Participate";
import Woke from "../sections/Woke";
import Declarations from "../sections/Declarations";
import FinalCTA from "../sections/FinalCTA";

/* Homepage sequence approved 2026-07-26.

   The order is deliberate and follows the hierarchy in the CCC Operating
   System: description, mission, framework, areas of work, featured programs,
   a current next action, impact and research, ways to participate.

   Removed in this rebuild, and not to be reinstated:
     CoreStatement  "Seen · Honored · Remembered · Connected" / the Hughes line
     Pillars        "Eight strands. One crown." and the eight outdated pillars
     Horizon        "On the Horizon" and every SOON label
     JoinPaths      the old two-path BSU-centred entry point
   Those components still exist in src/sections/ but are no longer imported. */
export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <Mission />
      <Code />
      <OurWork />
      <Programs />
      <Impact />
      <WhoWeServe />
      <Participate />
      <Woke />
      <Declarations />
      <FinalCTA />
    </>
  );
}
