import React, { ReactNode } from "react";

interface Props {
  text: string;
  icon: ReactNode;
}

function FancyButton({text,icon}:Props) {
  return (
    <a className="fancy-btn">
      <div className="group bg-black hover:bg-transparent text-primary-foreground hover:text-black rounded-[108em] py-[1vw] px-[2vw] flex items-center  gap-2  font-bold text-3xl cursor-pointer transition-all duration-75">
        <span>{text}</span>
        <span className="group-hover:translate-x-[0.75vw] transition-transform duration-100 ">{icon}</span>
      </div>
    </a>
  );
}

export default FancyButton;
