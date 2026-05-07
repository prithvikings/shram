"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ArrowRight01Icon } from "hugeicons-react";
import { animate } from "motion/react"; // <-- Import animate from Framer Motion

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // --- NEW: Buttery Smooth Framer Motion Scroll Handler ---
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Calculate where the element is relative to the top of the page.
      // We subtract 96px to account for the sticky navbar height (similar to scroll-mt-24).
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - 96;

      // Use Framer Motion to animate the window's scroll position
      animate(window.scrollY, targetPosition, {
        duration: 0.8, // Adjust this value to make it faster or slower (0.8s is usually a sweet spot)
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for a buttery smooth deceleration
        onUpdate: (latestValue) => {
          window.scrollTo(0, latestValue);
        },
      });
    }
  };

  return (
    <>
      <div className="sticky top-0 z-50 max-w-6xl bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 mx-auto p-4 flex justify-between items-center border border-zinc-300 dark:border-zinc-800 border-t-0 max-lg:px-6 max-md:px-4 max-md:border-x-0">
        <Link href={"/"} className="logo flex items-center gap-2 relative z-50">
          <Image
            src="/logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="dark:invert transition-all"
          />
          <h2 className="text-xl font-heading font-medium text-zinc-900 dark:text-zinc-50">
            Shram.ai
          </h2>
        </Link>

        <div className="btn flex items-center gap-8 text-xs font-dmmono max-lg:gap-6 text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-4 max-md:hidden">
            <Link
              href={"/Blog"}
              className="cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-sm px-2 py-1"
            >
              Blog
            </Link>
            <div className="w-[1px] h-2 bg-zinc-300 dark:bg-zinc-800"></div>
            <Link
              href={"/About"}
              className="cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-sm px-2 py-1"
            >
              About
            </Link>
            <div className="w-[0.5px] h-2 bg-zinc-300 dark:bg-zinc-800"></div>

            {/* Desktop Features Anchor */}
            <a
              href="#features"
              onClick={(e) => handleScroll(e, "features")}
              className="cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-sm px-2 py-1"
            >
              Features
            </a>

            <div className="w-[0.5px] h-2 bg-zinc-300 dark:bg-zinc-800"></div>

            {/* Desktop Pricing Anchor */}
            <a
              href="#pricing"
              onClick={(e) => handleScroll(e, "pricing")}
              className="cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-sm px-2 py-1"
            >
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-3 relative z-50">
            <button className="group relative flex items-stretch rounded-sm overflow-hidden text-white dark:text-zinc-900 cursor-pointer shadow-sm transition-all duration-150 ease-in-out active:scale-[0.97] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50">
              <div className="bg-zinc-900 dark:bg-zinc-50 px-3 py-2 transition-colors group-hover:bg-zinc-800 dark:group-hover:bg-zinc-200 flex items-center justify-center font-medium font-dmsans max-md:px-4">
                Get Access
              </div>
              <div className="bg-zinc-900 dark:bg-zinc-50 px-3 py-2 border-l border-zinc-700 dark:border-zinc-300 transition-colors group-hover:bg-zinc-800 dark:group-hover:bg-zinc-200 flex items-center justify-center max-md:hidden">
                <ArrowRight01Icon
                  size={16}
                  className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                />
              </div>
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15),_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_right,_rgba(0,0,0,0.1),_transparent_50%)] mix-blend-overlay transition-opacity duration-200 group-hover:opacity-80"></div>
              <div className="absolute inset-0 pointer-events-none border border-white/10 dark:border-black/10 rounded-sm"></div>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="hidden max-md:flex items-center justify-center p-2 -mr-2 rounded-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
              aria-label="Open Menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[100] bg-zinc-900/20 dark:bg-zinc-950/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 z-[101] h-full w-[280px] bg-zinc-50 dark:bg-zinc-900 border-l border-zinc-300 dark:border-zinc-800 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 h-[65px]">
          <span className="font-heading font-medium text-zinc-900 dark:text-zinc-50">
            Menu
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 -mr-2 rounded-sm text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
            aria-label="Close Menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col p-4 gap-2 font-dmmono text-sm overflow-y-auto">
          <Link
            href={"/Blog"}
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-3 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
          >
            Blog
          </Link>
          <Link
            href={"/About"}
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-3 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
          >
            About
          </Link>

          {/* Mobile Features Anchor */}
          <a
            href="#features"
            onClick={(e) => handleScroll(e, "features")}
            className="px-4 py-3 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
          >
            Features
          </a>

          {/* Mobile Pricing Anchor */}
          <a
            href="#pricing"
            onClick={(e) => handleScroll(e, "pricing")}
            className="px-4 py-3 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
          >
            Pricing
          </a>
        </div>

        <div className="mt-auto p-4 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-xs text-zinc-400 font-dmsans text-center">
            © {new Date().getFullYear()} Shram.ai
          </p>
        </div>
      </div>
    </>
  );
};
