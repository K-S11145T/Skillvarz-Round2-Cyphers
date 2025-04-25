import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import InversionLens from "./InversionLens/InversionLens";

const Page1 = () => {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);
  const img5 = useRef(null);
  const img6 = useRef(null);
  const h1Ref = useRef(null);
  const imgDiv = useRef(null);
  const circle = useRef(null);
  const [isImgActive, setIsImgActive] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 6.8 });
    tl.from(
      [
        img1.current,
        img2.current,
        img3.current,
        // img4.current,
        img5.current,
        img6.current,
      ],
      {
        y: "100%",
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  const handleImgClick = () => {
    setIsImgActive(true);
    const tl = gsap.timeline();
    tl.to(imgDiv.current, {
      height: "100vh",
      width: "100vw",
      ease: "power2.out",
      duration: 0.9,
    }).to(circle.current, {
      color: "#fff",
      borderColor: "#EDEDED",
      duration: 0.1,
    });
  };

  return (
    <div className="flex-none z-[8] w-screen h-screen relative bg-[#EDEDED] text-black flex items-end justify-start px-8 pb-5">
      {/* <InversionLens src={"./Page-1/LandingPageModelColored.png"} /> */}
      {/* Top-right logo */}
      <img
        src="./Page-1/Marshall-Logo.png"
        alt=""
        className="marshall-logo h-20 object-cover absolute right-10 top-3"
      />

      {/* Text bottom */}
      <div
        className={`absolute bottom-5 z-[23] transition-all duration-[0.7] ${
          isImgActive ? "text-zinc-100" : "text-zinc-900"
        }`}
      >
        <h4 className="w-[30%] underline font-[Saans] mb-5 text-sm">
          Signature Marshall sound built for music lovers who crave rich,
          immersive audio.
        </h4>
        <h1
          ref={h1Ref}
          className="text-[6vw] leading-[5vw] tracking-tighter font-[Montserrat-Bold]"
        >
          ROCK N ROLL
        </h1>
        <h1 className="text-[6vw] leading-[5vw] tracking-tighter font-[Montserrat-Bold]">
          A STATE OF MIND.
        </h1>

        <h4 className="absolute top-1/2 -right-0 translate-x-1/2 translate-y-1/2 text-4xl font-[Silk-Serif-Light-Italic]">
          01
        </h4>
      </div>

      {/* Center img */}
      <div
        ref={imgDiv}
        onClick={() => handleImgClick()}
        className="absolute z-[20] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-center  w-[40vw] h-[48vh] cursor-pointer"
      >
        <img
          ref={img4}
          src="./Page-1/BlackNWhite.jpg"
          alt=""
          className="w-full h-full object-cover "
        />
        <h3 className="absolute -bottom-6 right-0">Marshall</h3>
      </div>

      {/* All Floating Imgs */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 px-8 -translate-x-1/2 h-3/4 w-full flex justify-start gap-3 font-[Saans] text-sm">
        <div className="flex gap-3">
          <div className="flex flex-col items-end">
            <div className="w-[18vw] h-[45vh] overflow-hidden">
              <img
                ref={img1}
                src="./Page-1/designing.jpg"
                alt=""
                className="w-full h-full object-cover object-right saturate-0"
              />
            </div>
            <h3>designing</h3>
          </div>
          <div className="flex flex-col items-end">
            <div className="w-32 h-40 overflow-hidden">
              <img
                ref={img2}
                src="./Page-1/powerful.png"
                alt=""
                className="w-full h-full object-cover object-right"
              />
            </div>
            <h3>powerful</h3>
          </div>
        </div>

        <div className="flex items-center gap-3 h-full w-full">
          <div className="w-[40vw]"></div>
          <div className="h-[48vh] flex gap-3">
            <div className="flex flex-col items-end">
              <div className="w-32 h-40 overflow-hidden">
                <img
                  ref={img5}
                  src="./Page-1/homeImg1.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h3>Loyalty</h3>
            </div>
            <div className="flex flex-col items-end">
              <div className="w-32 h-40 overflow-hidden">
                <img
                  ref={img6}
                  src="./Page-1/legacy.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h3>Legacy</h3>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={circle}
        className="circle absolute z-[20] bottom-10 right-30 w-64 h-64 flex items-center justify-center rounded-full text-xs leading-none text-[#1E1E1E] font-[Aux-mono] font-light border-1 border-[#5C5858]"
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

export default Page1;
