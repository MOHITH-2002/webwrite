
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Hint } from '@/components/_created_components/tooltip'

interface props{
    src?:string,
    name?:string,
    fallback?:string,
     borderColor?: string;

}
const UserAvatar = ({src, name, fallback,borderColor}:props) => {
  return (
    <Hint 
    label={name ||"Anonymous"}
    side="bottom"
    >
      <Avatar
      className="h-8 w-8 border-2"
       style={{ borderColor }}
      >
  <AvatarImage src={src} />
  <AvatarFallback>{fallback}</AvatarFallback>
</Avatar>

    </Hint>
  )
}

export default UserAvatar
