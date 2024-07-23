"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import {Swiper, SwiperClass, SwiperSlide} from 'swiper/react'
import "swiper/css"
import {BsArrowUpRight, BsGithub} from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'
import Image from 'next/image'
import WorkSliderButton from '@/components/WorkSliderButton'

type Props = {}

const projects = [
{
  num: '01',
  category: 'Fullstack ',
  title: 'Web IoT with MQTT protocol',
  des:'Building a connection system with MQTT to get realtime data from air stations.',
  stack: [{name:'HTML, CSS'},{name:'React'},{name:'NodeJs'},{name:'MySQL'}],
  image:'/assets/work/thumb1.png',
  live:'https://web-iot-client.vercel.app/sign-in',
  github:'https://github.com/hieu2711/WEB_IOT'
},
{
  num: '02',
  category: 'Fullstack',
  title: 'Travel Website',
  des:'Building the system with the server is Spring MVC and client is ReactJs with bootstrap.',
  stack: [{name:'HTML, CSS'},{name:'React'},{name:'Java'},{name:'MySQL'}],
  image:'/assets/work/thumb2.png',
  github:'https://github.com/hieu2711/Travel_Web'
},
{
  num: '03',
  category: 'Fullstack',
  title: 'Ecommerce Website with VueJS',
  des:'Building the system with the server is Nodejs and MySQL and the Vue interface with Tailwindcss.',
  stack: [{name:'HTML, CSS'},{name:'VueJS'},{name:'NodeJs'},{name:'MySQL'}, {name:'Tailwindcss'}],
  image:'/assets/work/thumb3.png',
  live:'',
  github:'https://github.com/hieu2711/TGDDWithVue'
},
{
  num: '04',
  category: 'Fullstack',
  title: 'ChatApp Realtime with Firebase',
  des:'Building a real-time chat system with Firebase and MongoDB.',
  stack: [{name:'React'},{name:'Firebase'},{name:'MongoDB'}, {name:'Tailwindcss'}],
  image:'/assets/work/thumb4.png',
  live:'',
  github:'https://github.com/hieu2711/ChatRealTimeApp'
},
{
  num: '05',
  category: 'Fullstack',
  title: 'Mobile App Flower Shopping',
  des:'Building a system of flowers on mobile by Java.',
  stack: [{name:'HTML, CSS'},{name:'Java'},{name:'MySQL'}],
  image:'/assets/work/thumb5.png',
  live:'',
  github:'https://github.com/hieu2711/FlowerApp'
},
{
  num: '06',
  category: 'Fullstack',
  title: 'Rent house Website',
  des:'Building a system of rental rooms with ReactJs.',
  stack: [{name:'ReactJS'},{name:'NodeJs'},{name:'MySQL'}, {name:'Tailwindcss'}],
  image:'/assets/work/thumb6.jpg',
  live:'',
  github:'https://github.com/hieu2711/WebRentRoom'
},
{
  num: '07',
  category: 'Front-End',
  title: 'LandingPage Sport with TypeScript',
  des:'Building interface and effects for specific Landingpage.',
  stack: [{name:'HTML, CSS'},{name:'TypeScript'},{name:'ReactJS'}, {name:'Tailwindcss'}],
  image:'/assets/work/thumb7.png',
  live:'https://landing-page-sport.vercel.app/',
  github:'https://github.com/hieu2711/LandingPageSport'
},
]
const Works = (props: Props) => {
  const [project,setProject] = useState(projects[0])
  const [currentIndex, setCurrentIndex] = useState(0)
  function handleSlideChange(swiper: SwiperClass): void {
    const currentIndex = swiper.activeIndex; 
    setCurrentIndex(currentIndex)
    setProject(projects[currentIndex])
  }
  const [indexSlider, setIndexSlider] = useState(projects.length)
  console.log(indexSlider)
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity:1, transition: {delay: 2.4, duration: 0.4, ease:'easeIn'}}}  className='min-h-[80vh] 
    flex flex-col justify-center py-12 xl:px-0 ' >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between 
          order-2 xl:order-none'>
            <div className='flex flex-col gap-3 h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500 cursor-pointer'>{project.title}</h2>
              <p className='text-white/60'>{project.des}</p>
              <ul className='flex gap-4 '>{
                project.stack.map((item, index) =>{
                  return (
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              <div className='border-b border-white/20 w-full'></div>
              <div className='flex items-center gap-4 '>
                { project.live &&
                    <Link  href={project.live} target='_blank'>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-[50px] h-[50px] rounded-full bg-white/5
                          flex justify-center items-center group '>
                            <BsArrowUpRight className='text-white text-3xl hover:text-accent'/>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                }
                    <Link href={project.github} target='_blank'>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-[50px] h-[50px] rounded-full bg-white/5
                          flex justify-center items-center group '>
                            <BsGithub className='text-white text-3xl hover:text-accent'/>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[420px] mb-12'
            onSlideChange={handleSlideChange}
            >{projects.map((item,index) =>{
              return (
                <SwiperSlide key={index} className='w-full '>
                  <div className='h-[420px] relative group flex justify-center items-center bg-pink-50/20'>
                  <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'>

                  </div>
                  <div className='relative w-full h-full'>
                    <Image src={project.image} fill className='object-cover' alt={project.title} />
                  </div>
                  </div>
                </SwiperSlide>
              )
            })}
            <WorkSliderButton containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]  xl:bottom-0 z-20 w-full 
            justify-between xl:w-max xl:justify-none' btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px]
            w-[36px] h-[36px] flex justify-center items-center transition-all' iconsStyles=''  index={currentIndex} 
            totalSlides={projects.length} />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Works