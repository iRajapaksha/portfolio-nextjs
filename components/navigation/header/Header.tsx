import FancyButton from '@/components/ui/FancyButton'
import Profile from '@/components/ui/Profile'
import MagneticWrapper from '@/components/visualEffects/magnetic-wrapper'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Header() {
  return (
    <div className='w-full flex items-center justify-center md:justify-between'>
        <Profile/>
        <div className="hidden md:inline">
        <MagneticWrapper className="w-[350px]">
             <FancyButton text="Connect" icon={<FaArrowRight/>}/>
            </MagneticWrapper>
        </div>
    </div>
  )
}

export default Header