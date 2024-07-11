import React from "react";
import Card from "../ui/Card";
import { Timeline, TimelineItem } from "../ui/Timeline";

function EducationCard() {
  const educationData = [
    {
      date: "2021-2025",
      title: "Computer Engineering",
      subtitle: "University of Ruhuna",
     
    },
    {
      date: "2009-2019",
      title: "A/L and O/L",
      subtitle: "Ranabima Royal College",

    },
  ];
  return (
    <Card title="Education">
      <Timeline>
        {educationData.map((ed, i) => (
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

export default EducationCard;
