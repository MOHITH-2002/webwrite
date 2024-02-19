import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
  <div className="flex h-full w-full justify-center items-center ">
    <Image width={100} height={100} className="animate-ping " src="/logo.svg" alt="src"/>
  </div>
  );
};

export default Loading;
