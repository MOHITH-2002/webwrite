"use client"
import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import Hero from './_components/Hero'
import Navbar from './_components/Navbar'
import GradientRound from './_components/gradient-round'
import Intro from './_components/intro'
import Footer from './_components/footer'

const HomePage = () => {
  return (
    <main className='w-full h-min bg-black'>
      <Navbar/>
        <Hero/>
        <GradientRound/>
        <Intro/>
        <Footer/>
    </main>
  )
}

export default HomePage
