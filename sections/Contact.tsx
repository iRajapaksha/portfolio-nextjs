import ContactCard from '@/components/card/ContactCard'
import Heading from '@/components/heading/Heading'
import Card from '@/components/ui/Card'
import React from 'react'
import { FaPhoneVolume } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'



function ContactSection() {
  return (
    <div className='pt-24 px-3 lg:px-8'>
        <Heading number='03' title1='Contact' title2='Me'/>
        <Card>
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
                <div className="flex flex-col gap-8">
                    <ContactCard
                    title='Call us directly'
                    icon={<FaPhoneVolume className='fill-[#333] text-lg'/>}
                    text='+94 76 90 33 817'
                    btnText='Call us'
                    />
                    <ContactCard
                    title='Email us'
                    icon={<MdEmail className='fill-[#333] text-lg'/>}
                    text='rajapakshaani@gmail.com'
                    btnText='Email '
                    />
                </div>
            </div>
            
        </Card>
        
        </div>
  )
}

export default ContactSection