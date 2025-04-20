import React from "react";

const Page2 = () => {
  return (
    <div className="flex-none w-screen min-h-screen bg-zinc-200 text-xl">
      <div className="flex flex-col lg:flex-row items-center px-4 lg:px-10 justify-evenly w-full h-full py-10 lg:py-0 lg:h-screen">
        {/* Image Section */}
        <div className="w-full lg:w-[60vh] h-[40vh] lg:h-[60vh] lg:ml-[-20%] mb-8 lg:mb-0">
          <img
            className="w-full h-full object-cover"
            src="/Page-2/artist.png"
            alt="Artist"
          />
        </div>

        {/* Vertical Text Section */}
        <div className="text-4xl lg:text-7xl mb-8 lg:mb-0">
          <h1 className="lg:[writing-mode:vertical-rl] lg:rotate-180 lg:[text-orientation:mixed]">
            Marshall - Marshall
          </h1>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-[35%] text-base lg:text-lg h-auto lg:h-[90%] px-4 lg:px-0">
          <h1>Artist: Suki | Toronto</h1>

          <div className="relative">
            <h1 className="text-2xl lg:text-4xl mt-3">
              Amplifying future icons in music
              <span className="absolute top-0 lg:-top-2 right-0 lg:-right-2 text-lg lg:text-3xl">
                02
              </span>
            </h1>
          </div>

          <p className="text-sm lg:text-lg mt-3">
            Inspired by the jazz music she grew up hearing, Suki used her first
            guitar to play covers before experimenting with her own sound.
            Writing songs in her bedroom, and then broadcasting on Soundcloud,
            Suki started sharing her songs without revealing her face, letting
            the music speak for itself.
          </p>

          <div className="flex flex-col lg:flex-row gap-3 lg:items-start items-center justify-between mt-5 gap-4">
            <button className="px-3 py-1 mt-5 bg-black text-white rounded-full w-full lg:w-auto text-center">
              Read More
            </button>
            <div className="w-[45%]  lg:h-[50%] lg:w-[50%] h-[100px] ">
              <img
                className="w-full h-full object-cover"
                src="/Page-2/circle.png"
                alt="Circle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
