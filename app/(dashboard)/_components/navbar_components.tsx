"use client"
import React from 'react'

import { Hint } from "@/components/_created_components/tooltip";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, useOrganization } from "@clerk/nextjs";
import { Grip, LayoutDashboard, Star } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,

  SheetTrigger,
} from "@/components/ui/sheet"
import { useSearchParams } from "next/navigation";
import { InviteButton } from './invite';
const NavbarComponents = () => {
  const {organization} = useOrganization();
    
const SearchParams = useSearchParams();
const favorites = SearchParams.get('favorites')
  return (
    <>
     <div className="hidden md:flex  md:gap-2 ">
      {/* desktop size */}
      <Hint
    label="WorkSpace"
    side="bottom"
    align="start"
    sideOffset={10}
    >

      <Button
          variant={favorites ? "ghost" : "secondary"}
          asChild
          size="lg"
         className=" px-2 w-full hidden lg:flex"
          >
          <Link href="/" className="flex items-center justify-center">
            <LayoutDashboard className="h-4 w-4 m-1" />
            
          </Link>
        </Button>
        </Hint>
        <Hint
    label="Favorites"
    side="bottom"
    align="start"
    sideOffset={10}
    >

        <Button
          variant={favorites ? "secondary" : "ghost"}
          asChild
          size="lg"
          className=" px-2 w-full"
          >
          <Link href={{
            pathname: "/",
            query: { favorites: true }
            
          }}  className="flex items-center justify-center" >
            <Star className="h-4 w-4 m-1" />
            
          </Link>
        </Button>
            </Hint>
            {
              organization &&(

                <InviteButton/>
              )
            }
        <OrganizationSwitcher
      
      hidePersonal
      appearance={{
          elements: {
              rootBox: {
              display: "flex",
           
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              color:"blue",
              
            },
            organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid gray",
                justifyContent: "space-between",
                color:"purple"
                
            }
        }
    }
}
/>
    
      </div>
      <div className="flex md:hidden gap-3">
         <div className="flex w-12">

              <OrganizationSwitcher
        
        hidePersonal
        appearance={{
            elements: {
              rootBox: {
                  display: "flex",
                  
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  color:"blue",
                  
                },
                organizationSwitcherTrigger: {
                    padding: "6px",
                    width: "100%",
                    borderRadius: "8px",
                    
                    justifyContent: "space-between",
                    color:"purple"
                    
                }
            }
        }
    }
/>
    </div>
    
        <Sheet>
  <SheetTrigger><Grip size={35} className="text-muted-foreground"/></SheetTrigger>
  <SheetContent className="pt-20">
   
      <div className=" flex flex-col gap-3 ">
      
     
    

      <Button
          variant={favorites ? "ghost" : "secondary"}
          asChild
          size="lg"
         className=" px-2 w-full"
          >
          <Link href="/" className="flex items-center justify-center">
            <LayoutDashboard className="h-4 w-4 m-1" /> Dashboard
            
          </Link>
        </Button>
       
  

        <Button
          variant={favorites ? "secondary" : "ghost"}
          asChild
          size="lg"
          className=" px-2 w-full"
          >
          <Link href={{
            pathname: "/",
            query: { favorites: true }
            
          }}  className="flex items-center justify-center" >
            <Star className="h-4 w-4 m-1" />
            Favorites
          </Link>
        </Button>
          
            {
              organization &&(

                <InviteButton/>
              )
            }
    
    
      </div>
      
    
  </SheetContent>
</Sheet>
           
    </div>
</>
  )
}

export default NavbarComponents
