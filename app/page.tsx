"use client";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import { GoHomeFill } from "react-icons/go";
import { FaArrowRight, FaUser } from "react-icons/fa";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import Profile from "@/components/ui/Profile";
import FancyButton from "@/components/ui/FancyButton";
import LiveClock from "@/components/ui/LiveClock";
export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius={3}
      perturbance={3}
      resolution={2048}
    >
      {(methods) => (
        <div className="w-full p-10">
          <div className="max-w-2xl mx-auto">

          <Card title="UI components">
            <div className="grid grid-cols-4">
              <Button>basic button</Button>
              <Button><GoHomeFill/> button</Button>
              <Button isIcon><FaUser/></Button>
              <Button link="https://www.google.com">google</Button>
          
            </div>
            <Input type="text" placeholder="Full Name"/>
            <Input type="text" placeholder="Full Name" icon={<FaUser/>}/>
            <TextArea  placeholder="Full Name" />
            <TextArea  placeholder="Full Name" icon={<FaUser/>}/>
            <Profile/>
            <div className="w-[350px]">
            <FancyButton text="Connect" icon={<FaArrowRight/>}/>
            <LiveClock timezone="Colombo"/>
            </div>
          </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
