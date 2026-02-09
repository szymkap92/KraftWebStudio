import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { PricingFeatures } from "@/components/PricingFeatures";
import { Guarantee } from "@/components/Guarantee";
import { OnlinePresence } from "@/components/OnlinePresence";
import { AdditionalServices } from "@/components/AdditionalServices";
import { Portfolio } from "@/components/Portfolio";
import { AboutMe } from "@/components/AboutMe";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Pricing />
      <PricingFeatures />
      <Guarantee />
      <OnlinePresence />
      <AdditionalServices />
      <Portfolio />
      <AboutMe />
      <FAQ />
      <Contact />
    </>
  );
}
