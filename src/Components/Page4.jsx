import React, { useState, useEffect, useRef } from "react";

const Page4 = () => {
  // Ref for the video container
  const videoContainerRef = useRef(null);
  // State to track offset position for parallax
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  // State to track target position (for smoother animation)
  const [targetOffset, setTargetOffset] = useState({ x: 0, y: 0 });

  // Effect to handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!videoContainerRef.current) return;

      // Get container dimensions
      const container = videoContainerRef.current;
      const containerRect = container.getBoundingClientRect();

      // Calculate cursor position relative to center of container
      const centerX = containerRect.left + containerRect.width / 2;
      const centerY = containerRect.top + containerRect.height / 2;

      // Calculate distance from center (normalized between -1 and 1)
      const distanceX = (e.clientX - centerX) / (window.innerWidth / 2);
      const distanceY = (e.clientY - centerY) / (window.innerHeight / 2);

      // Set target position with reduced intensity
      setTargetOffset({
        x: distanceX * 25, // Slightly increased max movement for more noticeable effect
        y: distanceY * 25,
      });
    };

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Effect for smooth animation
  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setOffset((prevOffset) => {
        // Calculate the distance to move (lerp - linear interpolation)
        const dx = (targetOffset.x - prevOffset.x) * 0.05;
        const dy = (targetOffset.y - prevOffset.y) * 0.05;

        return {
          x: prevOffset.x + dx,
          y: prevOffset.y + dy,
        };
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetOffset]);

  return (
    <div className="flex-none w-screen min-h-screen bg-zinc-100 relative">
      {/* Container with z-index management */}
      <div className="flex flex-row w-full h-full">
        {/* First div - 35% width with floating text animation */}
        <div className="w-[35%] h-[70%] p-5 relative z-10">
          <div className="flex flex-col mt-20 justify-center h-full">
            <div
              className="animate-float-slow"
              style={{ animationDelay: "0s" }}
            >
              <h1 className="text-2xl font-[Aux-Mono] lg:text-9xl mb-20">
                Marshal
              </h1>
            </div>
            <div
              className="animate-float-slow"
              style={{ animationDelay: "0.5s" }}
            >
              <h1 className="text-2xl font-[Aux-Mono] lg:text-9xl mb-25">
                Marshal
              </h1>
            </div>
            <div
              className="animate-float-slow"
              style={{ animationDelay: "1s" }}
            >
              <h1 className="text-2xl font-[Aux-Mono] lg:text-9xl mb-2">
                Marshal
              </h1>
            </div>
          </div>
        </div>

        {/* Center div - video with highest z-index and smoother parallax */}
        <div
          ref={videoContainerRef}
          className="w-[25%] h-[55%] mt-35 absolute left-1/2 transform -translate-x-1/2 overflow-hidden z-20"
        >
          <div
            className="flex flex-col justify-center h-full w-full"
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px)`,
              // Removed transition for using the animation frame based movement
            }}
          >
            <video
              className="w-full rounded-lg shadow-lg"
              muted
              loop
              autoPlay
              playsInline
            >
              <source src="/Page4/Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Third div - 35% width with floating images that overlap with video */}
        <div className="w-[40%] h-[70%] p-5 ml-auto relative z-10">
          <div className="flex flex-col gap-10 mt-15 justify-center h-full">
            {/* Images that overlap with video by positioning them with negative margin */}
            <div
              className="animate-float-slow -ml-[10%]"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src="/Page-4/MarshallBack-Logo.png"
                alt="Marshal"
                width="190"
                className="w-auto h-auto"
              />
            </div>
            <div
              className="animate-float-slow -ml-[10%]"
              style={{ animationDelay: "0.7s" }}
            >
              <img
                src="/page-4/MarshallBack-Logo.png"
                alt="Marshal"
                width="190"
                className="w-auto h-auto"
              />
            </div>
            <div
              className="animate-float-slow -ml-[10%]"
              style={{ animationDelay: "1.2s" }}
            >
              <img
                src="/page-4/MarshallBack-Logo.png"
                alt="Marshal"
                width="190"
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add the custom animation keyframes with style tag */}
      <style jsx>{`
        @keyframes float-slow {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Page4;
