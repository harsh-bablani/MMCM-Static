'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.children.forEach((child, index) => {
        child.position.y += Math.sin(state.clock.elapsedTime + index) * 0.01;
        child.rotation.x += 0.01;
        child.rotation.z += 0.005;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating spheres representing different products */}
      <Sphere args={[0.5, 16, 16]} position={[-3, 2, -5]}>
        <meshStandardMaterial color="#87ceeb" transparent opacity={0.6} />
      </Sphere>

      <Sphere args={[0.3, 16, 16]} position={[3, -1, -3]}>
        <meshStandardMaterial color="#5f9ea0" transparent opacity={0.7} />
      </Sphere>

      <Sphere args={[0.4, 16, 16]} position={[-2, -2, -4]}>
        <meshStandardMaterial color="#b0e0e6" transparent opacity={0.5} />
      </Sphere>

      <Sphere args={[0.25, 16, 16]} position={[4, 1, -6]}>
        <meshStandardMaterial color="#87ceeb" transparent opacity={0.8} />
      </Sphere>

      <Sphere args={[0.35, 16, 16]} position={[-4, 0, -2]}>
        <meshStandardMaterial color="#5f9ea0" transparent opacity={0.6} />
      </Sphere>

      <Sphere args={[0.2, 16, 16]} position={[1, 3, -7]}>
        <meshStandardMaterial color="#b0e0e6" transparent opacity={0.7} />
      </Sphere>
    </group>
  );
}

export default function Background3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingShapes />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
} 