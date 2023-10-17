import React, { useState,useEffect } from 'react';
import { Suspense } from 'react';
import { Canvas, events } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvasloader } from '../Loader';


const Computers = ({isMobile}) => {
  const ComputersModel = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <ambientLight intensity={0.15} />
      <pointLight intensity={1}  />
      <primitive
       object={ComputersModel.scene}
       scale={isMobile ? 0.7 :1}
       position={isMobile ?[0,-3,-2.2]:[0,-3.25,-1.5]}
        />
    </mesh>
  );
}

const ComputersCanvas = () => {
  const [isMobile,setIsmobile]=useState(false);
  useEffect(()=>{
    const mediaQuery=window.matchMedia('(max-width:500px)');
    setIsmobile(mediaQuery.matches)
    const handleMediaQueryChange=(event)=>{
      setIsmobile(event.matches)
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange)

    return ()=>{
      mediaQuery.addEventListener('change',handleMediaQueryChange)

    }
  },[])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Canvasloader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} /> 
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default ComputersCanvas;
