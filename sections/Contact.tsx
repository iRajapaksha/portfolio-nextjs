import ContactCard from '@/components/card/ContactCard'
import Heading from '@/components/heading/Heading'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import TextArea from '@/components/ui/TextArea'
import React from 'react'
import { FaPhoneVolume, FaUser } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import { MdEmail, MdSubject } from 'react-icons/md'
import { SiMinutemailer } from 'react-icons/si'



function ContactSection() {
  return (
    <div className='pt-24 px-3 lg:px-8'>
        <Heading number='03' title1='Contact' title2='Me'/>
        <Card>
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
                {/**Contact cards */}
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
                {/**Contact form */}
                <div className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 relative overflow-hidden py-5 px-[25px] shadow-md ">
                    <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8  ">
                        <Input type='text' placeholder='Name' icon={<FaUser/>}/>
                        <Input type='email' placeholder='Email Address' icon={<MdEmail/>}/>

                    </div>
                    <div className="flex  items-center justify-between mb-4 gap-8  ">
                        <Input type='text' placeholder='Subject' icon={<MdSubject/>}/>
                    </div>
                    <TextArea placeholder='Message' icon={<FaMessage/>}/>
                    <div className="w-full flex justify-end">
                        <Button className='!w-44 !py-3 !text-xl'>
                            Send <SiMinutemailer/>
                        </Button>
                    </div>
                </div>
            </div>
            
        </Card>
        
        </div>
  )
}

export default ContactSection