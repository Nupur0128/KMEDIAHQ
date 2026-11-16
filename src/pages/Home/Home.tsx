import Hero from "./sections/Hero";
import TrustedBy from "./sections/TrustedBy";
import HowItWorks from "./sections/HowItWorks";
import ContentRepurposing from "./sections/ContentRepurposing";
import CreativeExecution from "./sections/CreativeExecution";
import LongFormContent from "./sections/LongFormContent";
import Distribution from "./sections/Distribution";
import Packages from "./sections/Packages";
import Process from "./sections/Process";
import Team from "./sections/Team";
import Testimonials from "./sections/Testimonials";
import ValueProposition from "./sections/ValueProposition";
import FinalCTA from "./sections/FinalCTA";
import FAQ from "./sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <ContentRepurposing />
      <CreativeExecution />
      <LongFormContent />
      <Distribution />
      <Packages />
      <Process />
      <Team />
      <Testimonials />
      <ValueProposition />
      <FinalCTA />
      <FAQ />
    </>
  );
}
