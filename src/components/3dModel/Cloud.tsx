/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 .\public\models\cloude\model.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Cloud({opacity,...props}:any) {
  const { nodes, materials } = useGLTF('models/cloude/model.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry} material={materials['lambert2SG.001']} >
        <meshStandardMaterial
        {...materials["lambert2SG.001"]}
        transparent
        opacity={opacity}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('models/cloude/model.glb')
