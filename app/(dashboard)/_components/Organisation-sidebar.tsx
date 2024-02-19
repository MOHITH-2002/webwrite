// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Poppins } from "next/font/google";
// import { LayoutDashboard, Star } from "lucide-react";
// import { OrganizationSwitcher } from "@clerk/nextjs";
// import { useSearchParams } from "next/navigation";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";

// const font = Poppins({
//   subsets: ["latin"],
//   weight: ["600"],
// });

// export const Organisationsidebar = () => {
//   const searchParams = useSearchParams();
//   const favorites = searchParams.get("favorites");

//   return (
//     <div className="hidden lg:flex flex-col space-y-6  w-[306px] pl-[60px] pt-5 bg-[#E7E7E7] dark:bg-[#0c141c]/10">
//       <Link href="/">
//         <div className="flex items-center gap-x-2 ">
          
//       {/* <Image
//             src="/logo.svg"
//             alt="Logo"
//             height={100}
//             width={100}
//           /> */}

   
          
//           <h1 className={cn(
//             "font-semibold text-3xl text-[#1DA1F2]" ,
//             font.className,

//           )}>
//             WebWrite
//           </h1>
//         </div>
//       </Link>
      
//       <div className="space-y-1 w-full">
//         <Button
//           variant={favorites ? "ghost" : "secondary"}
//           asChild
//           size="lg"
//           className="font-normal justify-start px-2 w-full"
//         >
//           <Link href="/Dashboard">
//             <LayoutDashboard className="h-4 w-4 mr-2" />
//             Team boards
//           </Link>
//         </Button>
//         <Button
//           variant={favorites ? "secondary" : "ghost"}
//           asChild
//           size="lg"
//           className="font-normal justify-start px-2 w-full"
//         >
//           <Link href={{
//             pathname: "/Dashboard",
//             query: { favorites: true }
//           }}>
//             <Star className="h-4 w-4 mr-2" />
//             Favorite boards
//           </Link>
//         </Button>
//       </div>
//     </div>
//   );
// };