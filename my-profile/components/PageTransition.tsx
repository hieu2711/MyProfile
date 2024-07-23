"use client";
import { animate, AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { usePathname } from 'next/navigation';
type Props = {
    children: React.ReactNode
}

const PageTransition = ({children}: Props) => {
    const pathName = usePathname()
  return (
    <AnimatePresence>
        <div key={pathName}>
            <motion.div initial={{opacity:1}} animate={{opacity: 0, transition: {delay:0.2, duration: 0.4, ease:"easeInOut"},}}
            className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'/>
            {children}</div>
    </AnimatePresence>
  )
}

export default PageTransition