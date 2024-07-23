"use client"
import { usePathname } from 'next/navigation'
import { CiMenuFries } from 'react-icons/ci'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Link from 'next/link';
import { link } from 'fs';
interface Route {
    name: string;
    path: string;
}
const routes: Route[] = [
    {
        name: 'home',
        path: "/"
    },
    {
        name: 'services',
        path: "/services"
    },
    {
        name: 'resume',
        path: "/resume"
    },
    {
        name: 'work',
        path: "/work"
    },
    {
        name: 'contact',
        path: "/contact"
    },
];
type Props = {}

const MobileNav = (props: Props) => {
    const pathName = usePathname();
  return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text-[32px] text-accent' />
        </SheetTrigger>
        <SheetContent className='flex flex-col'>
            <div className='mt-32 mb-10 text-center text-2xl'>
                <Link href="/">
                <h1>Hieu Tran Duc<span className='text-accent'>.</span></h1>
                </Link>
            </div>
            <nav className='flex flex-col justify-center items-center gap-8'>
                {routes.map((route,index) =>{
                    return <Link key={index} href={route.path}
                     className={`${route.path === pathName && "text-accent border-b-2 border-accent" }
                      text-xl capitalize hover:text-accent transition-all`} >{route.name}</Link>
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav