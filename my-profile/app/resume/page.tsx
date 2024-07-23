"use client"
import React from 'react'
import { FaJs, FaReact, FaVuejs, FaNodeJs, FaJava} from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs, SiGithub, SiBootstrap, SiTypescript, SiMysql, SiMongodb} from 'react-icons/si'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {Tooltip, TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip"
import {motion} from 'framer-motion'
import { ScrollArea } from '@/components/ui/scroll-area'
import { it } from 'node:test'
type Props = {}
//data about
const about = {
  title:'About me',
  des:"I'm confident with my knowledge that will satisfy employers.",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Tran Duc Hieu"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+84) 378 725 917"
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ months"
    },
    {
      fieldName: "Github",
      fieldValue: "https://github.com/hieu2711"
    },
    {
      fieldName: "Nationality",
      fieldValue: "VietNam"
    },
    {
      fieldName: "Email",
      fieldValue: "hieutranduc1002@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "English, VietNamese"
    },
  ]
}
//data experience
const experience = {
  icon:'/assets/resume/badge.svg',
  title:'My experience',
  des: 'Although I have not had much experience, I believe that with my efforts and learning, I will meet the needs of the company.',
  items:[
    {
      company:'TSTtourist Company',
      position: 'Front-End Developer and Tester',
      duration: '10-2023 - 1-2024'
    },
  ]
}

//data education
const education = {
  icon:'/assets/resume/cap.svg',
  title:'My education',
  des: 'Always learn and apply new technologies. ',
  items:[
    {
      school:'Ho Chi Minh City Mo University',
      degree: 'Information Technologies',
      duration: '10-2020 - 10-2024'
    },
    {
      school:'Online Course HTML + CSS',
      degree: 'Basic website design',
      duration: '5-2021 - 7-2021'
    },
    {
      school:'Online Course ReactJs + NodeJs',
      degree: 'Fullstack Developer',
      duration: '02-2022 - 04-2022'
    },
    {
      school:'Online Course VueJs + NodeJs',
      degree: 'Fullstack Developer',
      duration: '08-2022 - 12-2022'
    },
    {
      school:'Online Course NextJs',
      degree: 'Front-End Developer',
      duration: '07-2023 - 10-2023'
    }
  ]
}

//data skill
const skills ={
  title: "My skills",
  des:"Besides the existing skills, always try to absorb modern languages ​​and frameworks.",
  skillList:[
    {
      icon:<FaJs />,
      name:'Javascript'
    },
    {
      icon:<SiTypescript />,
      name:'Typescript'
    },
    {
      icon:<FaJava />,
      name:'Java'
    },
    {
      icon:<FaReact />,
      name:'ReactJs'
    },
    {
      icon:<FaVuejs />,
      name:'VueJs'
    },
    {
      icon:<SiNextdotjs />,
      name:'NextJs'
    },
    {
      icon:<FaNodeJs />,
      name:'NodeJs'
    },

    {
      icon:<SiMysql />,
      name:'MySQL'
    },
    {
      icon:<SiMongodb />,
      name:'MongoDB'
    },
    {
      icon:<SiTailwindcss />,
      name:'Tailwind'
    },
    {
      icon:<SiBootstrap />,
      name:'Bootstrap'
    },
    {
      icon:<SiGithub />,
      name:'Github'
    }
  ]
}
const Resume = (props: Props) => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:"easeIn"}}}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <Tabs defaultValue='Experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value={'Experience'}>
              Experience
            </TabsTrigger>
            <TabsTrigger value={'Education'}>
              Education
            </TabsTrigger>
            <TabsTrigger value={'Skills'}>
              Skills
            </TabsTrigger>
            <TabsTrigger value={'About me'}>
              About me
            </TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value='Experience' className='w-full '>
              <div className='flex flex-col gap-[10px] text-center xl:text-left'>
                <h3 className='text-3xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.des}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[20px]'>
                    {experience.items.map((item,index) =>{
                      return (<li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center
                      items-center lg:items-start gap-1'>
                         <span className='text-accent'>{item.duration}</span>
                         <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-2'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                      </li>)
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='Education' className='w-full '>
            <div className='flex flex-col gap-[10px] text-center xl:text-left'>
                <h3 className='text-3xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.des}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[20px]'>
                    {education.items.map((item,index) =>{
                      return (<li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center
                      items-center lg:items-start gap-1'>
                         <span className='text-accent'>{item.duration}</span>
                         <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.school}</h3>
                          <div className='flex items-center gap-2'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.degree}</p>
                          </div>
                      </li>)
                    })}
                  </ul>
                </ScrollArea>
              </div>     
            </TabsContent>
            <TabsContent value='Skills' className='w-full h-full'>
               <div className='flex flex-col gap-[20px]'>
                <div className='flex flex-col gap-[20px] text-center xl:text-left'>
                  <h3 className='text-3xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.des}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap[20px] gap-4'>
                  {skills.skillList.map((item,index) =>{
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-3/4 h-[100px] bg-[#232329] rounded-xl flex justify-center items-center'>
                              <div className='text-6xl  hover:text-accent transition-all '>
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent><p>
                              {item.name}</p></TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>    
            </TabsContent>
            <TabsContent value='About me' className='w-full text-center xl:text-left'>
                  <div className='flex flex-col gap-[20px]'>
                    <h3 className='text-3xl font-bold'>{about.title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.des}</p>
                    <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[650px] mx-auto xl:mx-0 '>
                      {about.info.map((item, index) =>{
                        return (
                          <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                            <span className='text-white/60'>{item.fieldName}</span>
                            <span className='text-xl'>{item.fieldValue}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume