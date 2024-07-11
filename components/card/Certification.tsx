import React from "react";
import Card from "../ui/Card";
import { Timeline, TimelineItem } from "../ui/Timeline";

function CertificationCard() {
  const certificationData = [
    {
      date: "2012-2020",
      title: "Diploma in Information Technology",
      subtitle: "ESOFT Metro Campus",
     
    },
    {
      date: "2019-2020",
      title: "Diploma in English",
      subtitle: "ESOFT Metro Campus",

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
