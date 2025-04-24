import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlurText = ({
  text = "",
  delay = 0.2,
  className = "",
  animateBy = "words",
  direction = "top",
  animationFrom,
  animationTo,
  onAnimationComplete,
}) => {
  const ref = useRef(null);
  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  const defaultFrom =
    direction === "top"
      ? { 
          opacity: 0, 
          y: -50, 
          filter: "blur(20px)", // Increased blur
          willChange: "filter, opacity, transform" // Added for performance
        }
      : { 
          opacity: 0, 
          y: 50, 
          filter: "blur(20px)", // Increased blur
          willChange: "filter, opacity, transform" // Added for performance
        };

  const defaultTo = {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    ease: "power3.out",
    duration: 0.5, // Added duration
    stagger: {
      each: delay,
      from: "start" // Explicit stagger direction
    }
  };

  useEffect(() => {
    const container = document.querySelector("[data-horizontal-scroll]");
    if (!container || !ref.current) return;
  
    const targets = ref.current.querySelectorAll(".blur-word");
    
    // Make elements initially invisible
    gsap.set(targets, { opacity: 0 });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        scroller: container,
        horizontal: true,
        start: "center 90%",
        end: "+=500",
 
        id: "blur-text-animation"
      }
    });
    
    tl.fromTo(
      targets,
      animationFrom || defaultFrom,
      {
        ...(animationTo || defaultTo),
        onComplete: () => {
          console.log("BlurText animation complete");
          onAnimationComplete?.();
        },
      }
    );
  
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [animationFrom, animationTo, defaultFrom, defaultTo]);

  return (
    <p ref={ref} className={`blur-text ${className}`}>
      {elements.map((char, i) => (
        <span
          key={i}
          className="blur-word inline-block relative" // Added relative
          style={{ 
            whiteSpace: char === " " ? "pre" : "normal",
            transformStyle: "preserve-3d" // For better rendering
          }}
        >
          {char}
          {animateBy === "words" && i < elements.length - 1 && "\u00A0"}
        </span>
      ))}
    </p>
  );
};

export default BlurText;