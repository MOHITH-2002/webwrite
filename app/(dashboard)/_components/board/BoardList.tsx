"use client"
import React from 'react'
import EmptyFavorites from '../EmptyFavorites';
import EmptyWorkspaces from '../EmptyWorkspaces';
import EmptySearch from '../EmptySearch';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';


import Boardcard from '../Boardcard';
import { NewBoardButton } from './NewBoardButton';
import SkeletonLoader from '@/components/_created_components/skeleton';
interface BoardList {
    orgId:string,
    Query:{
        searched?:string,
      favorites?:string
    }

}
const BoardList = ({orgId,Query}:BoardList) => {
    const data = useQuery(api.boards.get,{orgId,search:Query.searched});
   
    
    if(data===undefined){
        return (
             <div>
        <h2 className="text-3xl">
          {Query.favorites ? "Favorite boards" : "Team boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <NewBoardButton orgId={orgId} disabled />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
      </div>
        );
    }
    if(!data?.length && Query.favorites){
        return (
            <EmptyFavorites/>
        )
    }
    if(!data?.length && Query.searched){
        return (
            <EmptySearch search={Query.searched} />
            )
    }
    if(!data?.length){
        return (
            <EmptyWorkspaces/>
            )
    }

  return (
    <div>
        <div>
            <h1 className="text-muted-foreground text-2xl font-bold">{Query.favorites ? "Favorites Boards" : "Team Boards"}</h1>
        </div > 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-8 pb-8">
            <NewBoardButton orgId={orgId} />
    {
    data?.map((board)=>(

        <Boardcard 
        key={board._id}
        id={board._id}
        title={board.title}
        orgId={board.orgId}
        authorId={board.authorId}
        authorName={board.authorName}
        created_At={board._creationTime}
        imageUrl={board.imageUrl}
        bg_colors={board.bg_colors}
        isFavorite={false}


        />
        ))
    }
        </div>
    </div>
  )
}

export default BoardList
