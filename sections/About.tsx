import BackgroundCard from "@/components/card/Background";
import CertificationCard from "@/components/card/Certification";
import EducationCard from "@/components/card/Education";
import ExperienceCard from "@/components/card/Experience";
import MeCard from "@/components/card/MeCard";
import ResumeCard from "@/components/card/Resume";
import StackCard from "@/components/card/Stack";
import Heading from "@/components/heading/Heading";
import Card from "@/components/ui/Card";
import Gallery from "@/components/ui/Gallery";
import React from "react";

function AboutSection() {
  return (
    <div className="px-3 lg:px-8" id="about">
      <Heading number="02" title1="About"  />
      <div className="space-y-4 py-8">
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <MeCard />
          <ResumeCard />
          <BackgroundCard />
          <Card title="Gallery" className="2xl:hidden">
            <Gallery />
          </Card>
        </div>
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <div className="space-y-4">
            {/* <Card title="Instructor">Instructor</Card> */}
            <CertificationCard/>
          </div>
          <div className="space-y-4">
            <StackCard/>
            <ExperienceCard/>
            <EducationCard/>
          </div>
          <div className="hidden 2xl:flex ">
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
