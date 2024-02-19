"use client"
import React from 'react'
import { useOrganizationList } from "@clerk/nextjs";
import  Indivdualitem  from './indivdual-item';

const Organisationlist = () => {
    const { isLoaded, setActive, userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  if(!userMemberships) {
    return null;
  }
  return (
        <div  className="flex flex-col gap-3">
     
        {userMemberships.data?.map((mem) => (
          
           <Indivdualitem  key={mem.organization.id}
          id={mem.organization.id}
          name={mem.organization.name}
          imgUrl={mem.organization.imageUrl}/>
            
          
        ))}
      
 
    </div>
  )
}

export default Organisationlist
