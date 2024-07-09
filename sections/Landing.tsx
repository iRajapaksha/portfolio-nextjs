import Header from "@/components/navigation/header/Header";
import FancyButton from "@/components/ui/FancyButton";
import LiveClock from "@/components/ui/LiveClock";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import { FaArrowRight } from "react-icons/fa";

function LandingSection() {
  return (
    <div className="relative h-screen overflow-hidden p-8 ">
      {/** Header */}
      <Header />
      {/**Show fancy button on small screen and hide on md screen*/}
      <div className="absolute bottom-36 left-10 z-20 md:hidden">
        <MagneticWrapper>
          <FancyButton text="Connect" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
      <div className="absolute right-10 bottom-10">
        <LiveClock timezone="Colombo"/>
      </div>
    </div>
  );
}

export default LandingSection;
