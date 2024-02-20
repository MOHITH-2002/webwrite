"use client"
import { Scrolled } from '@/hooks/scrolled'
import { cn } from '@/lib/utils'
import { SignInButton } from '@clerk/clerk-react'
import { useConvexAuth } from 'convex/react'
import { MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const scrolled = Scrolled();
    const {isAuthenticated,isLoading} = useConvexAuth()
  return (
    <div className={cn("flex w-full pt-3 px-5 justify-between fixed top-0  pb-3 backdrop-blur-xl",scrolled && "border-b shadow-xl")}>
    <div className="flex  items-end">
    <Image
            src="/logo.svg"
            alt="Logo"
            height={50}
            width={50}
        />
    <h1 className=" gradient-text text-3xl font-bold text-transparent animate-gradient">Webwrite</h1>
    </div>

    {
    isAuthenticated && !isLoading ? (
         <Link href="/" className={cn("w-[100px] flex items-center justify-center gap-2 hover:bg-[#212020] bg-[#181818] text-slate-200 rounded-xl font-semibold")}>

    Dashboard
    </Link>
    )
    :

        (
            <button className="w-[100px] flex items-center justify-center gap-2 hover:bg-[#212020] bg-[#181818] text-slate-200 rounded-xl font-semibold">

    <SignInButton afterSignInUrl='/'/>
    <MoveRightIcon size={20}/>
    </button>
    )
    }
    </div>
  )
}

export default Navbar
