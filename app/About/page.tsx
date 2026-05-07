"use client";

import React from "react";
import { Navbar } from "../components/Navbar"; // Adjust path if needed
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, Variants } from "motion/react";
import {
  Github01Icon,
  Linkedin01Icon,
  NewTwitterRectangleIcon,
  RedditIcon,
} from "hugeicons-react";

// ==========================================
// 1. SHARED DATA & VARIANTS FOR FOOTER
// ==========================================
const footerLinks = {
  Product: ["App", "Add-ons", "Pricing", "Changelog"],
  Resources: ["User Manuals ", "Blog", "Case study"],
  Company: ["About", "Careers", "Privacy", "Terms"],
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1], // Buttery Apple-style easing
    },
  },
};

// ==========================================
// 2. THEME TOGGLE & FOOTER COMPONENTS
// ==========================================
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      role="switch"
      aria-checked={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-zinc-100 dark:focus-visible:ring-offset-zinc-950 bg-zinc-200 dark:bg-zinc-700"
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out flex items-center justify-center ${
          isDark ? "translate-x-5" : "translate-x-0"
        }`}
      >
        <span
          className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-200 ease-in ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        >
          <svg
            className="h-3 w-3 text-zinc-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
        </span>
        <span
          className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-200 ease-in ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <svg
            className="h-3 w-3 text-zinc-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        </span>
      </span>
    </button>
  );
};

const FooterSection = () => (
  <motion.footer
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    className="pt-16 pb-8 px-8 border-t border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 max-md:pt-12 max-md:px-6 transition-colors duration-300"
  >
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-md:gap-y-10 max-md:mb-12">
      {Object.entries(footerLinks).map(([title, links]) => (
        <motion.div variants={fadeUpItem} key={title}>
          <h4 className="text-xs font-dmmono tracking-widest text-zinc-900 dark:text-zinc-100 font-bold mb-4 uppercase transition-colors duration-300">
            {title}
          </h4>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}

      <motion.div variants={fadeUpItem}>
        <h4 className="text-xs font-dmmono tracking-widest text-zinc-900 dark:text-zinc-100 font-bold mb-4 uppercase transition-colors duration-300">
          CONNECT
        </h4>
        <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500">
          <div className="hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer transition-colors duration-300">
            <NewTwitterRectangleIcon />
          </div>
          <div className="hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer transition-colors duration-300">
            <Github01Icon />
          </div>
          <div className="hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer transition-colors duration-300">
            <Linkedin01Icon />
          </div>
          <div className="hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer transition-colors duration-300">
            <RedditIcon />
          </div>
        </div>
      </motion.div>
    </div>

    <motion.div
      variants={fadeUpItem}
      className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 max-md:items-start max-md:pt-6 transition-colors duration-300"
    >
      <div className="flex items-center gap-2 text-xl font-heading font-medium text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
        <Image
          src="/logo.png"
          alt="Logo"
          className="object-cover dark:invert transition-all"
          width={32}
          height={32}
        />
        Shram.ai
      </div>
      <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
        <div className="text-xs text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
          © 2026 Shram.ai Inc. All rights reserved.
        </div>
        <ThemeToggle />
      </div>
    </motion.div>
  </motion.footer>
);

const About = () => {
  // Value card data
  const valueCards = [
    {
      id: 1,
      title: "Exhibit Integrity",
      imageDesc: "An image of elephants walking in a vast savanna.",
      link: "https://framerusercontent.com/images/4rYzVqlX9MDEz8uImoowLG2R7A.png?scale-down-to=512&width=1024&height=642",
    },
    {
      id: 2,
      title: "Embrace Empathy",
      imageDesc: "An image of a snow-capped mountain peak.",
      link: "https://framerusercontent.com/images/NN3chsWdsz7I3lOtyCrzqZZx2k.png?width=789&height=1024",
    },
    {
      id: 3,
      title: "Pursue Perfection",
      imageDesc: "An image of a calm ocean or sea.",
      link: "https://framerusercontent.com/images/NN3chsWdsz7I3lOtyCrzqZZx2k.png?width=789&height=1024", // Note: This is a duplicate URL from the prompt, change if you have a different one!
    },
  ];

  // Primary Zinc button style (updated for dark mode support)
  const zincButtonStyle =
    "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-5 py-2.5 flex items-center gap-2 cursor-pointer hover:bg-zinc-800 dark:hover:bg-zinc-300 transition-colors duration-300 font-medium rounded-sm shadow-sm";

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans transition-colors duration-300">
      <Navbar />

      <main className="max-w-6xl mx-auto mt-10 border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors duration-300">
        {/* --- Main Headline Section --- */}
        <section className="mt-16 px-6 md:px-12 py-16 flex flex-col md:flex-row justify-between items-start gap-12">
          <h1 className="text-5xl md:text-5xl font-heading font-medium text-zinc-900 dark:text-zinc-50 leading-tight tracking-tight max-w-xl transition-colors duration-300">
            Building a future where <br className="hidden md:block" /> work
            manages itself
          </h1>

          {/* Main Logo / Illustration Placeholder */}
          <div className="shrink-0 flex items-center justify-center w-full md:w-auto mt-6 md:mt-0 pr-0 md:pr-10">
            <div className="p-8 bg-zinc-100 dark:bg-zinc-900/20 rounded-xl flex items-center justify-center text-zinc-400 dark:text-zinc-500 text-sm text-center transition-colors duration-300 border border-zinc-100 dark:border-zinc-900/30">
              <Image
                src="/logo.png"
                alt="Logo"
                width={80}
                height={80}
                className="dark:brightness-200 transition-all duration-300 dark:invert"
              />
            </div>
          </div>
        </section>

        {/* --- Mission Section --- */}
        <section className="px-6 md:px-12 py-16 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 font-sans mb-8 transition-colors duration-300">
              Mission.
            </h2>

            <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed transition-colors duration-300">
              <p>In Sanskrit, the word &quot;Shram&quot; means to work hard.</p>

              <p>
                While there is little we share in common with most people across
                the globe, it is our aspiration to have more than what we have
                now that unites us.
              </p>

              <p>
                It&#x27;s not that we are greedy or clueless, we just want to be
                around things that mean something to us - our family, an
                adventure or just about anything!
              </p>

              <p>
                While we celebrate impact, we overlook the intent with which we
                act. We believe that it is perhaps the only thing we have the
                privilege to control.
              </p>
            </div>
          </div>
        </section>

        {/* --- Values Section --- */}
        <section className="px-6 md:px-12 py-16 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 transition-colors duration-300">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-zinc-600 dark:text-zinc-400 italic text-xl font-dmmono transition-colors duration-300">
              &quot;Meaningful Intent&quot;
            </p>
          </div>

          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 font-sans mb-8 transition-colors duration-300">
              Values.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed transition-colors duration-300">
              We are engineers, designers and marketeers who look upto ideals
              and pride ourselves for aligning with them in everything we do.
            </p>
          </div>

          {/* Value Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueCards.map((card) => (
              <div
                key={card.id}
                className="group relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm cursor-pointer transition-colors duration-300"
              >
                {/* Background Image using Next.js Image */}
                <Image
                  src={card.link}
                  alt={card.imageDesc}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Text Overlay */}
                <div className="absolute inset-0 w-full h-full bg-zinc-900/40 flex items-center justify-center p-6 text-center transition-colors duration-500 group-hover:bg-zinc-900/60 dark:bg-black/60 dark:group-hover:bg-black/80">
                  <h3 className="text-2xl font-bold font-heading text-white tracking-tight drop-shadow-md">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Culture Section --- */}
        <section className="px-6 md:px-12 py-16 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 font-sans mb-8 transition-colors duration-300">
              Culture.
            </h2>

            <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed transition-colors duration-300">
              <p>
                We converted the terrace of an independent home into the
                loveliest workspace ever.
              </p>
              <p>
                We like hosting events with bright minds and have merged work
                with play.
              </p>
            </div>
          </div>

          {/* Culture Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm transition-colors duration-300">
              <Image
                src="https://framerusercontent.com/images/ebpp2Sd3AT8w0iyXubogns4JYg.png?scale-down-to=512&width=1024&height=768"
                alt="Indoor-Outdoor Terrace Workspace"
                fill
                className="object-cover dark:opacity-90 transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm transition-colors duration-300">
              <Image
                src="https://framerusercontent.com/images/o21BftwNn8eFplBcf1Kot0iEsA.png?scale-down-to=512&width=1024&height=768"
                alt="Team Group Photo"
                fill
                className="object-cover dark:opacity-90 transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* --- Final CTA Section --- */}
        <section className="py-24 px-6 md:px-12 text-center border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-heading font-medium tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 transition-colors duration-300">
              Find your flow with Shram.
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-md mx-auto transition-colors duration-300">
              If you are busy, high agency and value your time, Shram is for
              you.
            </p>

            <div className="flex justify-center">
              <button className={zincButtonStyle}>
                Request access
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
              </button>
            </div>
          </div>
        </section>
        <FooterSection />
      </main>
    </div>
  );
};

export default About;
