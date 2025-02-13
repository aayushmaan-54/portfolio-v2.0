'use client';
import { useEffect, useRef, useCallback } from 'react';
import { RandomSvgUnderlineProps } from '@/types';


const RandomSvgUnderline = ({
  strokeWidth = 7,
  minHeight = 5,
  maxHeight = 20,
  className = '',
  children
}: RandomSvgUnderlineProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const pathRef = useRef<SVGPathElement>(null);


  const generateRandomPath = useCallback((width: number) => {
    const moveY = Math.floor(Math.random() * (12 - 5)) + 5;
    
    const controlPoint1X = width * 0.3;
    const controlPoint2X = width * 0.7;
    const curveY = Math.floor(Math.random() * (maxHeight - minHeight)) + minHeight;
    const endY = Math.floor(Math.random() * (10 - 5)) + 5;

    return `M5 ${moveY} 
            C ${controlPoint1X} ${curveY} 
              ${controlPoint2X} ${curveY} 
              ${width - 7} ${endY}`;
  }, [minHeight, maxHeight]);


  const updatePath = useCallback(() => {
    const container = containerRef.current;
    const path = pathRef.current;
    
    if (container && path) {
      const width = container.offsetWidth;
      const parentSvg = path.parentElement;
      if (parentSvg) {
        parentSvg.setAttribute('width', width.toString());
        parentSvg.setAttribute('viewBox', `0 0 ${width} 20`);
      }
      path.setAttribute('d', generateRandomPath(width));
    }
  }, [generateRandomPath]);


  useEffect(() => {
    updatePath();

    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updatePath();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [updatePath]);


  return (
    <span ref={containerRef} className={`relative inline-block ${className}`}>
      {children}
      <svg
        height="20"
        className="absolute left-0 bottom-0 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          fill="transparent"
          className={className}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};


export default RandomSvgUnderline;