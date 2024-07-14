import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import React from 'react'
import Button from "./Button";

function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
        {
            socials.map((social,i)=>(
                <Button key={i} link={social.link} isIcon>
                    <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
                </Button>
 
            ))
        }
    </div>
  )
}

export default Socials

const socials=[
    {
        icon:<FaLinkedin/>,
        link:'www.linkedin.com/in/rajapaksha-ani',
        username:'Ishara Rajapskaha'
    },
    {
        icon:<FaFacebook/>,
        link:'https://www.facebook.com/nayanajith.ishara?mibextid=LQQJ4d',
        username:'Ishara Rajapaksha'
    },
    {
        icon:<FaInstagram/>,
        link:'https://www.instagram.com/_ishaara_99?igsh=MWptdGJxbjBrenpnOQ%3D%3D&utm_source=qr',
        username:'ishara__99'
    },
]