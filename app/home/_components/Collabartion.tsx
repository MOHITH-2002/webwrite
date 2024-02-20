import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Collabartion = () => {
  return (
    <div className="flex relative flex-col w-full pt-20 pb-20 items-center gap-10 justify-center">
        <div className=" hidden lg:flex absolute top-10 left-[20%]">

        <Image src="https://res.cloudinary.com/dpgxmmowq/image/upload/v1708461040/api_qftc78.png" className="" height={60} width={80}  alt="error.png" />
        </div>
        <div className=" hidden lg:flex absolute bottom-[50%] right-[15%]">

        <Image src="https://res.cloudinary.com/dpgxmmowq/image/upload/v1708461040/01fe21_jaeinq.png" className="" height={160} width={160}  alt="error.png" />
        </div>
        <Image src="https://res.cloudinary.com/dpgxmmowq/image/upload/v1708460156/png_mgrljp.png" className="rounded-md" height={400} width={400}  alt="error.png" />
    <span className="text-slate-100 text-3xl text-center">Integrate tools like interactive <Link href="/" className="hover:text-[#1DA1F2] underline ">whiteboards </Link> <br/> to enhance the ability to work together.</span>
    </div>
  )
}

export default Collabartion
