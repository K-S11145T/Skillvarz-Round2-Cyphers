import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import Circle from "./Components/Circle";

const BREAKPOINT = 768;

const App = () => {
  const scrollContainerRef = useRef(null);
  const contentRef = useRef(null);
  const [isPage1Complete, setIsPage1Complete] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= BREAKPOINT);
  const [isScrollLocked, setIsScrollLocked] = useState(true);
  const animationRef = useRef(null);

  // Handle scroll animation with GSAP
  const animateScroll = useCallback((target, duration = 1, ease = "power2.out") => {
    if (isScrollLocked) return;// Don't animate if locked
    
    if (animationRef.current) {
      animationRef.current.kill();
    }

    if (duration < 0.3) {
      scrollContainerRef.current.scrollTo({
        left: target,
        behavior: "auto",
      });
      return;
    }

      animationRef.current = gsap.to(scrollContainerRef.current, {
        scrollLeft: target,
        duration,
        ease,
        overwrite: "auto",
        onUpdate: () => {
          // Force synchronous layout update
          scrollContainerRef.current.scrollLeft =
            scrollContainerRef.current.scrollLeft;
        },
      });
    }, [isScrollLocked]);

  // Initialize responsive layout
  useEffect(() => {
    const container = scrollContainerRef.current;
    const content = contentRef.current;

    if (isDesktop) {
      gsap.set(content, {
        display: "flex",
        width: `${5 * 100}vw`,
      });
      gsap.set(container, {
        overflowX: isScrollLocked ? "hidden" : "auto", // Disable overflow when locked
        overflowY: "hidden",
        scrollBehavior: "auto",
      });
    } else {
      gsap.set(content, {
        display: "flex",
        flexDirection: "column",
        width: "100%",
      });
      gsap.set(container, {
        overflowX: "hidden",
        overflowY: "auto",
      });
    }
  }, [isDesktop, isScrollLocked]);

  // Desktop scroll handlers
  useEffect(() => {
    if (!isDesktop) return;

    const el = scrollContainerRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (isScrollLocked) {
        e.preventDefault();
        return;
      }
      
      e.preventDefault();
      const currentScroll = el.scrollLeft;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const target = currentScroll + delta * 5;
      animateScroll(target);
    };


    const handleKeyDown = (e) => {
      if (
        ![
          "ArrowLeft",
          "ArrowRight",
          "PageUp",
          "PageDown",
          "Home",
          "End",
        ].includes(e.key)
      )
        return;

      e.preventDefault();
      const pageWidth = el.clientWidth;
      const currentScroll = el.scrollLeft;
      const maxScroll = el.scrollWidth - el.clientWidth;

      const scrollActions = {
        ArrowLeft: () =>
          animateScroll(Math.max(currentScroll - pageWidth * 0.33, 0), 0.6),
        ArrowRight: () =>
          animateScroll(Math.min(currentScroll + pageWidth * 0.33, maxScroll)),
        PageUp: () =>
          animateScroll(Math.max(currentScroll - pageWidth * 0.9, 0)),
        PageDown: () =>
          animateScroll(Math.min(currentScroll + pageWidth * 0.9, maxScroll)),
        Home: () => animateScroll(0),
        End: () => animateScroll(maxScroll),
      };

      scrollActions[e.key]?.();
    };

   
    el.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      el.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDesktop, animateScroll, isScrollLocked]);

  const lockScroll = useCallback(() => {
    setIsScrollLocked(true);
    animationRef.current?.kill(); // Completely kill any ongoing animation
    gsap.set(scrollContainerRef.current, { overflowX: "hidden" });
  }, []);

  const unlockScroll = useCallback(() => {
    setIsScrollLocked(false);
    gsap.set(scrollContainerRef.current, { overflowX: "auto" });
  }, []);
  useEffect(() => {
    // Lock scroll when component mounts
    lockScroll();
    
   
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="w-screen bg-zinc-700 h-screen overflow-x-hidden select-none"
      tabIndex={0}
      data-horizontal-scroll
    >
      <div
        ref={contentRef}
        className={isDesktop ? "flex relative" : "flex flex-col relative"}
      >
        <Loader />
        <div
          style={{
            position: "fixed",
            top: "0%",
            left: "0%",
            transform: "translate(-50%, -50%)",
            zIndex: "1000",
          }}
        >
          <Circle />
        </div>
        <Navbar />
        <Page1 
  onComplete={() => {
    setIsPage1Complete(true);
    unlockScroll(); // Also call unlockScroll here for redundancy
  }}
  unlockScroll={unlockScroll}
/>
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Footer />
      </div>
    </div>
  );
};

// Helper function for debouncing
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

export default App;
