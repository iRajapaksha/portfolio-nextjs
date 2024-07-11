import Link from "next/link";
import { title } from "process";
import React, { ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface Props {
  children: ReactNode;
}
export function Timeline({ children }: Props) {
  return <div className="flex flex-col gap-y-6">{children}</div>;
}

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  link?: string;
  tag?: string;
  isCourse?: boolean;
}

//TimelineItem ---------------------------------------------------------------------------------------------------------

export const TimelineItem = ({
  date,
  title,
  subtitle,
  link,
  tag,
  isCourse,
}: TimelineItemProps) => {
  return (
    <div className="flex flex-wrap gap-12 min-h justify-start relative">
      {/**Date timeline */}
      <div
        className="h-auto flex-none break-words whitespace-pre"
        style={{ width: `${isCourse ? "0" : ""}` }}
      >
        <p className="text-secondary-foreground">{date}</p>
      </div>
      {/**Right side */}
      <div
        className="flex gap-x-2 "
        style={{ transform: `${isCourse ? "translateX(-45px)" : ""}` }}
      >
        <div className="flex flex-col gap-0.5">
          {/**Title */}
          <div className="text-primary-foreground break-words whitespace-pre">
            <p className="leading-6 font-medium text-sm">{title}</p>
          </div>
          {/**Subtitle */}
          <div className="flex items-center gap-2 w-min">
            {link ? (
              <Link href={link}>
                <TimelineItemBody link={link} tag={tag} subtitle={subtitle} />
              </Link>
            ) : (
              <TimelineItemBody tag={tag} subtitle={subtitle}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

//TimelineBody ---------------------------------------------------------------------------------------------------------

interface Body {
  subtitle: string;
  tag?: string;
  link?: string;
}

export const TimelineItemBody = ({ subtitle, tag, link }: Body) => {
  return (
    <div className="text-secondary-foreground flex items-center">
      <p className="text-sm font-normal leading-6 mt-1">{subtitle}</p>
      {link ? <FiArrowUpRight /> : null}
      {tag ? (
        <div className="ms-2 rounded-[20px] bg-white/5 py-0.5 px-1.5">
          <p className="text-[10px] font-normal text-secondary-foreground">
            {tag}
          </p>
        </div>
      ) : null}
    </div>
  );
};
