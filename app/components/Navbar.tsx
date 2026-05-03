import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 max-w-6xl bg-zinc-50 mx-auto p-4 flex justify-between items-center border border-zinc-300 border-t-0">
      <Link href={"/"} className="logo flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        <h2 className="text-xl font-heading font-medium">Shram.ai</h2>
      </Link>
      
      <div className="btn flex items-center gap-8 text-xs font-dmmono">
        
        {/* Navigation Links Group with Dividers */}
        <div className="flex items-center gap-6">
          <Link href={"/About"} className="cursor-pointer hover:text-zinc-600 transition-colors">
            About
          </Link>
          
          {/* Divider */}
          <div className="w-[1px] h-2 bg-zinc-300"></div>
          
          <div className="cursor-pointer hover:text-zinc-600 transition-colors">
            Features
          </div>
          
          {/* Divider */}
          <div className="w-[0.5px] h-2 bg-zinc-300"></div>
          
          <div className="cursor-pointer hover:text-zinc-600 transition-colors">
            Pricing
          </div>
        </div>
        
        {/* Updated Get Access Split Button */}
        <div className="flex items-stretch rounded-sm overflow-hidden text-white cursor-pointer shadow-sm">
          <div className="bg-zinc-900 px-4 py-2 hover:bg-zinc-800 transition-colors flex items-center justify-center font-medium">
            Get Access
          </div>
          <div className="bg-zinc-900 px-3 py-2 border-l border-zinc-700 hover:bg-zinc-800 transition-colors flex items-center justify-center">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
};