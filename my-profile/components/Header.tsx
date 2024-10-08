import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import { Button } from './ui/button'
import MobileNav from './MobileNav'
type Props = {}

const Header = (props: Props) => {
  return (
    <header className='py-8 xl:py-12 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link href={"/"}>
            {/**Logo */}
            <h1 className='text-4xl font-semibold'>
                Hieu Tran Duc<span className='text-accent'>.</span>
            </h1>
            </Link>
            {/**desktop nav and hire me buttons */}
            <div className="hidden xl:flex items-center gap-8 ">
                <Nav />
                    <Link href={"/contact"}>
                        <Button>
                            Hire me
                        </Button>
                    </Link>
            </div>

             {/**mobile nav */}
             <div className="xl:hidden">
                <MobileNav />
             </div>
        </div>
    </header>
  )
}

export default Header