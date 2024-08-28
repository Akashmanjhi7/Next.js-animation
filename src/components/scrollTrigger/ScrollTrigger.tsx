'use client'
import React, { useState } from 'react'


const ScrollTrigger = () => {
  const [vals, setVals] = useState({
    currentIndex:1,
    maxIndex:881
  })
  return (


    <div className='w-full '>
      <div className='w-full h-[400vh]'>
        <div className='w-full h-screen bg-red-400 sticky left-0 top-0'></div>
      </div>
    </div>
  )
}

export default ScrollTrigger
