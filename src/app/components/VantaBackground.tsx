'use client';
import { useEffect, useRef } from 'react';

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentEffect: any = null;

    const initVanta = async () => {
      if (typeof window === 'undefined' || !vantaRef.current) return;

      try {
        // Temporarily suppress THREE.js warnings
        const originalWarn = console.warn;
        console.warn = (...args: any[]) => {
          if (args[0] && typeof args[0] === 'string' && args[0].includes('THREE.')) {
            return; // Suppress THREE.js warnings
          }
          originalWarn.apply(console, args);
        };

        const [THREE, GLOBE] = await Promise.all([
          import('three'),
          import('vanta/dist/vanta.globe.min')
        ]);

        if (vantaRef.current && !currentEffect) {
          currentEffect = GLOBE.default({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x3b82f6,
            backgroundColor: 0xf8fafc,
            size: 0.8,
          });
        }

        // Restore original console.warn
        console.warn = originalWarn;
      } catch (error) {
        console.log('Vanta effect not available:', error);
      }
    };

    initVanta();

    return () => {
      if (currentEffect) {
        currentEffect.destroy();
      }
    };
  }, []);

  return <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full z-0" />;
}