"use client";

import { toast } from "react-hot-toast";
import { Link, Pencil, Trash2 } from "lucide-react";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";


import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
 
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";

import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { useApiMutation } from "@/hooks/api-mutation";
import { useRenameModal } from "@/components/store/zustand-model";
import { useState } from "react";


interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
};

export const SingleCardActions = ({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionsProps) => {
  const {onOpen} =useRenameModal();
  const [copied, setCopied] = useState(false);
    const {mutate} = useApiMutation(api.board.removeBoard)
  const url=`${window.location.origin}/board/${id}`
  const onCopyLink = () => {
   navigator.clipboard.writeText(url)
    
      .then(() => toast.success("Link copied"))
      .catch(() => toast.error("Failed to copy link"))
  };

  const onDelete = () => {
    mutate( {id} )
      .then(() => toast.success("Board deleted"))
      .catch(() => toast.error("Failed to delete board"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={sideOffset}
        className="w-60"
      >
        <DropdownMenuItem
          onClick={onCopyLink}
          className="p-3 cursor-pointer"
        >
          <Link className="h-4 w-4 mr-2" />
          Copy board link
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onOpen(id, title)}
          className="p-3 cursor-pointer"
        >
          <Pencil className="h-4 w-4 mr-2" />
          Rename
        </DropdownMenuItem>
        <DropdownMenuItem>

          <Button
            variant="ghost"
            className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
            onClick={onDelete}
            >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
              </DropdownMenuItem>
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
};