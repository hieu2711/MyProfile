/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from 'react-icons/fa'
import {FaGithub, FaLinkedinIn, FaFacebook} from 'react-icons/fa'
type Props = {}
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    des: "+84 378 725 917"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    des: "hieutranduc1002@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    des: "Tan Binh District, Ho Chi Minh City"
  },
  {
    icon: <FaLinkedinIn />,
    title: "Linkedin",
    des: "Linkedin.com/in/tdh1002/"
  },
  {
    icon: <FaFacebook />,
    title: "Facebook",
    des: "Tran Duc Hieu"
  },
  {
    icon: <FaGithub />,
    title: "Github",
    des: "https://github.com/hieu2711"
  },
]

import {motion} from 'framer-motion'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import Socials from '@/components/Socials'
import Link from 'next/link'
const Contact = (props: Props) => {
  return (
    <motion.div  initial={{opacity: 0}} animate={{opacity:1, transition: {delay: 2.4, duration: 0.4, ease:'easeIn'}}}
    className='py-6 '>
      <div className='container mx-auto'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
               <h3 className='text-4xl text-accent'>Let's work together</h3>
               <p className='text-white/60'>Give me the opportunity to work and contribute to your company.</p>
               <div className=''>
                <div>
                  <ul className='flex flex-wrap'>
                  {info.map((item, index) => (
                  <li key={index} className='flex items-center space-x-3 w-full sm:w-[50%] xl:w-[33%] mb-4'>
                    <div className='text-accent p-2'>{item.icon}</div>  
                    <div>
                      <p className='text-white/60'>{item.title}</p>
                      <p>{item.des}</p>
                    </div>
                  </li>
                ))}
                  </ul>
                </div>
              
                <Button variant={'outline'} size="lg" className='uppercase flex items-center gap-2'>
                <Link legacyBehavior  href="https://drive.google.com/drive/u/1/folders/17N-5Y6PC0nL1Xf50amzzqWD4WltkHfRY"  passHref={true} className='flex items-center gap-1'>
                      <a target='_blank' rel="noopener noreferrer" className='flex items-center gap-1'>
                        Download CV
                        <FiDownload />
                      </a>
                </Link>
                </Button>
              </div>
            </form>
      </div>
    </motion.div>
  )
}

export default Contact