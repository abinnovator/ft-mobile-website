import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-center md:justify-between items-center px-4 py-4 md:px-12 md:py-7 font-(family-name:--font-satoshi)'>
        <Link href={"/"} className='text-black px-4 py-2 rounded-full cursor-pointer text-center '><h1 className='text-black'>Flavortown Mobile</h1></Link>
        <Link href={"/download"} className='text-black px-4 py-2 rounded-full cursor-pointer hidden md:flex'><Button className='bg-[#338EDA] cursor-pointer'>Download Now</Button></Link>
    </div>
  )
}

export default Navbar