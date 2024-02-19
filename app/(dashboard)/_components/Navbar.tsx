"use client"

import React from "react";
import SearchWeb from "./Search";
import NavbarComponents from "./navbar_components";


const Navbar = () => {


  return <div className="flex gap-x-5 pl-20 justify-between items-center p-4">
    <div className="flex flex-1">
        <SearchWeb/>
    </div>

    <NavbarComponents/>
    

    </div>;
};

export default Navbar;
