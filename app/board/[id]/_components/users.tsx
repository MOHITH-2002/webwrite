"use client"
import { useOthers, useSelf } from '@/liveblocks.config'
import { Avatar } from '@radix-ui/react-avatar'
import React from 'react'
import UserAvatar from './user-avatar';
import { connectionIdToColor } from '@/lib/utils';
const max_show_user=2;
const Users = () => {
  const users =useOthers();
  const currentUser = useSelf();
  const has_more_user=users.length> max_show_user;
  return (
       <div className="flex bg-white mr-2 md:mr-6 dark:bg-[#1DA1F2]/10 rounded-md px-1.5 h-12  mt-2 items-center shadow-md">
        <div className="flex gap-1">
      {
        users.slice(0, max_show_user).map(({connectionId,info})=>{
          return(

            <UserAvatar
            borderColor = {connectionIdToColor(connectionId)}
            key={connectionId}
            src={info?.picture}
            name={info?.name}
            fallback={info?.name?.[0] ||"A"}
            />

            )
        })

      }
      {
        currentUser && 
                  (
          <UserAvatar
borderColor = {connectionIdToColor(currentUser.connectionId)}
          src={`${currentUser.info?.picture}`}
          name={`${currentUser.info?.name} (You)`}
          fallback={currentUser.info?.name?.[0]}
          />
        )
      }

      {
        has_more_user && 
        (
          <UserAvatar
        
          name={`${users.length-max_show_user} more`}
          fallback={`+ ${users.length-max_show_user}`}
          />
        )
      }
        </div>
    
    </div>
  )
}

export default Users
