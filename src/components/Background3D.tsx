'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
      groupRef.current.children.forEach((child, index) => {
        child.position.y += Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.008;
        child.rotation.x += 0.008;
        child.rotation.z += 0.004;
        child.rotation.y += 0.006;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Premium floating spheres */}
      <Sphere args={[0.6, 32, 32]} position={[-4, 2, -6]}>
        <meshStandardMaterial
          color="#60a5fa"
          transparent
          opacity={0.4}
          metalness={0.3}
          roughness={0.2}
        />
      </Sphere>

      <Sphere args={[0.4, 24, 24]} position={[3, -1, -4]}>
        <meshStandardMaterial
          color="#3b82f6"
          transparent
          opacity={0.5}
          metalness={0.4}
          roughness={0.1}
        />
      </Sphere>

      <Sphere args={[0.5, 28, 28]} position={[-2, -2, -5]}>
        <meshStandardMaterial
          color="#93c5fd"
          transparent
          opacity={0.3}
          metalness={0.2}
          roughness={0.3}
        />
      </Sphere>

      <Sphere args={[0.3, 20, 20]} position={[4, 1, -7]}>
        <meshStandardMaterial
          color="#60a5fa"
          transparent
          opacity={0.6}
          metalness={0.5}
          roughness={0.1}
        />
      </Sphere>

      <Sphere args={[0.45, 26, 26]} position={[-3, 0, -3]}>
        <meshStandardMaterial
          color="#3b82f6"
          transparent
          opacity={0.4}
          metalness={0.3}
          roughness={0.2}
        />
      </Sphere>

      <Sphere args={[0.25, 16, 16]} position={[2, 3, -8]}>
        <meshStandardMaterial
          color="#93c5fd"
          transparent
          opacity={0.5}
          metalness={0.4}
          roughness={0.1}
        />
      </Sphere>

      {/* Decorative geometric shapes */}
      <Box args={[0.4, 0.4, 0.4]} position={[1, -3, -4]} rotation={[0.5, 0.3, 0.2]}>
        <meshStandardMaterial
          color="#60a5fa"
          transparent
          opacity={0.3}
          metalness={0.6}
          roughness={0.1}
        />
      </Box>

      <Torus args={[0.3, 0.1, 16, 32]} position={[-1, 1, -6]} rotation={[0.8, 0.4, 0.1]}>
        <meshStandardMaterial
          color="#3b82f6"
          transparent
          opacity={0.4}
          metalness={0.5}
          roughness={0.2}
        />
      </Torus>

      <Box args={[0.3, 0.6, 0.3]} position={[3, -2, -5]} rotation={[0.2, 0.7, 0.4]}>
        <meshStandardMaterial
          color="#93c5fd"
          transparent
          opacity={0.35}
          metalness={0.4}
          roughness={0.15}
        />
      </Box>
    </group>
  );
}

export default function Background3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#60a5fa" />
        <FloatingShapes />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
} 