"use client";


import { Plus } from "lucide-react";


import { cn } from "@/lib/utils";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import toast from "react-hot-toast";



interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
};

export const NewBoardButton = ({
  orgId,
  disabled,
}: NewBoardButtonProps) => {
    const createWork = useMutation(api.board.createBoard);
    
    const handleClick = ()=>{
       
        createWork({
            title:"Untitled file",
            orgId: orgId,
        }).then(()=>{
            toast.success('Board created successfully')
        }).catch(()=>{
            toast.error('Something error Try again')
        })
    }

  return (
     <button
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
        (disabled) && "opacity-75 hover:bg-blue-600 cursor-not-allowed"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">
        New Workspace
      </p>
    </button>
  );
};