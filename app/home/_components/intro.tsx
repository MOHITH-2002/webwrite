"use client"
import { cn } from '@/lib/utils'
import { SignUpButton } from '@clerk/clerk-react'
import { useConvexAuth } from 'convex/react'
import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Intro = () => {
    const {isAuthenticated,isLoading} = useConvexAuth()
  return (
    <div className="flex bg-black items-center  lg:h-[200px] lg:px-20  flex-col gap-5 justify-center pt-10 pb-10 lg:pt-2 px-10  ">
      <h1 className="text-center text-[#1DA1F2] text-3xl">
         "Webwrite facilitates collaborative brainstorming with its online whiteboard, fostering dynamic idea exchanges among team members."
      </h1>
      {
    isAuthenticated && !isLoading ? (
         <Link href="/" className={cn("w-[120px] h-[40px]  flex items-center justify-center gap-2 hover:bg-[#212020] bg-[#181818] text-slate-200 rounded-xl font-semibold")}>

    Dashboard
    <MoveRightIcon size={20}/>
    </Link>
    )
    :

        (
            <button className="w-[100px] flex items-center h-[40px] justify-center gap-2 hover:bg-[#212020] bg-[#181818] text-slate-200 rounded-xl font-semibold">

    <SignUpButton afterSignUpUrl='/'/>
    <MoveRightIcon size={20}/>
    </button>
    )
    }
    </div>
  )
}

export default Intro
