import React from 'react'
import Card from '../ui/Card'
import { stackData } from '@/data/stack'
import Tooltip from '../ui/Tooltip'

function StackCard() {
  return (
   <Card title='Technical Skills'>
    <div className="flex flex-col gap-6 mt-2">
        {
            stackData.map((skill,i)=>(
                <div  key={i} className='grid items-center gap-[120px]' style={{gridTemplateColumns:"50px 1fr"}}>
                    {/**Stack group */}
                    <div className="h-auto flex-none break-words whitespace-pre ">
                        <p className='text-secondary-foreground'>{skill.title}</p>
                    </div>
                    {/**Tooltip */}
                    <div className="flex gap-3">
                        {
                            skill.stack.map((t)=>(
                                <Tooltip
                                key={t.id}
                                title={t.title}
                                image={t.image}
                                bgColor={t.bgColor}/>
                            ))
                        }
                    </div>

                </div>
            ))
        }
    </div>
   </Card>
  )
}

export default StackCard    