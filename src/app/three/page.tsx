'use client';
import React from 'react'
import Three from '../../components/threejs/Three'
import Marquee from "react-fast-marquee";
const Threepage = () => {
  return (
    <div className='bg-black min-h-[120vh] w-full text-zinc-100 relative overflow-x-hidden'>
    <div className="flex justify-center items-center w-full pt-10  bg-black">
      <h1 className="stroke font-black text-[6vw] ">Our Mentors</h1>
    </div>
      <Three/>
      <div className='absolute left-0 top-[70%]  -translate-y-1/2 '>
<Marquee className='mt-20 strokes text-transparent  font-black text-[6vw] '
speed={100}
loop={0}
gradient={true}
gradientColor='black'
gradientWidth={"20%"}
>
<h1>. Harsh Sharma</h1>
<h1>. Adarsh Gupta</h1>
<h1>. Dhanesh Malviya</h1>
</Marquee>

</div>

  </div>

  )
}

export default Threepage
