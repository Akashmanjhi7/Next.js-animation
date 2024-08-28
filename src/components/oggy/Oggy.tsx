'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'




const Oggy = () => {

  const {contextSafe} = useGSAP()    
  const ref = useRef<any>()
  const cock = useRef<any>()

  const [xMove, setxMove] = useState(0)
  const [yMove, setyMove] = useState(0)
  
const randomX = gsap.utils.random(-700,700,100)
const randomY = gsap.utils.random(-200,200,100)




  useGSAP(()=>{
    gsap.to(cock.current,{
      x:xMove,
      y:yMove,
    })
  },[xMove ,yMove])

  

    const movejack = contextSafe((e:any)=>{
    
      gsap.to(ref.current,{
        x:e.clientX -800,
        y:e.clientY -300,
      })
      })

  return ( <div>
    <main className='cursor-pointer flex justify-center items-center h-screen ' onMouseMove={(e)=>movejack(e)}>    
    <img  src="/jack.png" alt=''  ref={ref} className=' absolute h-40 '/> 

    <img onClick={()=>{
      setxMove(randomX) ,setyMove(randomY)
    }}  src="/cockroch.png" ref={cock} alt='' className='h-20'  />
    
    

    </main>
    
    </div>



  )
}

export default Oggy
