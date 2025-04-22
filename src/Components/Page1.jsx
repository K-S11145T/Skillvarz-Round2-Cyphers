import React from "react";
import Navbar from "./Navbar";

const Page1 = () => {
  return (
    <div className="flex-none w-screen h-screen relative bg-zinc-100 text-black">
      <Navbar />
      <div className="relative h-full w-full flex items-end justify-start px-8 pb-5">
        {/* Top-right logo */}
        <img
          src="./Page-1/Marshall-Logo.png"
          alt=""
          className="marshall-logo h-20 object-cover absolute right-10 top-3"
        />

        {/* Text bottom */}
        <div className="relative">
          <h4 className="w-[30%] underline font-[Saans] mb-5 text-sm">
            Signature Marshall sound built for music lovers who crave rich,
            immersive audio.
          </h4>
          <h1 className="text-[6vw] leading-[5vw] tracking-tighter font-[Montserrat-Bold]">
            ROCK N ROLL
          </h1>
          <h1 className="text-[6vw] leading-[5vw] tracking-tighter font-[Montserrat-Bold]">
            A STATE OF MIND.
          </h1>

          <h4 className="absolute top-1/2 -right-0 translate-x-1/2 translate-y-1/2 text-4xl font-[Silk-Serif-Light-Italic]">
            01
          </h4>
        </div>

        {/* All Floating Imgs */}
        <div className="absolute top-1/2 -translate-y-1/2 h-3/4 w-full flex gap-3 font-[Saans] text-sm">
          <div className="flex gap-3">
            <div className="flex flex-col items-end">
              <img
                src="./Page-1/designing.jpg"
                alt=""
                className="w-[18vw] h-[45vh] object-cover object-right saturate-0"
              />
              <h3>designing</h3>
            </div>
            <div className="flex flex-col items-end">
              <img
                src="./Page-1/powerful.png"
                alt=""
                className="w-32 h-40 object-cover object-right"
              />
              <h3>powerful</h3>
            </div>
          </div>
          <div className="flex gap-3 mt-40">
            <div className="flex flex-col items-end">
              <img
                src="./Page-1/homeImg2.jpg"
                alt=""
                className="w-32 h-40 object-cover"
              />
              <h3>Sound</h3>
            </div>
            <div className="flex flex-col items-end">
              <img
                src="./Page-1/BlackNWhite.jpg"
                alt=""
                className="w-[32vw] h-[40vh] object-cover object-top"
              />
              <h3>Experiences</h3>
            </div>
            <div className="flex flex-col items-end">
              <img
                src="./Page-1/homeImg1.png"
                alt=""
                className="w-32 h-40 object-cover"
              />
              <h3>Loyalty</h3>
            </div>
            <div className="flex flex-col items-end">
              <img
                src="./Page-1/legacy.jpg"
                alt=""
                className="w-32 h-40 object-cover "
              />
              <h3>Legacy</h3>
            </div>
          </div>
        </div>

        <div className="circle absolute bottom-10 right-30 w-64 h-64 flex items-center justify-center rounded-full text-xs leading-none text-zinc-700 font-[Aux-mono] font-light border-1">
          <p className="text-3xl font-light font-[Saans]">+</p>

          <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0 flex flex-col items-center justify-center">
            <h4 className="">2021</h4>
            <p className="text-2xl leading-none font-light font-[Saans]">+</p>
          </div>
          <div className="absolute top-1/2 -right-2 translate-x-1/2 -translate-y-1/2 rotate-90 flex flex-col items-center justify-center">
            <h4 className="">2021</h4>
            <p className="text-2xl leading-none font-light font-[Saans]">+</p>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-180 flex flex-col items-center justify-center">
            <h4 className="">
              2021
            </h4>
            <p className="text-2xl leading-none font-light font-[Saans]">+</p>
          </div>
          <div className="absolute top-1/2 -left-2 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] flex flex-col items-center justify-center">
            <h4 className="">
              2021
            </h4>
            <p className="text-2xl leading-none font-light font-[Saans]">+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
