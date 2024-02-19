"use client"
import { Button } from '@/components/ui/button'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SidebarMenu = ({toggle}:any) => {
  return (
    <Link href="/home" className="aspect-square bg-[#0c141c] hover:bg-[#0c141c]" >
        <div className=" flex items-center justify-center">

   <Image
            src="/logo.svg"
            alt="Logo"
            height={100}
            width={100}
          />
        </div>
    </Link>
  )
}

export default SidebarMenu
