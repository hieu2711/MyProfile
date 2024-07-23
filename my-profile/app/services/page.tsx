"use client"
import React from 'react'
import {BsArrowDownRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import Link from 'next/link'
type Props = {}
interface service {
  num:(string | number),
  title: string,
  des:string,
  href:string
}
const services:service[] = [
  {
    num: '01',
    title: 'Web Development',
    des:'Developing the website system on the front-end and back-end side.',
    href: ''
  },
  {
    num: '02',
    title: 'Front-End Development',
    des:'The strength is to build interfaces with modern frameworks.',
    href: ''
  },
  {
    num: '03',
    title: 'Testing',
    des:'Check, search for holes of the system and optimize the source.',
    href: ''
  },
  {
    num: '04',
    title: 'SEO',
    des:'Design and optimize the standard Search Engine Optimization website.',
    href: ''
  }
]
const Services = (props: Props) => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div initial={{opacity: 0}} animate={{opacity:1, transition:{delay: 2.4,duration:0.4, ease:'easeIn'}}}
        className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
          {services.map((item,index) =>{
            return (<div key={index} className='flex-1 flex flex-col justify-center gap-3 group '>
              <div className='w-full flex justify-between items-center '>
                <div className='text-5xl font-extrabold text-outline text-transparent 
                group-hover:text-outline-hover transition-all duration-500 cursor-pointer '>
                {item.num}
                </div>
              <Link href={item.href} className='w-[55px] h-[55px] rounded-full bg-white group-hover:bg-accent cursor-pointer
              transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
              <BsArrowDownRight className='text-primary text-3xl' /></Link>
              </div>
              <h2 className='text-[30px] font-bold leading-none text-white group-hover:text-accent cursor-pointer
              transition-all duration-500'>{item.title}</h2>
              <p className='text-white/60'>{item.des}</p>
              <div className='border-b border-white/20 w-full'></div>
            </div>)
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services