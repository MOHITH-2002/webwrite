"use client"

import { useConvexAuth } from "convex/react";
import Navbar from "../_components/Navbar";

import Sidebar from "../_components/Sidebar";

import Loading from "@/components/_created_components/Loading";
import { useState } from "react";
import { redirect } from "next/navigation";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
const [isOrganisation, setOrganisation] = useState(true);



  const toggleOrganisation = () => {
    setOrganisation(!isOrganisation);
  };


  const {isLoading,isAuthenticated } = useConvexAuth();
  
  
  
  if(!isLoading && !isAuthenticated) {
    return redirect("/home")

  }

if (isLoading) {
return (
  <div className="h-full flex items-center justify-center">
    <Loading />
  </div>
);
}
  return (
 

        <main className="flex w-full h-full">
                <Sidebar toggleOrganisation={toggleOrganisation}/>
                {/* {isOrganisation &&
                  <Organisationsidebar />} */}
                {/* <Grip  /> */}

            <div className="flex flex-col gap-3  w-full">
              <div className="">
                <Navbar/>
              </div>
              <div className="flex h-[100%]">



        {children}
              </div>
            </div>
        </main>
       
  );
}
