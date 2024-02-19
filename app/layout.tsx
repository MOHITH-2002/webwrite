
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/auth-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import  { Toaster } from 'react-hot-toast';
import { ModalProvider } from "@/hydration-error/modelprovider";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webwrite",
  description: "Webwrite facilitates collaborative brainstorming with its online whiteboard, fostering dynamic idea exchanges among team members.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={inter.className}>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

        <ConvexClientProvider>

        <Toaster
        
  position="bottom-right"
  reverseOrder={false}
        />
        <ModalProvider/>
        
        {children}
        </ConvexClientProvider>
          </ThemeProvider>
        </body>
    </html>
  );
}
