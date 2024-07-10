import { FaFacebook, FaInstagram } from "react-icons/fa";

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
        icon:<FaFacebook/>,
        link:'www.facebook.com',
        username:'Ishara Rajapaksha'
    },
    {
        icon:<FaInstagram/>,
        link:'www.instagram.com',
        username:'ishara__99'
    },
]