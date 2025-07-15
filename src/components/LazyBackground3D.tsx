'use client';

import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the 3D background
const Background3D = dynamic(() => import('./Background3D'), {
  ssr: false,
  loading: () => (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #f8fbff 0%, #e8f4fd 25%, #f0f8ff 50%, #e6f3ff 75%, #f5f9ff 100%)',
      zIndex: -1,
    }} />
  ),
});

export default function LazyBackground3D() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Load 3D background after a short delay to prioritize content
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoad) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #f8fbff 0%, #e8f4fd 25%, #f0f8ff 50%, #e6f3ff 75%, #f5f9ff 100%)',
        zIndex: -1,
      }} />
    );
  }

  return (
    <Suspense fallback={
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #f8fbff 0%, #e8f4fd 25%, #f0f8ff 50%, #e6f3ff 75%, #f5f9ff 100%)',
        zIndex: -1,
      }} />
    }>
      <Background3D />
    </Suspense>
  );
} 
