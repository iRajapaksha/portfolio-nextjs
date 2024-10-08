import Header from "@/components/navigation/header/Header";
import FancyButton from "@/components/ui/FancyButton";
import LiveClock from "@/components/ui/LiveClock";
import ScrollDown from "@/components/ui/ScrollDown";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import { FaArrowRight } from "react-icons/fa";

function LandingSection() {
  
  return (
    <div className="relative h-screen overflow-hidden p-2 " id="home">
      {/** Header */}
      {/* <Header /> */}
      {/**Show fancy button on small screen and hide on md screen*/}
      <div className="absolute bottom-36 left-10 z-20 md:hidden">
        <MagneticWrapper>
          <FancyButton text="Connect" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
      <div className="absolute right-10 bottom-20">
        <LiveClock timezone="Colombo" />
      </div>
      {/**Slogan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-20 pt-10 leading-[14vw] lg:leading-[10vw] 2xl:leading-[9rem] font-medium h-[40rem] tracking-[-0.3rem] ">
        <div className="flex flex-col justify-center items-center text-primary-foreground  text-[14vw] lg:text-[10vw] 2xl:text-[6rem] uppercase">
          <div>
            <span>&lt; Think Twice</span>
          </div>
          <div className="relative">
            <span>Code once / &gt;</span>
            {/* <div className="text-[1rem] leading-[1.4rem] tracking-[-0.07rem] absolute top-[14vw] lg:top=[10vw] 2xl:top-[9rem] left-0  w-[30rem]  font-normal">
              <span>Empovering innovation</span>
              <br />
              <span>through inspired design</span>
              <br />
              <span>where challenges spark creativity</span>
              <br />
              <span>and solution redifine posibilties</span>
            </div> */}
          </div>
        </div>
      </div>
      {/**Scroll down */}
      {/* <div className="absolute left-1/2 -translate-x-1/2 bottom-[15rem] md:bottoom-[8rem] lg:bottom-10">
        <ScrollDown />
      </div> */}
        {/** Bottom Left Text */}
        <div className="absolute left-10 bottom-20 text-secondary-foreground text-3xl font-bold">
        <div>Hello, I am Ishara</div>
        <div>Computer Engineering undergraduate</div>
        <div>University of Ruhuna</div>
      </div>
    </div>
  );
}

export default LandingSection;
