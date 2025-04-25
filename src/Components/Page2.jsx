import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import BlurText from "../Animations/BlurText";
import ScrollBasedMarquee from "../Animations/ScrollBasedMarquee";

import SplitText from "../Animations/SplitText";

const Page2 = () => {
  const circleRef = useRef(null);
  const rotationTween = useRef(null);
  const lastScrollTime = useRef(Date.now());
  const lastScrollPos = useRef(0);
  const velocityRef = useRef(0);
  const animationFrameId = useRef(null);
  const animatedRef = useRef(null);

  useEffect(() => {
    const container = document.querySelector("[data-horizontal-scroll]");
    if (!container || !animatedRef.current) return;

    const el = animatedRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scroller: container,
        horizontal: true,

        start: "left 100%",
        end: "+=1500",
        // markers: true,
      },
    });

    // Phase 1 — Grow from right
    tl.set(el, { transformOrigin: "right center" });
    tl.fromTo(
      el,
      { scaleX: 0.6, x: 100 }, // starts shifted right and small from right
      { scaleX: 1, x: 0, ease: "power2.out" }
    );

    // Phase 2 — Hold full scale

    // Phase 3 — Shrink from left

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  useEffect(() => {
    // Base rotation animation
    rotationTween.current = gsap.to(circleRef.current, {
      rotation: 360,

      duration: 15,
      ease: "power1.inOut",
      repeat: -1,
    });

    const updateRotation = () => {
      const container = document.querySelector("[data-horizontal-scroll]");
      if (!container) return;

      const currentScroll = container.scrollLeft;
      const currentTime = Date.now();
      const timeDelta = currentTime - lastScrollTime.current;
      const scrollDelta = currentScroll - lastScrollPos.current; // Removed Math.abs to get direction

      // Calculate velocity with direction
      const newVelocity = scrollDelta / Math.max(timeDelta, 8);
      velocityRef.current = gsap.utils.interpolate(
        velocityRef.current,
        Math.max(-3, Math.min(3, newVelocity * 5)), // Allow negative values
        0.2
      );

      // Update rotation based on direction
      gsap.to(rotationTween.current, {
        timeScale: velocityRef.current, // Negative value will reverse rotation
        duration: 0.02,
        ease: "none",
        overwrite: "auto",
      });

      lastScrollTime.current = currentTime;
      lastScrollPos.current = currentScroll;
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = requestAnimationFrame(updateRotation);
    };

    const container = document.querySelector("[data-horizontal-scroll]");
    container?.addEventListener("scroll", handleScroll, { passive: true });

    // Auto reset to base speed
    const resetInterval = setInterval(() => {
      if (Date.now() - lastScrollTime.current > 50) {
        // Reduced from 100

        gsap.to(rotationTween.current, {
          timeScale: 1,
          duration: 0.3, // Reduced from 0.8
          ease: "power1.out",
          overwrite: true,
        });
      }
    }, 50);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
      rotationTween.current?.kill();
      clearInterval(resetInterval);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <div
      data-horizontal-scroll
      className="flex-none  w-screen min-h-screen bg-zinc-200 text-xl"
    >
      <div className="flex flex-col relative lg:flex-row items-center px-4 lg:px-10 justify-evenly w-full md:h-[150%] py-10 lg:py-0 lg:h-screen">
        {/* Image Section */}
        <div
          ref={animatedRef}
          className="relative bg-zinc-300 w-full lg:w-[70vh] h-[30vh] lg:h-[65vh] lg:ml-[-18%] mb-8 lg:mb-0 z-[9] "
        >
          <div className="w-full h-full  overflow-hidden bg-zinc-300 relative isolation">
            <img
              className="w-full h-full object-cover relative z-[1]"
              src="/Page-2/ModelGirl.webp"
              alt="Artist"
            />

            <div className="absolute -bottom-1 w-full z-[3]">
              <SplitText text="Amplifying future" />
            </div>
          </div>
          <h1 className="text-3xl text-zinc-500 absolute -top-4 -left-2 font-light font-[Saans]">
            +
          </h1>
          <h1 className="text-3xl text-zinc-500 absolute -top-4 -right-2 font-light font-[Saans]">
            +
          </h1>
          <h1 className="text-3xl text-zinc-500 absolute -bottom-4 -left-2 font-light font-[Saans]">
            +
          </h1>
          <h1 className="text-3xl text-zinc-500 absolute -bottom-4 -right-2 font-light font-[Saans]">
            +
          </h1>
        </div>

        {/* Vertical Text Section */}
        <div className="lg:absolute  w-[100%]  lg:translate-x-[-10%] h-[15%]  lg:-rotate-90 ">
          <ScrollBasedMarquee text="Marshall – Marshall –" speed={500} />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-[40%] md:mt-6 lg:mt-28 text-base md:ml-0 lg:ml-38 lg:text-lg h-auto lg:h-[90%] px-4 lg:px-0">
          <h1>Artist: Suki | Toronto</h1>

          <div className="relative">
            <h1 className="text-2xl font-[Aux-Mono] lg:text-4xl mt-3">
              <BlurText
                text="Amplifying future icons in music"
                animateBy="words"
                direction="bottom"
                delay={0.15}
              />

              <span className="absolute top-0 lg:-top-2 right-0 lg:-right-4 text-lg font-[Silk-Serif-Light-Italic] lg:text-4xl">
                02
              </span>
            </h1>
          </div>

          <p className="text-sm text-zinc-500 lg:text-lg mt-3">
            Inspired by the jazz music she grew up hearing, Suki used her first
            guitar to play covers before experimenting with her own sound.
            Writing songs in her bedroom, and then broadcasting on Soundcloud,
            Suki started sharing her songs without revealing her face, letting
            the music speak for itself.
          </p>
 
          <div className="flex relative flex-col lg:flex-row gap-3  lg:items-start items-center justify-between mt-5 gap-4">
            <button className="px-3 relative py-1 overflow-hidden group cursor-pointer mt-5 bg-black text-white rounded-full w-full lg:w-auto text-center">
              <h1 className="group-hover:translate-y-[150%]  duration-300 translate-y-[0%]"> Read More </h1>

              <h1 className="absolute bottom-1/2 text-zinc-300  group-hover:translate-y-[50%] duration-300 translate-y-[-150%]">Read More</h1>
            </button>

            <div
              ref={circleRef}
              className="circle pointer-events-none flex items-center justify-center absolute -top-1/3 left-1/2 w-64 h-64 text-xs  text-zinc-700 font-[Aux-mono] font-light border-1 rounded-full"
            >
              <p className="text-3xl font-light font-[Saans]">+</p>

              <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0 flex flex-col items-center justify-center">
                <h4 className="">2021</h4>
                <p className="text-2xl  font-light font-[Saans]">+</p>
              </div>
              <div className="absolute top-1/2 -right-2 translate-x-1/2 -translate-y-1/2 rotate-90 flex flex-col items-center justify-center">
                <h4 className="">2021</h4>
                <p className="text-2xl leading-none font-light font-[Saans]">
                  +
                </p>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-180 flex flex-col items-center justify-center">
                <h4 className="">2021</h4>
                <p className="text-2xl leading-none font-light font-[Saans]">
                  +
                </p>
              </div>
              <div className="absolute top-1/2 -left-2 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] flex flex-col items-center justify-center">
                <h4 className="">2021</h4>
                <p className="text-2xl leading-none font-light font-[Saans]">
                  +
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
