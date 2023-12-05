import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dm_sans = DM_Sans({ weight: ["600", "400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Look",
  description: "Generated by create next app",  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto lg:w-2/3 w-screen">
          <div className="p-4 backdrop-blur-lg bg-black/30 fixed z-10 w-screen font-semibold">
            <h3 className={`text-white font-extrabold text-xl tracking-widest${dm_sans.className}`}>Look</h3>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
