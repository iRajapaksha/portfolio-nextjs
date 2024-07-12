import React, { ReactNode } from 'react'

interface Props{
    icon?: ReactNode,
    placeholder: string,
    name:string
   
}

function TextArea({icon, placeholder,name}:Props) {
  return (
    <div className='relative w-full'>
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            {icon}
        </div>
        <textarea name={name} placeholder={placeholder} className='bg-primary-background text-primary-foreground rounded-lg text-sm ps-10 p-2.5 pt-9 focus:outline-none w-full'/>

    </div>
  )
}

export default TextArea