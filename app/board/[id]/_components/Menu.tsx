"use client"
import React from 'react'

import {Download, Grip, Home, LayoutDashboard, Link2, Share2 } from 'lucide-react'

import { ModeToggle } from '@/components/_created_components/dark-mode'
import toast from 'react-hot-toast'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,

  
} from 'react-share';
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { DarkTheme } from '@/components/_created_components/seperate-dark'
interface Props {
    id:string;
    downloadpdf:()=>void;
}
const Menu = ({id,downloadpdf}:Props) => {

    const shareUrl=`${window.location.origin}/board/${id}`
    
    

    const onCopyLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/board/${id}`,
    )
      .then(() => toast.success("Link copied"))
      .catch(() => toast.error("Failed to copy link"))
  };

  return (
    <div className="p-1 flex items-center justify-center">

    

<Menubar>
  <MenubarMenu>
    <MenubarTrigger><Grip/></MenubarTrigger>
    <MenubarContent>
      <Link href="/home" >
      <MenubarItem className="cursor-pointer">
        <Home className="h-4 w-4 mr-2"/>Home
      </MenubarItem>
      </Link>
      <MenubarSeparator />
      
        <Link href="/" >
      <MenubarItem className="cursor-pointer">
        <LayoutDashboard className="h-4 w-4 mr-2"/>Dashboard
      </MenubarItem>
      </Link>
      
      <MenubarSeparator />
      <MenubarItem onClick={downloadpdf}  >
      <Download className="h-4 w-4 mr-2" /> Save as PDF
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem
       onClick={onCopyLink}
          className=" cursor-pointer"
        >
          <Link2 className="h-4 w-4 mr-2" />
          Copy board link</MenubarItem>
      <MenubarSeparator />
      <MenubarSub>
      <MenubarSubTrigger><Share2 className="h-4 w-4 mr-2"/> Share</MenubarSubTrigger> 
      <MenubarSubContent>
         <MenubarItem className=''>
             <FacebookShareButton
             className='flex '
          url={shareUrl}

        >
          <FacebookIcon size={20} round={true} />
          <p className="ml-2">Facebook</p>
        </FacebookShareButton>

        </MenubarItem>
          <MenubarItem>
             <WhatsappShareButton
          url={shareUrl}
          className='flex'
          
        >
          <WhatsappIcon size={20} round={true} />
           <p className="ml-2">Whatsapp</p>
        </WhatsappShareButton>
            </MenubarItem> 
          <MenubarItem>
            <TelegramShareButton
          url={shareUrl}
          className='flex'
          
        >
          <TelegramIcon size={20} round={true} />
           <p className="ml-2">Telegram</p>
        </TelegramShareButton>
        </MenubarItem> 
         
          </MenubarSubContent> 
          </MenubarSub>
      <MenubarSeparator />
      <MenubarItem>
        <DarkTheme/>
        </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>

    </div>
  )
}

export default Menu
