"use client"
import React, { useState } from 'react';

import EmptyOrg from './_components/Emptyorganisation';
import { useOrganization } from '@clerk/nextjs';
import BoardList from './_components/board/BoardList';


interface PageProps  {
    searchParams :{   /// it will search the params which user is enter
      searched?:string,
      favorites?:string

    }
}
const Dashboardpage = ({searchParams,}:PageProps) => {

const {organization} = useOrganization();
  return (
    <div className="pl-20 flex-1 h-full p-6">
     
      {
        organization ? (<BoardList orgId = {organization.id} Query={searchParams}  />):(
 
          <EmptyOrg/>
        )
      }
    </div>
  );
};

export default Dashboardpage;