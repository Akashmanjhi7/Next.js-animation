'use client'
import Lenis from 'lenis'
import React, { useEffect } from 'react'
import 'lenis/dist/lenis.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const page = () => {
 
  useEffect(()=>{
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

  })

  useGSAP(()=>{
    document.querySelectorAll('.elem').forEach(elem => {
      let image = elem.querySelector('img');
  
      let xTransform = gsap.utils.random(-100, 100);
      gsap.registerPlugin(gsap.timeline);
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline();
  
      tl.set(image, {
          transformOrigin: `${xTransform < 0 ? '0%' : '100%'}`,
          
      },"start");
  
      tl.to(image, {
          scale: 0,
          borderRadius: '100%',
          ease: "none",
          scrollTrigger: {
              trigger: image,
              start: 'top 10%',
              end: 'bottom top',
             
              scrub: true,
          }
      },"start")
      
      .to(elem,{
          xPercent:xTransform,
          ease: "none",
          scrollTrigger: {
              trigger: image,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
          }
      },"start")
      
  });
  })

  return (
    <div className='lenis w-full'>

<div className="w-full bg-zinc-900 relative">
<div className="grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden">
   <div className="elem col-span-1 row-span-1" style={{ "--r": 3, "--c": 5 } as React.CSSProperties}><img src="img/1.jpg" alt="image1"  /></div>
   <div className="elem col-span-1 row-span-1" style={{ "--r": 7, "--c": 3 } as React.CSSProperties}><img src="img/2.jpg" alt="image2" /></div>
   <div className="elem col-span-1 row-span-1" style={{ "--r": 1, "--c": 7 } as React.CSSProperties}><img src="img/3.jpg" alt="image 3" /></div>
   <div className="elem col-span-1 row-span-1" style={{ "--r": 9, "--c": 3 } as React.CSSProperties}><img src="img/4.jpg" alt="image 4" /></div>
   <div className="elem col-span-1 row-span-1" style={{ "--r": 5, "--c": 6 } as React.CSSProperties}><img src="img/5.jpg" alt="image 5" /></div>
   <div className="elem col-span-1 row-span-1" style={{ "--r": 2, "--c": 4 } as React.CSSProperties}><img src="img/6.jpg" alt="image 6" /></div>
   <div className="elem col-span-1 row-span-1" style={{ "--r": 8, "--c": 6 } as React.CSSProperties}><img src="img/7.jpg" alt="image 7" /></div>
   <div className="elem col-span-1 row-span-1" style={{ "--r": 4, "--c": 7 } as React.CSSProperties}><img src="img/8.jpg" alt="image 8" /></div>
   <div className="elem col-span-1 row-span-1" style={{ "--r": 6, "--c": 5 } as React.CSSProperties}><img src="img/9.jpg" alt="image 9" /></div>
   <div className="elem col-span-1 row-span-1" style={{ "--r": 10, "--c": 4 } as React.CSSProperties }><img src="img/10.jpg" alt="image 10" /></div>
   <div className="elem col-span-1 row-span-1" style={{ "--r": 3, "--c": 8 } as React.CSSProperties }><img src="img/11.jpg" alt="image 11" /></div>
   <div className="elem col-span-1 row-span-1" style={{ "--r": 7, "--c": 6 } as React.CSSProperties }><img src="img/12.jpg" alt="image 12" /></div>
   <div className="elem col-span-1 row-span-1" style={{ "--r": 1, "--c": 1 } as React.CSSProperties }><img src="img/13.jpg" alt="image 13" /></div>
   <div className="elem col-span-1 row-span-1" style={{ "--r": 9, "--c": 6 } as React.CSSProperties }><img src="img/14.jpg" alt="image 14" /></div>
   <div className="elem col-span-1 row-span-1" style={{ "--r": 5, "--c": 3 } as React.CSSProperties }><img src="img/15.jpg" alt="image 15" /></div>
   <div className="elem col-span-1 row-span-1" style={{ "--r": 2, "--c": 7 } as React.CSSProperties }><img src="img/16.jpg" alt="image 16" /></div>
   <div className="elem col-span-1 row-span-1" style={{ "--r": 8, "--c": 5 } as React.CSSProperties }><img src="img/17.jpg" alt="image 17" /></div>
   <div className="elem col-span-1 row-span-1" style={{ "--r": 4, "--c": 3 } as React.CSSProperties }><img src="img/18.jpg" alt="image 18" /></div>
   <div className="elem col-span-1 row-span-1" style={{ "--r": 6, "--c": 8 } as React.CSSProperties}><img src="img/19.jpg" alt="image 19" /></div>
   <div className="elem col-span-1 row-span-1" style={{ "--r": 10, "--c": 6 } as React.CSSProperties}><img src="img/20.jpg" alt="image 20" /></div>
</div>

<div className="header fixed inset-0 flex flex-col items-center justify-center  text-white">
    <h1 className="text-[6vw]  font-bold mb-4">FRONTEND DEVELOPER</h1>
    <p className="text-xl">Akash Manjhi</p>
</div>

</div>
<div className="py-96 flex items-center justify-center relative bg-[#D1D1D1] z-[999] ">
    <div className="w-3/4 text-center ">
        <p className="text-[2.4vw] text-left">
            As a passionate frontend developer, I bring designs to life with clean, efficient code. With expertise in HTML, CSS, and JavaScript, I create responsive and intuitive user interfaces that enhance the digital experience. My commitment to staying current with the latest web technologies ensures that I deliver modern, cutting-edge solutions. I thrive on collaborating with teams to transform creative concepts into functional, beautiful websites that engage and delight users.
        </p>
    </div>


</div>



    </div>
  )
}

export default page
