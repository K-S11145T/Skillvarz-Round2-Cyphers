import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BlurText from "../Animations/BlurText";

const Page1 = ({
  onComplete,
  unlockScroll,
  setHomeImgHover,
  setHomeImgClick,
}) => {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);
  const img5 = useRef(null);
  const img6 = useRef(null);
  const h1Ref = useRef(null);
  const h1Ref2 = useRef(null);
  const imgDiv = useRef(null);
  const [isImgHovered, setIsImgHovered] = useState(false);
  const [isImgActive, setIsImgActive] = useState(false);
  const [isMusicActive, setIsMusicActive] = useState(false);
  const barsRef = useRef([]);
  const audioRef = useRef(null);

  const cursorRef = useRef(null);
  const coloredImgRef = useRef(null);
  const [showCursorImg, setShowCursorImg] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    if (isImgActive) {
      window.addEventListener("mousemove", moveCursor);
    } else {
      window.removeEventListener("mousemove", moveCursor);
      setShowCursorImg(false);
    }

    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isImgActive]);

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
    const tl = gsap.timeline({ delay: 7.7 });
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
      },
      "sameTime"
    );

    tl.from(
      h1Ref.current,
      {
        y: "100%",
        rotate: "30deg",
      },
      "sameTime"
    );

    tl.from(
      h1Ref2.current,
      {
        y: "100%",
        rotate: "30deg",
      },
      "sameTime"
    );
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
    setHomeImgClick(false);

    try {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 767px)", () => {
        const tl = gsap.timeline({
          onComplete: () => {
            onComplete();
            unlockScroll();
          },
        });
        if (!isImgActive) {
          setIsImgActive(true);
          tl.to(imgDiv.current, {
            height: "100vh",
            width: "100vw",
            ease: "power2.out",
            duration: 0.9,
          });
        }
        if (isImgActive) {
          setIsImgActive(false);
          tl.to(imgDiv.current, {
            height: "48vh",
            width: "40vw",
            ease: "power2.out",
            duration: 0.9,
          });
        }
      });
    } catch (error) {
      console.error("Error in handleImgClick:", error);
    }
  };

  const handleEnter = () => {
    setIsImgHovered(true);
    setHomeImgHover(true);
  };

  const handleLeave = () => {
    setIsImgHovered(false);
    setHomeImgHover(false);
  };

  return (
    <div className="flex-none z-[8]  w-screen h-screen relative bg-[#EDEDED] text-black flex items-end justify-start px-2 lg:px-8 pb-5">
      {/* Top-right logo */}

      <audio ref={audioRef} src="/Page-1/Music.ogg" loop preload="auto" />
      <div
        className="flex fixed px-2 py-1 font-thin rounded-md items-center  gap-1 justify-center 
  text-[#1E1E1E] absolute bottom-10 right-5 lg:right-20 z-[999] scale-[120%] 
  bg-white/70 backdrop-blur-md  shadow-md"
      >
        <div
          onClick={toggleAudio}
          className="flex cursor-pointer items-center justify-center w-5 h-5 rounded-full text-[#1E1E1E] 
            "
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
        className="marshall-logo h-15 lg:h-20 object-cover absolute right-1 lg:right-10 top-2 lg:top-5"
      />

      {/* Text bottom */}
      <div
        className={`absolute pointer-events-none bottom-10 lg:bottom-5 z-[23] transition-all duration-[0.7] ${
          isImgActive ? "text-zinc-100" : "text-zinc-900"
        }`}
      >
        <h4 className="w-[70%] lg:w-[30%] underline font-[Saans] mb-2 lg:mb-5 lg:text-sm">
          Signature Marshall sound built for music lovers who crave rich,
          immersive audio.
        </h4>
        <div className="overflow-hidden h-fit">
          <h1
            ref={h1Ref}
            className="text-5xl origin-left leading-10 lg:text-[6vw] lg:leading-[5vw] tracking-tighter font-[Montserrat-Bold]"
          >
            ROCK N ROLL
          </h1>
        </div>
        <div className="overflow-hidden h-fit">
          <h1
            ref={h1Ref2}
            className="text-5xl origin-left leading-10 lg:text-[6vw] lg:leading-[5vw] tracking-tighter font-[Montserrat-Bold]"
          >
            A STATE OF MIND.
          </h1>
        </div>

        <h4 className="absolute top-1/2 right-7 lg:-right-0 translate-x-1/2 lg:translate-y-1/2 text-4xl font-[Silk-Serif-Light-Italic]">
          01
        </h4>
      </div>

      {/* Center img */}
      <div
        ref={imgDiv}
        onClick={() => handleImgClick()}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="absolute z-[20] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-center w-[99vw] h-[35vh] lg:w-[40vw] lg:h-[48vh] cursor-pointer"
      >
        <img
          ref={img4}
          src="./Page-1/BlackNWhite.png"
          alt=""
          className="w-full h-full object-cover "
        />
        <h3 className="absolute -bottom-6 right-0">Marshall</h3>
      </div>

      {/* All Floating Imgs */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 px-2 lg:px-8 -translate-x-1/2 h-3/4 w-full flex justify-start gap-3 font-[Saans] text-sm">
        <div className="flex gap-3">
          <div className="flex flex-col items-end">
            <div className="w-[60vw] h-auto lg:w-[18vw] lg:h-[45vh] overflow-hidden">
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
          <div className="flex flex-col items-end hidden lg:flex">
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

        <div className="hidden lg:flex items-center gap-3 h-full w-full">
          <div className="w-[40vw]"></div>
          <div className="h-[48vh] flex gap-3">
            <div className="flex flex-col items-end">
              <div className="w-[8.5vw] h-[22vh] overflow-hidden">
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
              <div className="w-[8.5vw] h-[22vh] overflow-hidden">
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
    </div>
  );
};

export default Page1;
