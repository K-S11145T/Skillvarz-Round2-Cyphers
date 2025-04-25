import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const VerticalMarquee = ({
  speed = 30,
  scrollTargetSelector = "[data-scroll-container]",
  images = [],
  className = ""
}) => {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);
  const lastScrollPos = useRef(0);
  const directionRef = useRef(1); // 1 = down, -1 = up
  const contentHeightRef = useRef(0);

  useEffect(() => {
    const container = document.querySelector(scrollTargetSelector);
    if (!container || !marqueeRef.current || images.length === 0) return;

    // Create enough duplicates for seamless looping (6 copies)
    const totalImages = [...images, ...images, ...images, ...images, ...images, ...images];
    marqueeRef.current.innerHTML = "";

    totalImages.forEach((src, i) => {
      const div = document.createElement("div");
      div.className = "h-[30vh] w-full bg-zinc-300 overflow-hidden flex justify-center items-center";
      const img = document.createElement("img");
      img.src = src;
      img.alt = `image-${i}`;
      img.className = "w-full h-full object-cover";
      div.appendChild(img);
      marqueeRef.current.appendChild(div);
    });

    // Calculate single set height (original images height)
    const firstSetHeight = images.length * marqueeRef.current.children[0].offsetHeight;
    contentHeightRef.current = firstSetHeight;

    // Start from middle for infinite illusion
    gsap.set(marqueeRef.current, { y: -contentHeightRef.current * 2 });

    const createAnimation = (dir) => {
      animationRef.current?.kill();
      
      const startY = -contentHeightRef.current * 2;
      const endY = dir > 0 ? -contentHeightRef.current * 3 : -contentHeightRef.current;
      
      animationRef.current = gsap.to(marqueeRef.current, {
        y: endY,
        duration: speed,
        ease: "none",
        onComplete: () => {
          // Reset position for seamless looping
          gsap.set(marqueeRef.current, { y: startY });
          // Continue animation
          createAnimation(dir);
        }
      });
    };

    const handleScroll = () => {
      const currentScroll = container.scrollTop;
      const scrollDiff = currentScroll - lastScrollPos.current;
      lastScrollPos.current = currentScroll;

      // Only change direction if significant scroll difference
      if (Math.abs(scrollDiff) > 2) {
        const newDirection = scrollDiff > 0 ? 1 : -1;
        
        if (newDirection !== directionRef.current) {
          directionRef.current = newDirection;
          createAnimation(newDirection);
        }
      }
    };

    // Initial animation
    createAnimation(directionRef.current);
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      animationRef.current?.kill();
    };
  }, [speed, scrollTargetSelector, images]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={marqueeRef} className="flex flex-col" />
    </div>
  );
};

export default VerticalMarquee;