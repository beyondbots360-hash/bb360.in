import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutUs from "@/components/AboutUs";
import WhyTrustUs from "@/components/WhyTrustUs";
import ServicesList from "@/components/ServicesList";
import BB360Intro from "@/components/BB360Intro";
import Process from "@/components/Process";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <AboutUs />
      <WhyTrustUs />
      <ServicesList />
      <BB360Intro />
      <Process />
      <FAQSection />
      <CTASection />
    </>
  );
}
