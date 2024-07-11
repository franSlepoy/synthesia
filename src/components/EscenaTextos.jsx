

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "@fontsource/alegreya"; // Importar la fuente Alegreya



function EscenaTextos () {
 
  return (
    <>
      <Canvas
        style={{
          height: "100vh",
          background: "linear-gradient(180deg, #00FF00 0%, #FFFFFF 100%)",
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <mesh position={[-0.2,-5,0]} >
      <planeGeometry args={[20, 25]} />
      <meshBasicMaterial  />
    </mesh>
      
        <OrbitControls 
        enableDamping={true}
        dampingFactor={0.02}
        rotateSpeed={0.2}
        zoomSpeed={0.2}
        panSpeed={0.2}
         />
      </Canvas>
    </>
  );
}

export default EscenaTextos;