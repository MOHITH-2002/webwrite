"use client"

import { RoomProvider } from "@/liveblocks.config"
import { ClientSideSuspense } from "@liveblocks/react"
import { ReactNode } from "react"
import RoomLoading from "./RoomLoading";
import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { Layer } from "@/types";

interface RoomProps {
    children:ReactNode;
    roomId:string,
}
export const Room = ({children, roomId}:RoomProps) =>{
 
    
    return (
        <RoomProvider id={roomId} initialPresence={{cursor:null,selection:[],pencilDraft:null, penColor:null}}               initialStorage={{
            layers:new LiveMap<string,LiveObject<Layer>>(),
            layerIds : new LiveList(),

        }}>
            <ClientSideSuspense fallback={<RoomLoading/>}>
        {() => children}
      </ClientSideSuspense>
        </RoomProvider>
        
    )

}