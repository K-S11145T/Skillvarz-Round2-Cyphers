import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Loader = () => {
  const circle = useRef(null);
  const imgDiv = useRef(null);
  const artistRef = useRef(null);
  const artist2Ref = useRef(null);
  const productsRef = useRef(null);
  const loaderRef = useRef(null);
  const artists = [
    "Adele",
    "Arctic Monkeys",
    "Adele",
    "Arctic Monkeys",
    "Adele",
    "Arctic Monkeys",
    "Adele",
    "Arctic Monkeys",
    "Adele",
    "Arctic Monkeys",
    "Adele",
    "Arctic Monkeys",
    "Adele",
    "Arctic Monkeys",
    "Adele",
    "Arctic Monkeys",
    "Adele",
    "Arctic Monkeys",
    "Adele",
    "Arctic Monkeys",
    "Adele",
    "Arctic Monkeys",
    "Adele",
    "Arctic Monkeys",
  ];

  const products = [
    "Emberton",
    "Woburn III",
    "Emberton",
    "Woburn III",
    "Emberton",
    "Woburn III",
    "Emberton",
    "Woburn III",
    "Emberton",
    "Woburn III",
    "Emberton",
    "Woburn III",
    "Emberton",
    "Woburn III",
    "Emberton",
    "Woburn III",
    "Emberton",
    "Woburn III",
    "Emberton",
    "Woburn III",
    "Emberton",
    "Woburn III",
    "Emberton",
    "Woburn III",
  ];

  useGSAP(() => {
    // const circleTimeline = gsap.timeline();
    const artistTimeline = gsap.timeline();
    const artist2Timeline = gsap.timeline();
    const productsTimeline = gsap.timeline();

    gsap.to(circle.current, {
      rotation: 360, // Rotate 360 degrees
      duration: 5, // Duration for one full rotation
      ease: "linear", // Smooth linear rotation
      repeat: -1, // Infinite loop
    });

    const circleTimeline = gsap.timeline();

    // Define manual positions for the circle
    const positions = [
      { top: "10%", left: "20%" },
      { top: "30%", left: "50%" },
      { top: "70%", left: "80%" },
      { top: "50%", left: "30%" },
      { top: "20%", left: "70%" },
      { top: "50%", left: "50%" },
    ];

    // Animate the circle through the predefined positions
    positions.forEach((pos) => {
      circleTimeline.to(circle.current, {
        scale: 1,
        top: pos.top,
        left: pos.left,
        duration: 1, // Duration for each movement
        ease: "power2.inOut", // Smooth easing
      });
    });

    circleTimeline
      .to(
        circle.current,
        {
          scale: 0.8,
          duration: 0.3,
        },
        "same"
      )
      .to(
        imgDiv.current,
        {
          scale: 0.8,
          duration: 0.3,
        },
        "same"
      )
      .to(imgDiv.current, {
        scale: 1,
        duration: 0.4,
      });

    circleTimeline
      .to(loaderRef.current, {
        background: "transparent",
        duration: 0.1,
      })
      .to(loaderRef.current, {
        display: "none",
      });

    const artistH2s = artistRef.current.querySelectorAll("h2");
    const artist2H2s = artist2Ref.current.querySelectorAll("h2");
    const productH2s = productsRef.current.querySelectorAll("h2");

    // Animate the h2 elements
    artistTimeline
      .to(
        artistH2s,
        {
          opacity: 1,
          duration: 0.15,
          stagger: 0.075,
          ease: "power2.out",
        },
        "one"
      )
      .to(
        artistH2s,
        {
          color: "#fff",
          duration: 0.15,
          stagger: 0.075,
          ease: "power2.out",
        },
        "two"
      )
      .to(
        artistH2s,
        {
          opacity: 0,
          duration: 0.15,
          stagger: 0.075,
          ease: "power2.out",
        },
        "three"
      );

    artistTimeline
      .to(
        artist2H2s,
        {
          opacity: 1,
          duration: 0.15,
          stagger: 0.075,
          ease: "power2.out",
        },
        "one"
      )
      .to(
        artist2H2s,
        {
          color: "#fff",
          duration: 0.15,
          stagger: 0.075,
          ease: "power2.out",
        },
        "two"
      )
      .to(
        artist2H2s,
        {
          opacity: 0,
          duration: 0.15,
          stagger: 0.075,
          ease: "power2.out",
        },
        "three"
      );

    artistTimeline
      .to(
        productH2s,
        {
          opacity: 1,
          duration: 0.15,
          stagger: 0.075,
          ease: "power2.out",
        },
        "one"
      )
      .to(
        productH2s,
        {
          color: "#fff",
          duration: 0.15,
          stagger: 0.075,
          ease: "power2.out",
        },
        "two"
      )
      .to(
        productH2s,
        {
          opacity: 0,
          duration: 0.15,
          stagger: 0.075,
          ease: "power2.out",
        },
        "three"
      );

    return () => {
      circleTimeline.kill();
      artistTimeline.kill();
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed z-[999] h-screen w-screen bg-black text-white overflow-hidden flex justify-between items-center px-12 py-15 font-[Aux-mono] text-sm font-[100]"
    >
      <div
        ref={imgDiv}
        className="w-[40vw] h-[48vh] absolute z-[20] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-red-900"
      >
        <img
          src="./Page-1/BlackNWhite.jpg"
          alt=""
          className="w-full h-full object-cover"
        />

        <h2 className="absolute -bottom-7 text-zinc-300 right-0 text-base">
          Marshall
        </h2>
      </div>

      <div className="px-2 py-2 flex gap-15 ">
        <div ref={artistRef} className="">
          <h2 className="mb-3 uppercase opacity-0">Artist</h2>
          {artists.map((elem, index) => (
            <h2 className="text-[#6C6B6B] opacity-0">{elem}</h2>
          ))}
        </div>
        <div ref={artist2Ref} className="">
          <h2 className="mb-3 uppercase text-end opacity-0">Artist</h2>
          {artists.map((elem, index) => (
            <h2 className="text-end text-[#6C6B6B] opacity-0">{elem}</h2>
          ))}
        </div>
      </div>
      <div ref={productsRef} className="px-2 py-2 w-[20%]">
        <h2 className="mb-3 uppercase opacity-0">Product</h2>
        {products.map((elem, index) => (
          <h2 className="text-[#6C6B6B] opacity-0">{elem}</h2>
        ))}
      </div>

      <div
        ref={circle}
        className="circle scale-[0] z-[99] absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 flex items-center justify-center rounded-full text-xs leading-none text-zinc-200 font-[Aux-mono] font-light border-1 border-zinc-200"
      >
        <p className="text-3xl font-light font-[Saans]">+</p>

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
    </div>
  );
};

export default Loader;
