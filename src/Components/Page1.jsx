import { useEffect, useRef, useState } from "react";

import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import InversionLens from "./InversionLens/InversionLens";

const Page1 = ({ onComplete }) => {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);
  const img5 = useRef(null);
  const img6 = useRef(null);
  const h1Ref = useRef(null);
  const imgDiv = useRef(null);
  const circle = useRef(null);
  const circleTextRef = useRef(null);
  const [isImgHovered, setIsImgHovered] = useState(false);
  const [isImgActive, setIsImgActive] = useState(false);
  const [isMusicActive, setIsMusicActive] = useState(false);
  const barsRef = useRef([]);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isMusicActive) {
      barsRef.current.forEach((bar, index) => {
        gsap.to(bar, {
          scaleY: () => Math.random() * 2,
          repeat: -1,

          ease: "power1.inOut",
          duration: 0.2 + Math.random(),
          delay: index * 0.05,
          transformOrigin: "center center",
        });
      });
    } else {
      // Reset bars to scaleY = 1 and kill animation
      barsRef.current.forEach((bar) => {
        gsap.killTweensOf(bar); // stop the animation
        gsap.to(bar, {
          scaleY: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    }
  }, [isMusicActive]);

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isMusicActive) {
      audio.pause();
      setIsMusicActive(false);
    } else {
      audio.volume = 1; // Yaha se Set volume krlo!!
      audio
        .play()
        .then(() => {
          setIsMusicActive(true);
        })
        .catch((err) => {
          console.error("Audio play error:", err);
        });
    }
  };

  useGSAP(() => {
    // gsap.fromTo(
    //   circle.current,
    //   { scale: 0, opacity: 0 },
    //   { scale: 1, opacity: 1, duration: 1, ease: "power2.out", delay: 1 }
    // );

    // gsap.to(circle.current, {
    //   rotate: -360,
    //   duration: 15,
    //   ease: "linear",
    //   repeat: -1,
    // });

    // gsap.to(circleTextRef.current, {
    //   rotate: 360, // opposite rotation
    //   duration: 15,
    //   ease: "linear",
    //   repeat: -1,
    // });

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

    document.body.style.overflowX = "hidden";

    // const moveCursor = (e) => {
    //   gsap.to(circle.current, {
    //     x: e.clientX - 112, // adjust for center (half of w-64)
    //     y: e.clientY - 112,
    //     duration: 0.4,
    //     ease: "power2.out",
    //   });
    // };
    // window.addEventListener("mousemove", moveCursor);
    // return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const hoverIn = (el) => {
    gsap.to(el, {
      scale: 1.05,
      duration: 0.2,
      // ease: "power2.out",
    });
  };

  const hoverOut = (el) => {
    gsap.to(el, {
      scale: 1,
      duration: 0.3,
      // ease: "power2.in",
    });
  };

  const handleImgClick = () => {
    setIsImgActive(true);
    document.body.style.overflow = "auto";
    const tl = gsap.timeline();
    tl.to(imgDiv.current, {
      height: "100vh",
      width: "100vw",
      ease: "power2.out",
      duration: 0.9,
    });
    onComplete();
    // .to(circle.current, {
    //   color: "#fff",
    //   borderColor: "#EDEDED",
    //   duration: 0.1,
    // });
  };

  const handleEnter = () => {
    setIsImgHovered(true);
    // gsap.to(circle.current, {
    //   scale: 1.2,
    //   duration: 0.3,
    //   backgroundColor: "#transparent",
    //   color: "#fff",
    // });
    // gsap.to(img4.current, {
    //   scale: 1.1,
    //   ease: "power2.out",
    //   duration: 0.3,
    // });
  };

  const handleLeave = () => {
    setIsImgHovered(false);
    // gsap.to(circle.current, {
    //   scale: 1,
    //   duration: 0.3,
    //   backgroundColor: "transparent",
    //   color: "#1E1E1E",
    // });
    // gsap.to(img4.current, {
    //   scale: 1,
    //   ease: "power2.out",
    //   duration: 0.3,
    // });
  };

  return (
    <div className="flex-none z-[8]  w-screen h-screen relative bg-[#EDEDED] text-black flex items-end justify-start px-8 pb-5">
      {/* <InversionLens src={"./Page-1/LandingPageModelColored.png"} /> */}
      {/* Top-right logo */}

      <audio
        ref={audioRef}
        src="/Page-1/Music.ogg"
        loop
        preload="auto"
      />
      <div
        className="flex fixed px-2 py-1 font-thin rounded-full items-center  gap-1 justify-center 
  text-[#1E1E1E] absolute bottom-10 right-20 z-[9990] scale-[170%] 
  bg-white/70 backdrop-blur-md  shadow-md"
      >
        <div
          onClick={toggleAudio}
          className="flex cursor-pointer items-center justify-center w-5 h-5 rounded-full text-[#1E1E1E] 
             bg-[#e0e5ec] shadow-[3px_3px_6px_#b8b9be,-3px_-3px_6px_#ffffff] 
             hover:shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff]
             transition-all duration-200"
        >
          {isMusicActive ? (
            <i class="ri-pause-line"></i>
          ) : (
            <i class="ri-play-line"></i>
          )}
        </div>
        {Array.from({ length: 8 }).map((_, i) => (
          <h1
            key={i}
            ref={(el) => (barsRef.current[i] = el)}
            className="transition-transform mb-1"
          >
            |
          </h1>
        ))}
      </div>

      <img
        src="./Page-1/Marshall-Logo.png"
        alt=""
        className="marshall-logo h-20 object-cover absolute right-10 top-3"
      />

      {/* Text bottom */}
      <div
        className={`absolute bottom-5 z-[23] transition-all duration-[0.7] ${isImgActive ? "text-zinc-100" : "text-zinc-900"
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
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="absolute z-[20] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-center  w-[40vw] h-[48vh] cursor-pointer overflow-hidden"
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
                onMouseEnter={() => hoverIn(img1.current)}
                onMouseLeave={() => hoverOut(img1.current)}
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
                onMouseEnter={() => hoverIn(img2.current)}
                onMouseLeave={() => hoverOut(img2.current)}
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
                  onMouseEnter={() => hoverIn(img5.current)}
                  onMouseLeave={() => hoverOut(img5.current)}
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
                  onMouseEnter={() => hoverIn(img6.current)}
                  onMouseLeave={() => hoverOut(img6.current)}
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

      {/* <div
        ref={circle}
        className="circle pointer-events-none absolute z-[20] top-0 left-0 w-56 h-56 flex items-center justify-center rounded-full text-xs leading-none text-[#1E1E1E] font-[Aux-mono] font-light border-1 border-[#5C5858]"
      >
        <div ref={circleTextRef} className=" font-light font-[Saans]">
          <span
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl transition-all duration-300 ease-in-out ${
              isImgHovered ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          >
            +
          </span>
          <div
            className={`absolute top-1/2 backdrop-blur-md bg-white/10 h-20 w-20 flex items-center justify-center rounded-full left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg transition-all duration-300 ease-in-out ${
              isImgHovered ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
            click
          </div>
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
      </div> */}
    </div>
  );
};

export default Page1;
