import React from "react";
import Card from "../ui/Card";
import { Timeline, TimelineItem } from "../ui/Timeline";

function CertificationCard() {
  const certificationData = [
    {
      date: "2024",
      title: "Node.js: Securing RESTful APIs",
      subtitle: "LinkedIn",
     
    },
    {
      date: "2024",
      title: "Building RESTful APIs with Node.js and Express",
      subtitle: "LinkedIn",
     
    },
    {
      date: "2024",
      title: "Deep Learning: Getting Started",
      subtitle: "LinkedIn",
     
    },
    {
      date: "2020",
      title: "Diploma in Information Technology",
      subtitle: "ESOFT, Metro, Campus",
     
    },
    {
      date: "2020",
      title: "Diploma in English",
      subtitle: "ESOFT, Metro, Campus",

    },
  ];
  return (
    <Card title="Certification">
      <Timeline>
        {certificationData.map((ed, i) => (
          <TimelineItem
            key={i}
            date={ed.date}
            title={ed.title}
            subtitle={ed.subtitle}
            
          />
        ))}
      </Timeline>
    </Card>
  );
}

export default CertificationCard;
