import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer className="flex h-[150px] gap-5 bg-[#181818]  px-6 items-center justify-between">
    <div>
        <Image
            src="/logo.svg"
            alt="Logo"
            height={100}
            width={100}
        />
    </div>
    <div className="flex flex-col  md:flex-row gap-5 items-center">

    
    <Link href="https://mbalinktree.vercel.app/">
    <Button variant="outline" className="">
    Our Products
    </Button>
    </Link>
    <h1 className="text-slate-100">
        © {year} Webwrite
    </h1>
    </div>
    
    </footer>
  )
}

export default Footer
