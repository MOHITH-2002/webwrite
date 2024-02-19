"use client"
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { api } from '@/convex/_generated/api'
import { CreateOrganization, useOrganization } from '@clerk/nextjs'
import { useMutation } from 'convex/react'
import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast'

const EmptyWorkspaces = () => {

    const createWork = useMutation(api.board.createBoard);
    const {organization} = useOrganization();
    const handleClick = ()=>{
        if(!organization){
            return;
        }
        createWork({
            title:"untitled",
            orgId: organization.id,
        }).then(()=>{
            toast.success('Board created successfully')
        }).catch(()=>{
            toast.error('Something error Try again')
        })
    }
  return (
        <div className="flex flex-col h-full items-center justify-center gap-2">
        <Image src="/nodashboards.png " height={250} width={250} alt="nofav" />
        <span className="text-muted-foreground text-xl">No Workspace found...</span>
       
        <Button onClick={handleClick}>Create Workspace</Button>

    </div>
      
   
  )
}

export default EmptyWorkspaces
