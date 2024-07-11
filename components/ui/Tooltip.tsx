import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

interface Props{
    
    title:string,
    image:StaticImageData,
    bgColor?:string
}
function Tooltip({title, image, bgColor}:Props) {
    const [active, setActive] = useState<boolean>(false)
  return (
    <div className={cn('link relative bg-[#2D2C33]  w-10 h-10 transform cursor-pointer grid place-items-center',
        'border border-border rounded-xl',
        'hover:scale-110 transition-all duration-200'
    )}
    onMouseEnter={()=> setActive(true)}
    onMouseLeave={()=>setActive(false)}
    style={{background: `${bgColor || "#2D2C33"}`}}
    >
        <div className="w-[27px] h-[27px]">
            <Image src={image} alt={title} className='w-full h-full overflow-clip object-contain'/>
            {/**Title */}
            {
                active ? (<div className='absolute -top-6 bg-black/[0.2] py-0.5 px-1.5 rounded-2xl backdrop-blur-[6px] transition-all duration-200'>
                    <p className='font-pixel text-[10px] whitespace-nowrap'>{title}</p>
                </div>): null
            }
        </div>
    </div>
  )
}

export default Tooltip