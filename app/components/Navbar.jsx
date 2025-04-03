// import {assets} from '@/assets/assets'
// import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-center md:justify-between items-center bg-light/5 h-20 w-full fixed top-0 z-10 px-5 lg:px-8 xl:p-[2%] py-4 backdrop-blur-md'>

        <a href="/">
            {/* <Image src={assets.logo_op} className='w-40 cursor-pointer m-8' alt='logo'/> */}

            <h1 className=' text-7xl text-light w-auto cursor-pointer m-4' alt='logo'>Opus2</h1>    
        </a>

        <ul className='hidden md:flex gap-10 lg:gap-8 rounded-[24px] px-12 py-3 items-center bg-light/05 shadow-lg backdrop-blur-md'>

            <li className="text-light hover:text-lighthover font-outfit text-lg  cursor-pointer">
              <a href="#top">Home</a></li>
            
            <li className="text-light hover:text-lighthover font-outfit text-lg  cursor-pointer">
              <a href="#howtouse">How to use</a></li>

            <li className="text-light hover:text-lighthover font-outfit text-lg  cursor-pointer">
              <a href="#contact">Contact</a></li>
        </ul>
        </nav>
    </>
  )
}

export default Navbar