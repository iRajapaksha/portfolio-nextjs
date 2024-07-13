import React, { ReactNode } from 'react'
import Button from '../ui/Button'

interface Props{
    title:string,
    text:string,
    btnText?:string,
    icon:ReactNode
}
function ContactCard({title,text,btnText,icon}:Props) {
  return ( 
    <div className='bg-secondary-background border border-border rounded-lg relative overflow-hidden py-5 pl-[25px] shadow-md '>
        <div className="z-20 flex flex-col gap-8 justify-between items-start ">
            {/**Header */}
            <div className="flex items-center gap-x-2">
                <span className='bg-white w-8 h-8 rounded-lg grid place-items-center'>{icon}</span>
                <h1>{title}</h1>
            </div>
            {/**Body text */}
            <div>
                <h2 className='font-bold text-2xl'>{text}</h2>
            </div>
            {btnText && <Button className='!w-24'>{btnText}</Button>}
        </div>
    </div>
  )
}

export default ContactCard