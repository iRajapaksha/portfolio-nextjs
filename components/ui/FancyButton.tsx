import React, { ReactNode } from "react";

interface Props {
  text: string;
  icon: ReactNode;
  onClick?:()=>void
}

function FancyButton({text,icon,onClick}:Props) {
  return (
    <a className="fancy-btn" onClick={onClick}>
      <div className="group bg-black hover:bg-transparent text-primary-foreground hover:text-black rounded-[108em] py-[0.9vw] px-[1.8vw] flex items-center  gap-2  font-bold text-xl cursor-pointer transition-all duration-75">
        <span>{text}</span>
        <span className="group-hover:translate-x-[0.75vw] transition-transform duration-100 ">{icon}</span>
      </div>
    </a>
  );
}

export default FancyButton;
