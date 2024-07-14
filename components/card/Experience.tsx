import React from "react";
import Card from "../ui/Card";
import { Timeline, TimelineItem } from "../ui/Timeline";

function ExperienceCard() {
  const experienceData = [
   
      {
        date: "2023",
        title: "Web Application Development",
        subtitle: "React, Nextjs, Expressjs, Nestjs, Mongodb, ",
  
      },
    {
      date: "2023",
      title: "Mobile Application Development",
      subtitle: "Flutter, Firebase",
    },
    {
      date: "2023",
      title: "Machine Learning",
      subtitle: "Python, Pandas, NumPy",

    },
    {
      date: "2024",
      title: "Artificial Intellegence",
      subtitle: "Python, TensorFlow, Keras",

    },
  ];
  return (
    <Card title="Experience" className="h-full">
      <Timeline>
        {experienceData.map((ex, i) => (
          <TimelineItem
            key={i}
            date={ex.date}
            title={ex.title}
            subtitle={ex.subtitle}
          
          />
        ))}
      </Timeline>
    </Card>
  );
}

export default ExperienceCard;
