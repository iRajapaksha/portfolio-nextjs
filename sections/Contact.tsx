import ContactCard from "@/components/card/ContactCard";
import Heading from "@/components/heading/Heading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";
import { FaPhoneVolume, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdEmail, MdSubject } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null!);
  const btnRef = useRef<HTMLButtonElement>(null);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm("service_bzlq9g9", "template_79951gr", formRef.current, "qPElWq1qsAJyJ-uu0")
      .then(
        (res) => {
          console.log(res.text);
          console.log("Email Sent Successfully");
          alert('Email Sent Successfully')
          formRef.current.reset(); // Clear the inputs after successful email sending
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="pt-0 px-3 lg:px-8" id="connect">
      <Heading number="03" title1="Connect with me" />
      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          {/**Contact cards */}
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Call Me"
              icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
              text="+94 76 90 33 817"
            />
            <ContactCard
              title="Email Me"
              icon={<MdEmail className="fill-[#333] text-lg" />}
              text="rajapakshaani@gmail.com"
            />
          </div>
          {/**Contact form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-5 relative overflow-hidden py-5 px-[25px] shadow-md "
          >
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8  ">
              <Input
                name="user_name"
                type="text"
                placeholder="Name"
                icon={<FaUser />}
              />
              <Input
                name="user_email"
                type="email"
                placeholder="Email Address"
                icon={<MdEmail />}
              />
            </div>
            <div className="flex  items-center justify-between mb-4 gap-8  ">
              <Input
                name="subject"
                type="text"
                placeholder="Subject"
                icon={<MdSubject />}
              />
            </div>
            <TextArea
              name="message"
              placeholder="Message"
              icon={<FaMessage />}
            />
            <div className="w-full flex justify-end">
              <div onClick={() => btnRef.current?.click()}>
                <Button className="!w-44 !py-3 !text-xl">
                  Send <SiMinutemailer />
                </Button>
              </div>
            </div>
            <button type="submit" hidden ref={btnRef} />
          </form>
        </div>
      </Card>
    </div>
  );
}

export default ContactSection;
