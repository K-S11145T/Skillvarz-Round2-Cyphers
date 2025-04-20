import React, { useEffect, useRef } from "react";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ReactLenis, { useLenis } from "lenis/react";

const App = () => {
  const lenis = useLenis();
  gsap.registerPlugin(ScrollTrigger);

  const scrollContainerRef = useRef(null);
  const parent = useRef(null);

  useEffect(() => {
    if (!parent.current || !lenis) return;

    ScrollTrigger.scrollerProxy(parent.current, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value);
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: parent.current.style.transform ? "transform" : "fixed",
    });

    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.defaults({
      scroller: parent.current,
    });

    ScrollTrigger.refresh();
  }, [lenis]);
  useGSAP(() => {
    gsap.to(scrollContainerRef.current, {
      x: "-100%",
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        start: "top top",
        end: "top -100%",
        scroller: parent.current,
        pin: true,
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <ReactLenis root>
      <div ref={parent} className={`relative w-full h-screen overflow-hidden`}>
        <div
          ref={scrollContainerRef}
          className="w-[500vw] h-full flex flex-shrink-0"
        >
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
        </div>
      </div>
    </ReactLenis>
  );
};

export default App;
