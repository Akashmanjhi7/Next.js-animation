'use client'

import React, { useEffect, useState } from 'react'

const Eyes = () => {
const [rotate, setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove" , (e)=>{
            let mouseX = e.clientX
            let mouseY = e.clientY
            
            let deltaX= mouseX - window.innerWidth/2;
            let deltaY= mouseY - window.innerHeight/2


            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

            setRotate(angle-180)
            
        })
    })
    





  return (
    <div className='eyes w-full h-screen overflow-hidden bg-black text-[#00FF84]'>
    <div className='w-full h-full relative flex flex-col items-center justify-center  text-[16vw] leading-none font-black uppercase'>
        <h1>Why</h1>
        <h1 className='tracking-wider'>Choose</h1>
        <h1>us ?</h1>

        <div className='absolute flex gap-10   left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
           <div className='w-[12vw] h-[12vw] bg-zinc-100 rounded-full flex items-center justify-center'>
                <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
                <div style={{transform: `translate(-50% ,-50%) rotate(${rotate}deg) `}}  className= 'line absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  h-5 w-full'>
                    <div className='w-10 h-10 rounded-full bg-zinc-100 '></div>
                </div>
                </div>
           </div>
           <div className='w-[12vw] h-[12vw] bg-zinc-100 rounded-full flex items-center justify-center'>
           <div className=' relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
           <div style={{transform: `translate(-50% ,-50%) rotate(${rotate}deg) `}} className= 'line absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2   h-5 w-full'>
           <div className='w-10 h-10 rounded-full bg-zinc-100 '></div>
           </div>
           </div>
           </div>
        </div>
    </div>
    </div>
  )
}

export default Eyes
