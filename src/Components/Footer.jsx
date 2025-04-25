import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import VerticalMarquee from "../Animations/VerticalMarquee";

const Footer = () => {
  return (
    <div className=" h-screen">
      <div className="flex-none relative bottom-0 left-0 w-screen h-screen bg-white text-black z-50">
        <div className="w-full p-5 flex items-center justify-center text-9xl h-[100%] font-rewritten">
          <div className="border-l-1 flex border-zinc-700  w-[98%] h-[90%]">
            <div data-scroll-container  className="flex items-center justify-end relative w-[50%] h-full">
              <VerticalMarquee
                scrollTargetSelector="[data-scroll-container]"
                speed={10}
                images={[
                  "/Footer/BlueHoodie.jpg",
                  "https://media.istockphoto.com/id/157289960/photo/dancing-disco-chick.jpg?s=612x612&w=0&k=20&c=mDlmE30OFi09devr-lEeE7EdlRE9JQKC_ofFzhxMUA8=",
                ]}
                className="absolute left-[15%] -rotate-5 h-[150%]"
              />

              <div className="w-[50%] relative rotate-5  h-[30%] ">
                <img
                  className="absolute -top-20 right-0 w-full"
                  src="/Footer/star.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex w-[60%] flex-col mt-6 ">
              <h1 className="font-[Montserrat-Bold] relative tracking-tight text-5xl">
                GET FRONT ROW ACCESS
                <img
                  className="absolute -top-20 right-0 w-[20%]"
                  src="/Footer/star.png"
                  alt=""
                />
              </h1>
              <h1 className="text-xl text-zinc-800 mt-5">
                Sign up for our newsletter and get the latest updates, news and
                product offers via email.
              </h1>

              <div className="border-1 text-xl flex p-2 mt-5 rounded-md outline-none">
                <input
                  placeholder="Email"
                  className="flex w-[90%] items-center"
                  type="email"
                />
                <div className="w-[10%] cursor-pointer  flex items-center justify-center h-full">
                  <i class="ri-arrow-right-up-line"></i>
                </div>
              </div>

              <div className="flex mt-5 h-[50%] justify-between text-sm w-full  gap-5">
                <div className="flex flex-col">
                  <h1>MY ACCOUNTS</h1>

                  <h1 className="mt-3">SUPPORT</h1>
                  <h1>SIGN IN</h1>
                </div>
                <div className="flex flex-col">
                  <h1>COMPANY</h1>

                  <h1 className="mt-3">ABOUT MARSHALL</h1>
                  <h1>MARSHALL GROUP</h1>
                  <h1>CAREERS</h1>
                  <h1>FOLLOW US</h1>
                </div>
                <div className="flex flex-col">
                  <h1>SHOP</h1>

                  <h1 className="mt-3">AMPS</h1>
                  <h1>HEADPHONES</h1>
                  <h1>OUTDOOR HEADPHONE</h1>
                  <h1>WIRELESS BUDS</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[25%] absolute w-[70%] flex flex-col bottom-0 right-0">
          <div className="w-full h-fit flex justify-evenly">
            <h1 className="w-[10%]">All rights Reserved © 2025</h1>
            <div className="w-[10%] flex flex-col">
              <h1>COMPANY</h1>
              <h1>CAREERS</h1>
            </div>
            <div className="w-[10%] flex flex-col">
              <h1>CONTACT</h1>
              <h1>+(01) 50028</h1>
            </div>

            <h1 className="w-[10%]">60-Years of loud</h1>
          </div>
          <h1 className="text-8xl text-center w-full font-[Montserrat-Bold]">
            Marshall -{" "}
            <span className="font-[Silk-Serif-Light-Italic] font-bold">
              Audio
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
