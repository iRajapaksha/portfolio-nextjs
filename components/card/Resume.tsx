import React from "react";
import SignatureImage from "@/public/assets/images/signature.png";
import Card from "../ui/Card";
import Image from "next/image";
import Button from "../ui/Button";
import { FaDownload } from "react-icons/fa";
import Socials from "../ui/Socials";
import MagneticWrapper from "../visualEffects/magnetic-wrapper";
import FancyButton from "../ui/FancyButton";

function ResumeCard() {
  return (
    <Card className="md:h-full " title="Background">
      <p className="font-sans">
        Hello! I&apos;m Ishara Rajapaksha, a dedicated Computer Engineering
        undergraduate at the University of Ruhuna. My academic journey has been
        fueled by a passion for web application development, machine learning,
        and artificial intelligence. I have immersed myself in both the
        fundamental and advanced concepts of computer engineering, applying them
        rigorously to my academic projects. This hands-on approach has sharpened
        my skills and deepened my understanding, preparing me to tackle
        real-world challenges in the tech industry. With a blend of creativity
        and technical expertise, I am eager to contribute to innovative
        solutions and push the boundaries of what&apos;s possible in the digital
        world.
      </p>
      {/**Signature */}
      {/* <div>
        <Image src={SignatureImage} alt="Ishara Rajapaksha" />
      </div> */}
      {/** Socials and resume */}
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        {/**Socials */}
        <Socials />
        <MagneticWrapper>
            <FancyButton text='Resume' icon={<FaDownload/>}/>
        </MagneticWrapper>
        {/* <Button>
          <FaDownload />
          Resume
        </Button> */}
      </div>
    </Card>
  );
}

export default ResumeCard;
