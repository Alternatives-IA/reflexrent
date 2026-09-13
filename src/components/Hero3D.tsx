'use client';

import { Suspense, useEffect, useState, useRef, Component, ReactNode, forwardRef } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { useGLTF, ContactShadows, useProgress } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

class CanvasErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any) {
    console.warn('3D Canvas encountered an error:', error);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const CarModel = forwardRef<THREE.Group>((props, ref) => {
  const { scene } = useGLTF('/models/ferrari.glb');
  
  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        if (child.name.includes('body')) {
          child.material.color.setHex(0x0a0a0c); // Dark metallic
          child.material.metalness = 0.9;
          child.material.roughness = 0.15;
          child.material.clearcoat = 1;
        }
      }
    });
  }, [scene]);

  return <primitive ref={ref} object={scene} position={[0, -0.5, 0]} rotation={[0, Math.PI / 4, 0]} />;
});
CarModel.displayName = 'CarModel';

export function Hero3D() {
  const t = useTranslations('hero');
  const { progress } = useProgress();
  const [loaded, setLoaded] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const panel1Ref = useRef<HTMLDivElement>(null);
  const panel2Ref = useRef<HTMLDivElement>(null);
  const panel3Ref = useRef<HTMLDivElement>(null);
  const carRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setLoaded(true), 400);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // Safety fallback: ensure page is always usable even on headless or slow networks
  useEffect(() => {
    const safetyTimer = setTimeout(() => setLoaded(true), 2500);
    return () => clearTimeout(safetyTimer);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        }
      });

      tl.to(panel1Ref.current, { opacity: 0, y: -50, duration: 1 }, 0);
      tl.fromTo(panel2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 1);
      tl.to(panel2Ref.current, { opacity: 0, y: -50, duration: 1 }, 3);
      tl.fromTo(panel3Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 4);
      
      if (carRef.current) {
        // Scroll animations for the 3D car
        tl.to(carRef.current.rotation, { y: -Math.PI / 2, ease: "power1.inOut", duration: 2 }, 0);
        tl.to(carRef.current.position, { z: 1.5, x: 1, ease: "power1.inOut", duration: 2 }, 0);
        
        tl.to(carRef.current.rotation, { y: -Math.PI, ease: "power1.inOut", duration: 2 }, 2);
        tl.to(carRef.current.position, { z: 0, x: -1, ease: "power1.inOut", duration: 2 }, 2);
        
        tl.to(carRef.current.rotation, { y: -Math.PI * 1.75, ease: "power1.inOut", duration: 1 }, 4);
        tl.to(carRef.current.position, { z: 2.5, x: 0, ease: "power1.inOut", duration: 1 }, 4);
      }
    }, containerRef);
    
    return () => ctx.revert();
  }, [loaded]);

  return (
    <>
      {/* Preloader */}
      <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#00060f] transition-[opacity,visibility] duration-700 ${loaded ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
        <div className="text-2xl font-semibold tracking-tight text-white mb-8">
          Reflex<span className="text-blue-500">Rent</span>
        </div>
        <div className="h-[2px] w-[min(280px,60vw)] bg-white/10 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-blue-500 transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
          {t('loading')} {Math.round(progress)}%
        </div>
      </div>

      {/* Scroll Container */}
      <section ref={containerRef} className="relative" style={{ height: '600vh' }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          
          {/* Canvas Background */}
          <div ref={canvasRef} className="absolute inset-0 z-0">
            <CanvasErrorBoundary fallback={
              <div className="w-full h-full flex items-center justify-center bg-[#08090c]">
                <div className="w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl" />
              </div>
            }>
              <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[10, 15, 10]} intensity={2.5} />
                <directionalLight position={[-10, 10, -10]} intensity={1.0} />
                <pointLight position={[0, 4, 3]} intensity={2.0} color="#60a5fa" />
                <pointLight position={[-4, 2, 2]} intensity={1.2} color="#ffffff" />
                <pointLight position={[4, 2, -2]} intensity={1.2} color="#93c5fd" />
                <Suspense fallback={null}>
                  <CarModel ref={carRef} />
                  <ContactShadows resolution={1024} scale={10} blur={2} opacity={0.6} far={10} color="#000000" />
                </Suspense>
              </Canvas>
            </CanvasErrorBoundary>
          </div>

          {/* Gradients Overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none" style={{
            background: 'radial-gradient(ellipse at 50% 35%, transparent 0%, transparent 55%, rgba(0,0,0,0.45) 100%), linear-gradient(to bottom, rgba(8,9,12,0.35) 0%, transparent 18%, transparent 75%, rgba(8,9,12,0.55) 100%)'
          }} />

          {/* Text Panels */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none text-center px-4">
            
            {/* Panel 1 */}
            <div ref={panel1Ref} className="absolute flex flex-col items-center justify-center w-full h-full">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85 mb-4">
                {t('eyebrow')}
              </div>
              <h1 className="text-[clamp(48px,8vw,110px)] font-bold leading-[0.95] tracking-[-0.045em] text-white">
                {t('title1')}<br />{t('title2')}
              </h1>
              <p className="mt-6 max-w-lg text-[clamp(15px,1.4vw,19px)] text-white/75 leading-relaxed">
                {t('subtitle')}
              </p>
              <div className="absolute bottom-10 flex flex-col items-center gap-2 text-white/55">
                <span className="text-[11px] uppercase tracking-[0.22em] animate-bob">↓ {t('scrollHint')}</span>
              </div>
            </div>

            {/* Panel 2 */}
            <div ref={panel2Ref} className="absolute flex flex-col items-center justify-center w-full h-full opacity-0 translate-y-12">
              <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-blue-400 mb-4">
                {t('detailTag')}
              </div>
              <h2 className="text-[clamp(36px,5.5vw,76px)] font-semibold leading-[0.98] tracking-[-0.035em] text-white">
                {t('detailTitle1')}<br />{t('detailTitle2')}
              </h2>
            </div>

            {/* Panel 3 */}
            <div ref={panel3Ref} className="absolute flex flex-col items-center justify-end w-full h-full pb-[14vh] opacity-0 translate-y-12">
              <div className="text-[clamp(13px,1.2vw,15px)] font-semibold uppercase tracking-[0.18em] text-white/75">
                {t('finalCallout')}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
