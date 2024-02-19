"use client"
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import {useQuery } from 'convex/react'

import React from 'react'
import Menu from './Menu'
import { useRenameModal } from '@/components/store/zustand-model'
import { Button } from '@/components/ui/button'
import RoomLoading from '@/components/_created_components/RoomLoading'
interface props {
    boardId:string;
    downloadpdf:()=>void;
}

const Infomation = ({boardId,downloadpdf}:props) => {


  const {onOpen} =useRenameModal();
  const data = useQuery(api.board.get,{
    id:boardId as Id<"boards">
  })
  if(data==undefined){
    return (
      <RoomLoading/>
    )
  }
  return (
    <div className="rounded-md ml-2 md:ml-6 mt-2 h-12 flex justify-center items-center shadow-md dark:bg-[#1DA1F2]/10 ">
    <Menu id={boardId} downloadpdf={downloadpdf}/>

    <Button className='mr-2' onClick={()=>onOpen(data._id,data?.title)} variant="outline" size="sm">
      {data?.title}
      </Button>
     
    </div>
  )
}

export default Infomation
