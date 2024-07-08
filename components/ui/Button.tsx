import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  link?: string;
  isIcon?: boolean;
  className?: string;
}
function Button({ children, link, isIcon, className }: Props) {
  return (
    <>
      {link ? (
        <Link href={link} target="_blank" className="w-10 h-10 cursor-pointer">
          <ButtonBody isIcon={isIcon} className={className}>
            {children}
          </ButtonBody>
        </Link>
      ) : (
        <ButtonBody isIcon={isIcon} className={className}>
          {children}
        </ButtonBody>
      )}
    </>
  );
}

interface ButtonBodyProps {
  children: ReactNode;
  isIcon?: boolean;
  className?: string;
}

function ButtonBody({ children, isIcon, className }: ButtonBodyProps) {
  return (
    <div className="cursor-pointer flex-none w-auto h-full">
      <div
        className={cn(
          "flex items-center justify-center gap-2 bg-primary-background rounded-full select-none whitespace-nowrap text-primary-foreground text-sm font-medium hover:bg-white/[0.1] transition-colors duration-100 ",
          className,
          isIcon ? "h-10 w-10" : "h-full w-max px-3 py-2"
        )}
      >
        {children}
      </div>
    </div>
  );
}
export default Button;
