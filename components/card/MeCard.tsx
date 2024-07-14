import React from "react";
import Card from "../ui/Card";
import Image from "next/image";
import MyImage from "@/public/assets/images/profile.png";
import { cn } from "@/lib/utils";

const Tag = ({ className, text }: { className: string; text: string }) => {
  return (
    <div className={cn("bg-black/[0.7] w-fit py-1.5 px-3", className)}>
      <p className="text-primary-foreground leading-[110%] font-bold">{text}</p>
    </div>
  );
};
function MeCard() {
  return (
    <Card className="2xl:h-full">
      <div className="w-full h-[400px] sm:h-[500px] overflow-hidden">
        {/**background Image */}
        <Image
          src={MyImage}
          alt="Ishara Rajapaksha"
          className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover "
        />
        {/**Tags */}
        {/* <div className="absolute top-[65%] space-y-2">
          <Tag
            text="Hello, Wolrd"
            className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          />
          <Tag
            text="I am a Computer Engineer"
            className="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          />
        </div> */}
      </div>
    </Card>
  );
}

export default MeCard;
