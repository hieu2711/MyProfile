"use client"
import { stat } from 'fs'
import React from 'react'
import CountUp  from "react-countup"
type Props = {}
interface stat {
    num: number,
    text: string
}
const stats:stat[] =  [
    {
        num: 3,
        text: 'Months of experience'
    },
    {
        num: 24,
        text:'Projects completed'
    },
    {
        num: 4,
        text:'Knowledgeable framework'
    },
    {
        num: 2,
        text:'Year of using Git'
    },
]
const Stats = (props: Props) => {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0 '>
        <div className="container mx-auto">
            <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
                {stats.map((item,index) =>{
                    return <div className='flex-1 flex gap-4 items-center justify-center xl:justify-start' key={index}>
                        <CountUp end={item.num} duration={5} delay={2} className='text-4xl xl:text-5xl font-extrabold'/>
                        <span className='-ml-3 xl:text-3xl'>+</span>
                        <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                    </div>
                })}
            </div>
        </div>

    </section>
  )
}

export default Stats