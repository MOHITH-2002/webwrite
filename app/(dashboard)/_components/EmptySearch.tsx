import Image from 'next/image'
import React from 'react'
interface props{
    
        search?:string,
    
}
const EmptySearch = ({search,}:props) => {
  return (
      <div className="flex flex-col h-full items-center justify-center">
      <Image src="https://res.cloudinary.com/dpgxmmowq/image/upload/v1708358159/webwrite/nosearch_vwyu6s.png " height={250} width={250} alt="nofav" />
      <span className="text-muted-foreground text-xl"><b className="text-red-600">{search}</b> Not found...</span>
    
    </div>
  )
}

export default EmptySearch
