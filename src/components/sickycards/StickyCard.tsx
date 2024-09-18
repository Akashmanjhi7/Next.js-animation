'use client'

import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)


const images = [
    "/drive/1.png",
    "/drive/2.png",
    "/drive/3.png",
    "/drive/4.png",
    "/drive/5.png",
    "/drive/6.png",
]

const StickyCard = () => {
    useGSAP(() => {
        gsap.utils.toArray('.card').forEach((card : any) => {
          gsap.to(card, {
            scale: 0.8,
            opacity: 0,
           scrollTrigger:{
            trigger: card,
            start: "top 15%",
            end: "bottom 15%",
            scrub: true,
            
           }
          });
        });
      });
    
  return (
    <div className=' relative w-full min-h-screen bg-black gap-12 pt-[13vh] text-white text-center flex items-center justify-center flex-col pb-[13vh]  '>


      {images.map((images,index)=>(
              <div className='card bg-[#2e251e] sticky top-[13vh] flex flex-col gap-4 items-center rounded-md py-[15vh] w-[90vw] '>
              <img src={images} alt=""  className='h-32 aspect-square ' />

              <h1 className='text-5xl font-thin mt-6  '>
                  The
                  <br />
                  <span className='font-bold' >Algorithm</span>
              </h1>


              <p className='w-2/3 text-center mt-4 text-[1.2vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, numquam!</p>

          </div>

      ))}




    </div>
  )
}

export default StickyCard
