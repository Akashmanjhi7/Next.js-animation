'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import _ScrollTrigger from 'gsap/ScrollTrigger';
import  { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(_ScrollTrigger)




interface CanvasElement extends HTMLCanvasElement {
  height: number;
  width: number;
  getContext : any
}

const ScrollTrigger = () => {
  const [vals, setVals] = useState({
    currentIndex:1,
    maxIndex:656
  })
                        

  const imageObject = useRef<HTMLImageElement[]>([]);
  const imageLoad = useRef<number>(0);
  const CanvasRef = useRef<HTMLCanvasElement | null>(null);
  const parent = useRef(null)

  useEffect(() => {
    preloadImages()
    console.log(imageObject.current)
   })
   
  // preload images

  function preloadImages(){
        for(let i = 1 ; i<=vals.maxIndex; i++){
          let  imageURL =  `./frames/frame_${i.toString().padStart(4,"0")}.jpeg`
          let img  = new Image()
          img.src = imageURL
          
          img.onload = ()=>{
            imageLoad.current++
            if(imageLoad.current === vals.maxIndex){

              console.log("Sari images load ho gai hai")
              loadImage(vals.currentIndex);
            }
          };

          imageObject.current.push(img)
        }
  }

  // loadImage

  function loadImage (index : number){
    if(index>=0 && index<=vals.maxIndex){
      const img = imageObject.current[index]
      const canvas = CanvasRef.current

      if(canvas && img){
        let context = canvas.getContext("2d")
          if(context){
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;

            const ScaleX = canvas.width / img.width
            const ScaleY = canvas.height / img.height
            const Scale = Math.max(ScaleX , ScaleY)


            const newWidth = img.width * Scale
            const newheight = img.height * Scale

            const offsetX =  (canvas.width - newWidth )/2
            const offsetY = (canvas.height - newheight)/2

            context.clearRect(0,0 , canvas.width , canvas.height)
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality= "high"
            context.drawImage(img , offsetX ,offsetY , newWidth ,newheight)

            setVals((prevVals)=>({
              ...prevVals , 
              currentIndex : index,
            }))
          }
      }
    }
  }
 
  // Scroll Image Animation

  useGSAP(()=>{
    
    const tl = gsap.timeline({
      scrollTrigger :{
        trigger : parent.current,
        start : "top top",
        scrub:2,
        end: "bottom bottom",
        
      },
    })

    tl.to(vals,{
        currentIndex : vals.maxIndex,
        onUpdate:()=>{
          loadImage(Math.floor(vals.currentIndex))
        }
    })
  })




  return (

 
    <div className='w-full bg-black '>
      <div ref={parent} className='w-full h-[800vh]'>
        <div className='w-full h-screen  sticky left-0 top-0'>
          <canvas ref={CanvasRef} className='w-full h-screen'  >

          
          </canvas>
        </div>
      </div>
    </div>
  )
}

export default ScrollTrigger
