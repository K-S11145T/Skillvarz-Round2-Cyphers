import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollBasedMarquee = ({
  speed = 30,
  className = "",
  scrollTargetSelector = "[data-horizontal-scroll]",
}) => {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);
  const lastScrollPos = useRef(0);
  const directionRef = useRef(1); // 1 = forward, -1 = reverse

  useEffect(() => {
    const container = document.querySelector(scrollTargetSelector);
    if (!container || !marqueeRef.current) return;
  
    // 🧠 Start marquee at -50% to show mid-content first
    gsap.set(marqueeRef.current, { xPercent: -50 });
  
    const createAnimation = (dir = 1) => {
      animationRef.current?.kill();
  
      animationRef.current = gsap.to(marqueeRef.current, {
        xPercent: dir > 0 ? "-=100" : "+=100",
        duration: speed,
        ease: "none",
        repeat: -1,
        modifiers: {
          xPercent: gsap.utils.wrap(-100, 0),
        },
      });
    };
  
    createAnimation(directionRef.current);
  
    const handleScroll = () => {
      const currentScroll = container.scrollLeft;
      const scrollDiff = currentScroll - lastScrollPos.current;
  
      if (scrollDiff < 0 && directionRef.current !== -1) {
        directionRef.current = -1;
        createAnimation(-1);
      } else if (scrollDiff > 0 && directionRef.current !== 1) {
        directionRef.current = 1;
        createAnimation(1);
      }
  
      lastScrollPos.current = currentScroll;
    };
  
    container.addEventListener("scroll", handleScroll, { passive: true });
  
    return () => {
      container.removeEventListener("scroll", handleScroll);
      animationRef.current?.kill();
    };
  }, [speed, scrollTargetSelector]);

  return (
    <div className={`overflow-hidden w-full whitespace-nowrap ${className}`}>
      <div className="flex gap-8 w-fit" ref={marqueeRef}>
        {[1, 2, 3, 4].map((block) => (
          <div className="flex gap-8" key={block}>
            {[...Array(10)].map((_, i) => (
              <h1
                key={`${block}-${i}`}
                className="text-4xl lg:text-7xl font-[Aux-Mono]"
              >
                <span className="font-[Aux-Mono]">Marshall</span>–{" "}
                <span className="font-bold font-[Silk-Serif-Light-Italic]">
                  Marshall
                </span>{" "}
                –
              </h1>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollBasedMarquee;
