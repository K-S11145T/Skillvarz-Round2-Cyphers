import React, { useRef, useEffect, useState } from "react";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";
import { useGSAP } from "@gsap/react";

const App = () => {
  const scrollContainerRef = useRef(null);

  useGSAP(() => {}, []);

  return (
    <div
      ref={scrollContainerRef}
      className={`w-screen h-screen md:flex`}
      tabIndex={0}
    >
      <div className="w-full h-full flex flex-shrink-0">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
      </div>
    </div>
  );
};

export default App;
