import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
  <>

  <h1 className='w-full text-center py-4 text-4xl font-bold '>Animation Practice</h1>
    <div className='p-10 text-3xl font-semibold w-full flex flex-wrap gap-8'>
      <Link className='border px-4 py-2 rounded-md' href={"/three"}>Three js</Link>
      <Link className='border px-4 py-2 rounded-md' href={"/framer"}>Framer Motion</Link>
      <Link className='border px-4 py-2 rounded-md' href={"/scroll"}>Scroll Animation</Link>
      <Link className='border px-4 py-2 rounded-md' href={"/oggy"}>Oggy & Cockroch</Link>
    </div>
  </>
  )
}

export default Navbar
