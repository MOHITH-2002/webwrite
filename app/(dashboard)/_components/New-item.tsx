"use client"
import { Plus } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,

  DialogTrigger,
} from "@/components/ui/dialog"
import { CreateOrganization } from "@clerk/clerk-react";
import { Hint } from "@/components/_created_components/tooltip";


const Newitem = () => {
  return (
   

 <Dialog>
  <DialogTrigger asChild>
    <div className="aspect-square">
     <Hint 
    label="Create a new organization"
        side="right"
        align="start"
        sideOffset={18}
    >

    <div className="bg-[#1DA1F2]/10 w-full h-full rounded-sm cursor-pointer  flex items-center justify-center text-[#1DA1F2]">
   <Plus size={30} strokeWidth={2.25} className="" />

    </div>
    </Hint>
    </div>
    </DialogTrigger>
  <DialogContent className=" p-0 bg-transparent border-none">
   <CreateOrganization/>
  </DialogContent>
</Dialog>

  );
};

export default Newitem;
