import Hero from "../components/sections/Hero";
import ServicesPreview from "../components/sections/ServicesPreview";
import WhyBona from "../components/sections/WhyBona";
import WebAppShowcase from "../components/sections/WebAppShowcase";
import CtaBand from "../components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WebAppShowcase />
      <WhyBona />
      <CtaBand />
    </>
  );
}