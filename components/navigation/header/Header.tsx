import FancyButton from '@/components/ui/FancyButton'
import Profile from '@/components/ui/Profile'
import MagneticWrapper from '@/components/visualEffects/magnetic-wrapper'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Header() {
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className='w-full flex items-center justify-center md:justify-between fixed top-0 left-0 right-0  bg-transparent backdrop-blur-md z-50 pt-5 pl-5'>
        <Profile/>
        <div className="text-3xl font-medium text-primary-foreground font-pixel" onClick={()=>scrollToSection('home')}>Home</div>
        <div className="text-3xl font-medium text-primary-foreground font-pixel" onClick={()=>scrollToSection('projects')}>Projects</div>
        <div className="text-3xl font-medium text-primary-foreground font-pixel" onClick={()=>scrollToSection('about')}>About</div>
        <div className="hidden md:inline">
        <MagneticWrapper className="w-[250px]">
             <FancyButton text="Connect" icon={<FaArrowRight/>}/>
            </MagneticWrapper>
        </div>
        
    </div>
  )
}

export default Header