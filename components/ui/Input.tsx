import React, { ReactNode } from 'react'

interface Props{
    icon?: ReactNode,
    placeholder: string,
    name:string
    type:"email" | "text" | "password"
}

function Input({icon, placeholder, type, name}:Props) {
  return (
    <div className='relative w-full'>
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            {icon}
        </div>
        <input name={name} type={type} placeholder={placeholder} className='bg-primary-background text-primary-foreground rounded-lg text-sm ps-10 px-2.5 py-4 focus:outline-none w-full'/>

    </div>
  )
}

export default Input