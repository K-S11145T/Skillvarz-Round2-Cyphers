import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const VerticalMarquee = ({ speed = 30, images = [], className = "" }) => {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current || !images?.length) return;

    // Create DOM elements only once
    const fragment = document.createDocumentFragment();
    const imgHeight = window.innerHeight * 0.3; // Estimate 30vh
    
    // Create 4 copies for smooth looping
    [...images, ...images, ...images, ...images].forEach((src, i) => {
      const div = document.createElement("div");
      div.className = "marquee-item";
      div.style.height = `${imgHeight}px`;
      
      const img = new Image();
      img.src = src;
      img.alt = "";
      img.loading = "lazy";
      img.className = "w-full h-full object-cover";
      
      div.appendChild(img);
      fragment.appendChild(div);
    });

    marqueeRef.current.appendChild(fragment);
    const contentHeight = images.length * imgHeight;

    // Simplified animation with yoyo and repeat
    animationRef.current = gsap.to(marqueeRef.current, {
      y: `-=${contentHeight * 2}`,
      duration: speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        y: (y) => parseFloat(y) % (contentHeight * 2) // Seamless looping
      }
    });

    return () => {
      animationRef.current?.kill();
      // Safely clean up DOM elements
      if (marqueeRef.current) {
        while (marqueeRef.current.firstChild) {
          marqueeRef.current.removeChild(marqueeRef.current.firstChild);
        }
      }
    };
  }, [images, speed]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div 
        ref={marqueeRef} 
        className="flex flex-col"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};

export default VerticalMarquee;