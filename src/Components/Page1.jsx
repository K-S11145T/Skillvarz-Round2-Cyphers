import React from "react";
import Navbar from "./Navbar";

const Page1 = () => {
  return (
    <div className="flex-none w-screen h-screen relative bg-zinc-100 text-black">
      <Navbar />
      <div className="relative h-full w-full flex items-center justify-center">
        {/* Bg Logo */}
        <img
          src="./Page-1/Marshall-Logo.png"
          alt=""
          className="marshall-logo h-[150%] object-cover opacity-[20%] -ml-20"
        />

        {/* Top-right logo */}
        <img
          src="./Page-1/Marshall-Logo.png"
          alt=""
          className="marshall-logo h-20 object-cover absolute right-10 top-3"
        />

        {/* Text h1 */}
        <div className="absolute bottom-20 right-[18%] flex flex-col items-center justify-center text-6xl font-[Montserrat-Bold]">
          <h1 style={{ WebkitTextStroke: "2px #000", color: "transparent" }}>
            A STATE OF MIND.
          </h1>
          <h1>ROCK N ROLL</h1>

          <h4 className="absolute -top-2 -left-5 -translate-x-1/2 -translate-y-1/2 text-5xl font-[Silk-Serif-Light-Italic]">
            01
          </h4>
        </div>

        {/* All Floating Imgs */}
        <div className="absolute top-1/2 right-20 -translate-y-1/2 h-3/4 w-[65%]">
          <img
            src="./Page-1/homeImg1.png"
            alt=""
            className="w-44 object-cover absolute -bottom-15 left-0"
          />
          <img
            src="./Page-1/homeImg2.png"
            alt=""
            className="w-70 object-cover absolute top-10 left-1/2 -translate-x-1/2"
          />
          <img
            src="./Page-1/homeImg3.png"
            alt=""
            className="w-44 object-cover absolute bottom-0 right-0"
          />
        </div>

        {/* Headphone Img */}
        <div className="absolute top-0 left-0 h-[100%] w-[40%] flex items-center justify-start">
          <img
            src="./Page-1/headphone2.png"
            alt=""
            className="h-[95%] w-auto object-cover rotate-[35deg] absolute -top-5 -left-15"
          />
        </div>
      </div>
    </div>
  );
};

export default Page1;
