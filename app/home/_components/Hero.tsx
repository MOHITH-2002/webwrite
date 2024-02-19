import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import React from 'react'

const Hero = () => {
  return (
      <>
      <Button asChild>
      <SignInButton afterSignInUrl='/'/>
      </Button>
      </>
  )
}

export default Hero
