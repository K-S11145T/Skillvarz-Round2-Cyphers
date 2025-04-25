import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Circle = ({ homeImgClick, homeImgHover }) => {
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

    // if (homeImgHover) {
    //   // console.log("chala");
    //   gsap.to(circleRef.current, {
    //     scale: 1.2,
    //     duration: 0.3,
    //     backgroundColor: "#transparent",
    //     color: "#fff",
    //   });
    // }

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
      className={`${
        homeImgHover
          ? "text-[#fff] border-[#fff]"
          : "text-[#1E1E1E] border-[#5C5858]"
      } circle pointer-events-none hidden lg:flex z-[20] absolute top-0 left-0 w-56 h-56 items-center justify-center rounded-full text-xs leading-none font-[Aux-mono] font-light border-1`}
    >
      <div ref={circleTextRef} className=" font-light font-[Saans]">
        <span
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl transition-all duration-300 ease-in-out ${
            homeImgHover ? "opacity-0 scale-90" : "opacity-100 scale-100"
          }`}
        >
          +
        </span>
        <div
          className={`absolute top-1/2  flex items-center justify-center rounded-full left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg transition-all duration-300 ease-in-out ${
            homeImgHover ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        >
          click
        </div>
      </div>

      <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0 flex flex-col items-center justify-center">
        <h4 className="">2022</h4>
        <p className="text-2xl leading-none font-light font-[Saans]">+</p>
      </div>
      <div className="absolute top-1/2 -right-2 translate-x-1/2 -translate-y-1/2 rotate-90 flex flex-col items-center justify-center">
        <h4 className="">2023</h4>
        <p className="text-2xl leading-none font-light font-[Saans]">+</p>
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-180 flex flex-col items-center justify-center">
        <h4 className="">2024</h4>
        <p className="text-2xl leading-none font-light font-[Saans]">+</p>
      </div>
      <div className="absolute top-1/2 -left-2 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] flex flex-col items-center justify-center">
        <h4 className="">2025</h4>
        <p className="text-2xl leading-none font-light font-[Saans]">+</p>
      </div>
    </div>
  );
};

export default Circle;
