import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, GradientTexture, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = ({ position, size, speed, distort, color }: {
  position: [number, number, number];
  size: number;
  speed: number;
  distort: number;
  color: string;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Simple oscillation based on time
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * speed) * 0.3;
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.4;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[size, 64, 64]}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={0.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const ResponsiveCamera = () => {
  const { viewport } = useThree();
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useEffect(() => {
    if (cameraRef.current) {
      // Adjust camera position based on viewport size
      if (viewport.width < 5) { // Mobile
        cameraRef.current.position.z = 7;
      } else if (viewport.width < 10) { // Tablet
        cameraRef.current.position.z = 6;
      } else { // Desktop
        cameraRef.current.position.z = 5;
      }
    }
  }, [viewport.width]);

  return null;
};

interface ThreeCanvasProps {
  className?: string;
}

const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ className }) => {
  return (
    <div className={`${className} w-full h-full`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ResponsiveCamera />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ea5e9" />
        
        <AnimatedSphere
          position={[-1.5, 0, 0]}
          size={1.2}
          speed={0.8}
          distort={0.4}
          color="#0ea5e9"
        />
        <AnimatedSphere
          position={[1.5, 0.5, -2]}
          size={0.8}
          speed={1.2}
          distort={0.5}
          color="#8b5cf6"
        />
        <AnimatedSphere
          position={[1, -1, -1]}
          size={0.6}
          speed={1.5}
          distort={0.3}
          color="#ec4899"
        />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;