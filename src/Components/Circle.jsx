import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Circle = () => {
  const circleRef = useRef();
  const circleTextRef = useRef();

  useEffect(() => {
    // Circle animation and rotation
    gsap.fromTo(
      circleRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out", delay: 1 }
    );

    gsap.to(circleRef.current, {
      rotate: -360,
      duration: 15,
      ease: "linear",
      repeat: -1,
    });
    gsap.to(circleTextRef.current, {
      rotate: 360,
      duration: 15,
      ease: "linear",
      repeat: -1,
    });

    // Function to move cursor globally
    const moveCursor = (e) => {
      gsap.to(circleRef.current, {
        x: e.clientX - 112, // Adjust for center
        y: e.clientY - 112,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    // Add mousemove listener globally
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={circleRef}
      className="circle pointer-events-none z-[20] absolute top-0 left-0 w-56 h-56 flex items-center justify-center rounded-full text-xs leading-none text-[#1E1E1E] font-[Aux-mono] font-light border-1 border-[#5C5858]"
    >
      <div ref={circleTextRef} className="text-2xl font-light font-[Saans]">
        +
      </div>

      <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0 flex flex-col items-center justify-center">
        <h4 className="">2021</h4>
        <p className="text-2xl leading-none font-light font-[Saans]">+</p>
      </div>
      <div className="absolute top-1/2 -right-2 translate-x-1/2 -translate-y-1/2 rotate-90 flex flex-col items-center justify-center">
        <h4 className="">2021</h4>
        <p className="text-2xl leading-none font-light font-[Saans]">+</p>
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-180 flex flex-col items-center justify-center">
        <h4 className="">2021</h4>
        <p className="text-2xl leading-none font-light font-[Saans]">+</p>
      </div>
      <div className="absolute top-1/2 -left-2 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] flex flex-col items-center justify-center">
        <h4 className="">2021</h4>
        <p className="text-2xl leading-none font-light font-[Saans]">+</p>
      </div>
    </div>
  );
};

export default Circle;
