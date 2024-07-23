"use client"
import { link } from 'fs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {}

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

const Nav = (props: Props) => {
    const pathname = usePathname()
  return (
    <nav className='flex gap-8'>
        {routes.map((route,index) => {
            return <Link href={route.path} key={index} 
            className={`${route.path === pathname && "text-accent border-b-2 border-accent"} 
            capitalize font-medium hover:text-accent transition-all`}>
                {route.name}</Link>
        })}
    </nav>
  )
}

export default Nav