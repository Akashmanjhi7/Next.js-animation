'use client'

import Link from 'next/link'


const Navbar = () => {
  return (
  <>

  <h1 className='w-full text-center py-4 text-4xl font-bold '>Animation Practice</h1>
    <div className='p-10 text-3xl font-semibold w-full flex flex-wrap gap-8'>

    {["three","framer","scroll","oggy","3dModel","menu","buttons","eyes","icons" ,"lenis"].map((item,index)=>{
      return  <Link className='border px-4 py-2 rounded-md capitalize' key={index} href={`/${item}`}>{item}</Link>

    })}




   
    </div>
  </>
  )
}

export default Navbar
