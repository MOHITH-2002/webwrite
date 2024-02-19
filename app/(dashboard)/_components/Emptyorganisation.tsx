
import Image from 'next/image'
import React from 'react'
import {
  Dialog,
  DialogContent,

  DialogTrigger,
} from "@/components/ui/dialog"
import { CreateOrganization } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

const EmptyOrg = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
        
      <Image src="/newelement.png" alt="" width={350} height={350} />
      <h1 className="text-4xl gap-2 text-center"><b className='text-[#E56F8C]'>Welcome </b><b className='text-[#0080ff]'>to</b> <b className='text-[#7476ED]'>WebWrite</b></h1>
      <span className="text-muted-foreground">Create an organization to get started</span>
      <div className="mt-5">
        <Dialog>
           <DialogTrigger><Button>Create Organization</Button></DialogTrigger>
  <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
    <CreateOrganization/>
  </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default EmptyOrg
