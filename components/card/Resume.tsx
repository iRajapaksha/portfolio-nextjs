import React from "react";
import SignatureImage from '@/public/assets/images/signature.png'
import Card from "../ui/Card";
import Image from "next/image";
import Button from "../ui/Button";
import { FaDownload } from "react-icons/fa";
import Socials from "../ui/Socials";

function ResumeCard() {
  return (
    <Card className="md:h-full ">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
        voluptas excepturi? Excepturi rem repellendus quod esse aut provident
        eaque expedita inventore dolor accusantium? Sapiente dolor minima iure.
        Laborum, nobis molestiae?
      </p>
      {/**Signature */}
      <div>
        <Image src={SignatureImage} alt='Ishara Rajapaksha'/>
      </div>
      {/** Socials and resume */}
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        {/**Socials */}
        <Socials/>
        <Button>
            <FaDownload/>
            Resume
        </Button>
      </div>
    </Card>
  );
}

export default ResumeCard;
