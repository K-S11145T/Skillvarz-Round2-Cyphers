import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const ScrollBasedMarquee = ({
  text = "",
  speed = 30,
  className = "",
  scrollTargetSelector = "[data-horizontal-scroll]",
}) => {
  const marqueeRef = useRef(null);
  const velocityRef = useRef(0);
  const lastScrollPos = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const baseSpeed = useRef(speed);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const container = document.querySelector(scrollTargetSelector);
    if (!container || !marqueeRef.current) return;

    const updateMarquee = () => {
      const currentScroll = container.scrollLeft;
      const currentTime = Date.now();
      const timeDelta = currentTime - lastScrollTime.current;
      const scrollDelta = currentScroll - lastScrollPos.current;

      const newVelocity = scrollDelta / Math.max(timeDelta, 20);
      const multiplier = scrollDelta < 0 ? 15 : 12;

      velocityRef.current = gsap.utils.interpolate(
        velocityRef.current,
        Math.max(-10, Math.min(10, newVelocity * multiplier)),
        0.2
      );

      const newDirection = scrollDelta > 0 ? 1 : -1;
      if (Math.abs(scrollDelta) > 0) {
        setDirection(newDirection);
      }

      const speedMultiplier = direction > 0 ? 1.2 : 2;
      const currentSpeed =
        (baseSpeed.current / (1 + Math.abs(velocityRef.current))) *
        speedMultiplier;

      gsap.to(marqueeRef.current, {
        x: direction > 0 ? "-100%" : "100%",
        duration: currentSpeed,
        ease: "none",
        repeat: -1,
        overwrite: "auto",
        immediateRender: true,
      });

      lastScrollTime.current = currentTime;
      lastScrollPos.current = currentScroll;
    };

    const handleScroll = () => {
      requestAnimationFrame(updateMarquee);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    // Initial animation
    gsap.to(marqueeRef.current, {
      x: "-100%",
      duration: speed * 0.8,
      ease: "none",
      repeat: -1,
    });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      gsap.killTweensOf(marqueeRef.current);
    };
  }, [speed, direction, scrollTargetSelector]);

  return (
    <div className={`overflow-hidden w-full whitespace-nowrap ${className}`}>
      <div className="flex gap-8 w-fit" ref={marqueeRef}>
  {[1, 2].map((block) => (
    <div className="flex gap-8" key={block}>
      {[...Array(10)].map((_, i) => (
        <h1 key={`${block}-${i}`} className="text-4xl lg:text-7xl font-[Aux-Mono]">
          <span className="font-[Aux-Mono]">Marshall</span>–{" "}
          <span className="font-bold font-[Silk-Serif-Light-Italic]">Marshall</span> –
        </h1>
      ))}
    </div>
  ))}
</div>
    </div>
  );
};

export default ScrollBasedMarquee;
