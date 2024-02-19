
import React from "react";
import Newitem from "./New-item";
import Organisationlist from "./organisation-list";

import { ModeToggle } from "@/components/_created_components/dark-mode";
import { UserButton } from "@clerk/clerk-react";
import SidebarMenu from "./SidebarMenu";

const Sidebar = ({toggleOrganisation}:any) => {
  return (

      <aside className="fixed z-[1] left-0 p-2 gap-y-5 flex flex-col justify-between h-full w-[60px] bg-[#0c141c]">
        <div className="flex flex-col gap-4">

         <div className="h-14 flex items-center gap-x-2 ">

        <SidebarMenu toggle={toggleOrganisation}/>
         </div>
        <Newitem/>
        <Organisationlist/>
     
        
        </div>
        <div className="fixed bottom-0 bg-[#0c141c] left-0 w-[60px]">
          <div className="flex flex-col p-2 gap-3 items-center justify-center">

          <ModeToggle/>
          <UserButton afterSignOutUrl="/home"/>
          </div>
        </div>
        </aside>
      ) 
  ;
};

export default Sidebar;
