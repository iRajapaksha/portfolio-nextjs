import React from 'react'

interface Props{
    number:string,
    title1: string,
    title2?: string
}
function Heading({number,title1,title2}:Props) {
  return (
    <div className='relative my-3 px-8 z-20'>
    {/**number */}
    <div className="outlined-none flex flex-col justify-start shrink-0 opacity-5 transform -top-32 2xl:-top-24 w-[71px] flex-none h-auto left-4 lg:left-12 absolute whitespace-pre">
        <h2 className='font-pixel text-[180px] text-center text-primary-foreground relative'>
            <span className='bottom_fade bg-clip-text text-transparent p-4'>{number}</span>
        </h2>
    </div>
    {/**heading text wrapper */}
    <div className="flex flex-nowrap min-h-min overflow-hidden p-0 w-full font-oswald">
        <p className='text-[9vw] lg:text-[6vw] leading-[100%] text-primary-foreground mr-3'>{title1}</p>
        <p className='text-[9vw] lg:text-[6vw] leading-[100%] text-primary-foreground italic'>{title2}</p>

    </div>
    </div>
  )
}

export default Heading