import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link href="/">
            <div className="logo">
                <Image 
                    src="/images/logo.svg" 
                    alt="logo" 
                    width={100} 
                    height={100} 
                    className="w-10 h-10"
                />
            </div>
        </Link>
        <div className="flex items-center gap-8">
            <NavItems />
            <p>Sign In</p>
        </div>
    </nav>
  )
}

export default Navbar