import React, { ReactNode } from "react";
import Header from "./Header";
import Video from "./Video";

interface Props {
  logo?: ReactNode;
  title: string;
  tag: string;
  video: string;
  active: boolean;
}
function FeaturedCard({ logo, title, tag, video, active }: Props) {
  return (
    <div className="link w-full h-full bg-secondary-background border border-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2">
      {/**Header */}
      <Header title={title} tag={tag} />
      {/**Body */}
      <div className="relative flex flex-none flex-nowrap w-full p-6 items-center justify-center h-[550px] border border-border rounded-3xl ">
        {/**Video */}
        <Video video={video} active={active}/>
      </div>
    </div>
  );
}

export default FeaturedCard;
