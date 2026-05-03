import React from 'react'
import Hero from './components/Hero'
import {Navbar} from './components/Navbar'
import Divider from './components/Divider'
import Whatwedo from './components/Whatwedo'
import Shift from './components/Shift'
import Benchmark from './components/Benchmark'
import Enterprise from './components/Enterprise'
const page = () => {
  return (
    <div className='bg-zinc-100 w-full min-h-screen pb-16'>
      <Navbar />
      <Hero />
      <Divider />
      <Shift />
      <Whatwedo />
      <Benchmark />
      <Enterprise />
    </div>
  )
}

export default page