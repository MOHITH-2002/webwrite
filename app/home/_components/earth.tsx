import Image from 'next/image'
import React from 'react'

const Earth = () => {
  return (
    <div className="flex h-min flex-col items-center lg:flex-row gap-10 lg:px-5 px-1">
    <div className="flex-1">
        <Image src="https://res.cloudinary.com/dpgxmmowq/image/upload/v1708973655/Pin_on_CREATIVE_ARTS__Amateur_Professional_Artists_Digital_Drawings_Paintings_Illustrations_Wallpapers_fswr5x.jpg"  alt="earth" width={500} height={400} className="object-cover grayscale hover:grayscale-0 transition-all brightness-50" />
    </div>
    <div className=" hidden lg:flex flex-1">
        <Image src="https://res.cloudinary.com/dpgxmmowq/image/upload/v1708973655/Pin_on_CREATIVE_ARTS__Amateur_Professional_Artists_Digital_Drawings_Paintings_Illustrations_Wallpapers_fswr5x.jpg" alt="earth" width={200} height={400} />
    </div>
    </div>
  )
}

export default Earth
