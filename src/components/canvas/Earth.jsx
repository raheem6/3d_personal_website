import React, { Suspense, useRef, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./earth/scene.gltf");
  const sunRef = useRef();

  // Animation state
  const time = useRef(0);

  // Animation function
  useFrame(() => {
    time.current += 0.001; // You can adjust the speed of the sun's movement here
    const radius = 10; // Distance from the Earth
    const angle = time.current;
    const x = radius * Math.cos(angle);
    const z = radius * Math.sin(angle);
    sunRef.current.position.set(x, 0, z);
  });

  // Switch between baseColor and emissive textures based on sunlight
  const switchTextures = (isSunlit) => {
    earth.scene.traverse((child) => {
      if (child.isMesh) {
        const material = child.material;
        if (material.name === "planet") {
          material.emissiveIntensity = isSunlit ? 0 : 1;
          material.map = isSunlit ? material.baseColorTexture : material.emissiveTexture;
        }
      }
    });
  };

  // Handle material updates before rendering
  const onBeforeRender = useCallback((scene, camera) => {
    const sunPosition = sunRef.current.position;
    const distance = sunPosition.distanceTo(earth.scene.position);
    const isSunlit = distance < 10; // Adjust the distance threshold as needed
    switchTextures(isSunlit);
  }, []);

  return (
    <>
      <primitive object={earth.scene} scale={2.1} position-y={0} rotation-y={0} />
      <directionalLight
        ref={sunRef}
        position={[10, 0, 0]} // Starting position of the sun (right side of the Earth)
        intensity={3.33} // Adjust the intensity of the sunlight
        castShadow
      />
      <Preload all />
    </>
  );
};


const EarthCanvas = () => {
  const onBeforeRender = useCallback((scene, camera) => {
    // Your custom onBeforeRender logic (if any)
  }, []);

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      onBeforeRender={onBeforeRender} // Add the onBeforeRender hook here
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
