import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webwrite | Dashboard",
  description: "Webwrite facilitates collaborative brainstorming with its online whiteboard, fostering dynamic idea exchanges among team members.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


    return (


        <main className="w-full h-full">
               



        {children}
             
        </main>
       
  );
}
