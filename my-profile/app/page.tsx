/* eslint-disable react/no-unescaped-entities */
import Photo from '@/components/Photo'
import Socials from '@/components/Socials'
import Stats from '@/components/Stats'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { FiDownload } from 'react-icons/fi'
type Props = {}

const Home = (props: Props) => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-2'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-2xl'>Software Developer</span>
            <h1 className="h1">Hello I'm <br/> <span className='text-accent'>Tran Duc Hieu</span></h1>
            <p className='max-w-[500px] mb-9 text-white/80'>I'm very skilled at building interfaces and enhancing user experience for 
              websites and proficient in various programming languages and technologies.</p>
              <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button variant={'outline'} size="lg" className='uppercase flex items-center gap-2'>
                <Link legacyBehavior  href="https://drive.google.com/drive/u/1/folders/17N-5Y6PC0nL1Xf50amzzqWD4WltkHfRY"  passHref={true} className='flex items-center gap-1'>
                      <a target='_blank' rel="noopener noreferrer" className='flex items-center gap-1'>
                        Download CV
                        <FiDownload />
                      </a>
                </Link>
                </Button>
                <div className='mb-8 xl:mb-0'>
                  <Socials containerStyles='flex gap-6' iconStyles='w-9 h-9 border border-accent rounded-full flex 
                  justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all 
                  duration-500' />
                </div>
              </div>
          </div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home