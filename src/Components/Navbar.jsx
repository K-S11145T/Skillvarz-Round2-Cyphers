import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Navbar = ({ scrollProgress }) => {
  const progressLineRef = useRef(null);
  const navItemsRef = useRef([]);
  const itemPositions = useRef([]);
  const animationRefs = useRef([]);

  // Function to add refs and track positions
  const addNavItemRef = (el, index) => {
    if (el && !navItemsRef.current.includes(el)) {
      navItemsRef.current[index] = el;
      // Store initial positions only once
      if (!itemPositions.current[index]) {
        const rect = el.getBoundingClientRect();
        itemPositions.current[index] = {
          left: rect.left,
          width: rect.width,
          center: rect.left + rect.width / 2
        };
      }
    }
  };

  useEffect(() => {
    // Update item positions on resize
    const handleResize = () => {
      navItemsRef.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          itemPositions.current[index] = {
            left: rect.left,
            width: rect.width,
            center: rect.left + rect.width / 2
          };
        }
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Progress line animation
    if (progressLineRef.current) {
      gsap.to(progressLineRef.current, {
        scaleX: scrollProgress,
        transformOrigin: "left left",
        duration: 0.2,
        ease: "power1.out"
      });
    }

    // Nav items color change animation
    navItemsRef.current.forEach((item, index) => {
      if (!item || !itemPositions.current[index]) return;

      const itemPos = itemPositions.current[index];
      const viewportWidth = window.innerWidth;
      const progressPosition = viewportWidth * scrollProgress;

      // Calculate when to start/end the color transition (25% before/after center)
      const transitionStart = itemPos.left - itemPos.width * 0.25;
      const transitionEnd = itemPos.left + itemPos.width * 1.25;

      // Calculate color based on scroll position
      let colorValue;
      if (progressPosition < transitionStart) {
        colorValue = "rgb(113, 113, 113)"; // Dark (zinc-500)
      } else if (progressPosition > transitionEnd) {
        colorValue = "white";
      } else {
        // Smooth transition between dark and white
        const progress = (progressPosition - transitionStart) / (transitionEnd - transitionStart);
        colorValue = `rgba(255, 255, 255, ${progress})`;
      }

      // Kill any existing animation for this item
      if (animationRefs.current[index]) {
        animationRefs.current[index].kill();
      }

      // Animate color change
      animationRefs.current[index] = gsap.to(item, {
        color: colorValue,
        duration: 0.2,
        ease: "power1.out",
        overwrite: true
      });

      // Dot color change (for "Buy Marshall" item)
      if (index === 0) {
        const dot = item.querySelector('span');
        if (dot) {
          gsap.to(dot, {
            backgroundColor: colorValue === "white" ? "white" : "rgb(161, 161, 161)",
            duration: 0.2,
            ease: "power1.out"
          });
        }
      }
    });
  }, [scrollProgress]);

  return (
    <div className="fixed z-[99] top-8 left-0 w-3/4 py-3 pl-8">
      <div className="relative w-full mb-2">
        {/* Background line (static black line) */}
        <div className="w-full h-[0.2vh] bg-zinc-400"></div>
        
        {/* Progress line (white, scales horizontally) */}
        <div
          ref={progressLineRef}
          className="absolute top-0 left-0 w-full h-[0.2vh] bg-white scale-x-0 origin-left"
        />
      </div>

      {/* Navigation items */}
      <div className="flex gap-20 text-sm items-center justify-between mr-10 font-[Aux-Mono] text-zinc-500">
        <h3 ref={(el) => addNavItemRef(el, 0)} className="flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-zinc-400 inline-block"></span>
          Buy Marshall
        </h3>
        <h3 ref={(el) => addNavItemRef(el, 1)}>Home</h3>
        <h3 ref={(el) => addNavItemRef(el, 2)}>Artist</h3>
        <h3 ref={(el) => addNavItemRef(el, 3)}>Products</h3>
        <h3 ref={(el) => addNavItemRef(el, 4)}>Showcase</h3>
      </div>
    </div>
  );
};

export default Navbar;