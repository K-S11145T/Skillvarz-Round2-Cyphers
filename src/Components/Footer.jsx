import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Footer = () => {
  return (
    <div className="relative w-screen h-screen">
      <div className="flex-none bottom-0 left-0 w-screen h-screen bg-white text-black z-50">
        <div className="w-full flex items-center justify-center text-9xl min-h-screen font-rewritten">
          Footer
        </div>
      </div>
    </div>
  );
};

export default Footer;
