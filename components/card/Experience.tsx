import React from "react";
import Card from "../ui/Card";
import { Timeline, TimelineItem } from "../ui/Timeline";

function ExperienceCard() {
  const experienceData = [
    {
      date: "2023",
      title: "Mobile Application Development",
      subtitle: "Flutter, Firebase",
      link: "www.google.com",
      tag: "UOR",
    },
    {
      date: "2023",
      title: "Web Application Development",
      subtitle: "MERN, SpringBoot, .NET",
      link: "",
      tag: "",
    },
    {
      date: "2023",
      title: "Machine Learning",
      subtitle: "Python, Scikit-learn",
      link: "",
      tag: "",
    },
    {
      date: "2024",
      title: "Artificial Intellegence",
      subtitle: "Python, TensorFlow, Keras",
      link: "",
      tag: "",
    },
  ];
  return (
    <Card title="My Experience">
      <Timeline>
        {experienceData.map((ex, i) => (
          <TimelineItem
            key={i}
            date={ex.date}
            title={ex.title}
            subtitle={ex.subtitle}
            link={ex.link}
            tag={ex.tag}
          />
        ))}
      </Timeline>
    </Card>
  );
}

export default ExperienceCard;
