"use client"
import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="outline" size="sm" className="rounded-sm" onClick={toggleTheme}>
      {theme === "dark" ? (
        
         <>
          <SunIcon
            className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 "
          />
          
        
        </>
      ) : (
       <>
          <MoonIcon
            className=" h-[1rem] w-[1rem]  transition-all rotate-0 scale-100 "
          />
        
        </>
      )}
    </Button>
  );
}