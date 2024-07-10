import { featuredData } from "@/data";
import React, { useState } from "react";
import FeaturedCard from "../card/featured/FeaturedCard";
import { cn } from "@/lib/utils";


function ExpandableCard() {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const handleMouseEnter = (i:number)=>{
        setHoverIndex(i)
    }
    const handleMouseLeave =() =>{
        setHoverIndex(null)
    }
  return (
    <div className="w-full grid lg:flex lg:justify-between lg:gap-x-4">
      {featuredData.map((featured, i) => (
        <div
          key={i}
          className={cn(
            "relative h-[640x] lg:w-1/3 mb-16 transition-all origin-center duration-300 ease-in",
            i ===hoverIndex ? "lg:w-[40%]": "lg:w-[33.33%]"
          )}
          onMouseEnter={()=> handleMouseEnter(i)}
          onMouseLeave={()=> handleMouseLeave()}
        >
          <FeaturedCard
            active={i === hoverIndex}
            title={featured.title}
            tag={featured.tag}
            video={featured.video}
          />
        </div>
      ))}
    </div>
  );
}

export default ExpandableCard;
