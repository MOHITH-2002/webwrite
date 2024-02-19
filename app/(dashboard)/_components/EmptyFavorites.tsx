import Image from 'next/image'
import React from 'react'

const EmptyFavorites = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <Image src="https://res.cloudinary.com/dpgxmmowq/image/upload/v1708358197/webwrite/nofav_tuuguo.png" height={250} width={250} alt="nofav" />
      <span className="text-muted-foreground text-xl">No favorites found...</span>
      
    </div>
  )
}

export default EmptyFavorites
