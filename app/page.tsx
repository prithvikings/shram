import React from "react";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Divider from "./components/Divider";
import Whatwedo from "./components/Whatwedo";
import What from "./components/What";
import Shift from "./components/Shift";
import Benchmark from "./components/Benchmark";
import Enterprise from "./components/Enterprise";
import Localisation from "./components/Localisation";
import Testimonials from "./components/Testimonials";
import Pricing from "./Pricing/page";
const page = () => {
  return (
    <div className="bg-zinc-100 w-full min-h-screen">
      <Navbar />
      <Hero />
      <Divider height={24} />
      <Shift />
      <Divider height={16} />
      <What />
      <Whatwedo />
      <Benchmark />
      <Localisation />
      <Divider height={24} />
      <Testimonials />
      <Divider height={16} />

      <Pricing />
    </div>
  );
};

export default page;
