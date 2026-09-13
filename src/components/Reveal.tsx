'use client';

import { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';

const StaggerContext = createContext<number>(0);

export function StaggerGroup({ children, staggerDelay = 0.12 }: { children: ReactNode; staggerDelay?: number }) {
  return (
    <StaggerContext.Provider value={staggerDelay}>
      {children}
    </StaggerContext.Provider>
  );
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  index?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
}

export function Reveal({ children, className = '', index = 0, direction = 'up', delay }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const staggerDelay = useContext(StaggerContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translate3d(0, 32px, 0)';
      case 'down': return 'translate3d(0, -32px, 0)';
      case 'left': return 'translate3d(32px, 0, 0)';
      case 'right': return 'translate3d(-32px, 0, 0)';
      default: return 'translate3d(0, 0, 0)';
    }
  };

  const computedDelay = delay !== undefined ? delay : index * staggerDelay;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : getTransform(),
        transition: `opacity 0.9s cubic-bezier(0.25, 0.4, 0.25, 1) ${computedDelay}s, transform 0.9s cubic-bezier(0.25, 0.4, 0.25, 1) ${computedDelay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
