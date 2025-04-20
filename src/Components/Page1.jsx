import React from "react";
import Navbar from "./Navbar";

const Page1 = () => {
  return (
    <div className="flex-none w-screen h-screen relative bg-zinc-950 text-white">
      <Navbar />
      <div className="img-container relative h-full w-full">
        <img
          src="./Page-1/LandingPageModelColored.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="h1-holder absolute z-[20] bottom-10 px-5 left-0 w-fit">
          <h1 className="text-[9.5vw] leading-[8.7vw] font-bold">
            ROCK N ROLL <br />A STATE OF MIND.
          </h1>
          <h3 className="absolute right-5 top-1/2 -translate-y-1/2 text-5xl italic">
            01
          </h3>
        </div>
      </div>
      <div className="overlay absolute top-0 left-0 z-[9] h-full w-full bg-[#414141a2]">
        <div className="circle absolute top-1/4 left-1/2 w-64 h-64 bg-zinc-400 rounded-full">
          <h4 className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-1/2">2021</h4>
          <h4 className="absolute -right-4 top-1/2 rotate-[90deg] -translate-x-1/2 -translate-y-1/2">2021</h4>
        </div>
      </div>
    </div>
  );
};

export default Page1;
