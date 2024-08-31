import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Experience } from './Experience'
import { ScrollControls } from '@react-three/drei'

const canvasPage = () => {
  return (
    <>
     <Canvas >
      <color attach="background" args={["#ececec"]} />
      <ScrollControls pages={15} damping={0.1}>
      <Experience/>
      </ScrollControls> 
     </Canvas>
    </>
  )
}

export default canvasPage
