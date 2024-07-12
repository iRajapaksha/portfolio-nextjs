"use client";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import Header from "@/components/navigation/header/Header";
import LandingSection from "@/sections/Landing";
import FeaturedSection from "@/sections/Featured";
import AboutSection from "@/sections/About";
import ContactSection from "@/sections/Contact";


export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius={3}
      perturbance={3}
      resolution={2048}
    >
      {(methods) => (
        <div className="pb-8 px-3 ">
         <Header/>
          <LandingSection/>
          <FeaturedSection/>
          <AboutSection/>
          <ContactSection/>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
