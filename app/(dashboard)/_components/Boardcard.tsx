"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import { Footer } from './board/Footer'
import { SingleCardActions } from '@/components/_created_components/single-card-actions'
import { MoreVertical } from 'lucide-react'
interface boardCard {
  id:string,
  title:string,
  orgId:string,
  authorId:string,
  authorName:string,
  created_At:number,
  imageUrl:string,
  isFavorite:boolean,
  bg_colors:string
}
const Boardcard = ({id,title,orgId,authorId,authorName,created_At,imageUrl,isFavorite,bg_colors}:boardCard) => {
  
  const {userId} = useAuth()

  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(created_At, {
    addSuffix: true,
  });
  return (
    <Link href={`/board/${id}`}>
    <div className="group aspect-[100/127] border rounded-lg  dark:hover:shadow-[0_2px_2px_2px_#434242] hover:shadow-[0_2px_2px_2px_#D6E4E5] justify-between flex flex-col overflow-hidden">
      <div className={cn("relative flex-1", bg_colors )}>
        <Image src={imageUrl} alt="boards" fill className="object-fit"/>
        <SingleCardActions
            id={id}
            title={title}
            side="right"
          >
            <button
              className="absolute top-1 right-0 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-2 outline-none"
            >
              <MoreVertical
                className=" opacity-75 hover:opacity-100 transition-opacity"
              />
            </button>
          </SingleCardActions>

      </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={()=>{}}
          disabled={false}
          bg_colors={bg_colors}
        />
      
    </div>
    </Link>
  )
}

export default Boardcard
