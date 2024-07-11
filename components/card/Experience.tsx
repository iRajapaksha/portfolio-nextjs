import React from 'react'
import Card from '../ui/Card'
import { Timeline, TimelineItem } from '../ui/Timeline'


function ExperienceCard() {
  return (
    <Card title='My Experience' >
        <Timeline>
            <TimelineItem title='Full Stack Engineer' link='www.google.com' subtitle='subtitle' tag='tag' date='2022-2024'/>
        </Timeline>
    </Card>
  )
}

export default ExperienceCard