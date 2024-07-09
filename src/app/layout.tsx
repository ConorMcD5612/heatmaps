import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/Provider";
import LoginBtn from "./components/loginBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="container p-[1vw] rounded center min-h-screen w-1/3">
            
            <Providers>
           
              {children}
              </Providers>
          </div>
        </div>
      </body>
    </html>
  );
}
