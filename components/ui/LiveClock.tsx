"use client"
import moment from 'moment-timezone'
import React, { useEffect, useState } from 'react'

interface Props{
    timezone:string
}
function LiveClock({timezone}:Props) {
    const [time, setTime] = useState<string>("")
    useEffect(()=>{
        const updateTime=()=>{
            const currentTime = moment().tz(timezone).format('HH:mm')
            setTime(currentTime)
        }

        const intervalId = setInterval(updateTime,1000)

        //cleanup interval on component unmount
        return ()=> clearInterval(intervalId)
    },[timezone])
  return (
    <div className='text-3xl text-secondary-foreground font-semibold'>
        {
            time ? (
                <div className="flex items-center justify-center gap-[0.5vw]">
                    <span >{timezone}</span>
                    <span>{time}</span>
                </div>
            ):(
                <div>loading...</div>
            )
        }
    </div>
  )
}

export default LiveClock