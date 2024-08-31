'use Client'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { group } from 'console'
import { useRef } from 'react'
import * as THREE from 'three'

const Cly = () => {
const cyl = useRef <any>(null)
    let tex = useTexture("/images/final1.png")
    
    useFrame((state,delta)=>{
      cyl.current.rotation.y += delta;
    })
  return (
    <group rotation={[0, 0.8, 0.4 ]} >
       <mesh ref={cyl}  >
        <cylinderGeometry args={[1,1,1,60,60,true]}/>
        <meshStandardMaterial map={tex} transparent  side={THREE.DoubleSide} />

    </mesh>
    </group>
  )
}

export default Cly
