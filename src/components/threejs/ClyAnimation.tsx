"use Client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cly from "./Cly";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";

const ClyAnimation = () => {
  return (
    <>
      
    <Canvas camera={{ fov: 22 }}>
      {/* <OrbitControls /> */}
      <ambientLight />
      <Cly />
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={25} 
          luminanceThreshold={0.3}
          luminanceSmoothing={0.3}
        />
        <ToneMapping adaptive />
      </EffectComposer>
    </Canvas>
   
  </>
  )
}

export default ClyAnimation
