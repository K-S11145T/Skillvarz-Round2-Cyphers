import React from "react";

const Circle = () => {
  return (
    <div className="circle z-[999] absolute bottom-10 right-30 w-64 h-64 flex items-center justify-center rounded-full text-xs leading-none text-zinc-200 font-[Aux-mono] font-light border-1 border-zinc-200">
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
        <h4 className="">2021</h4>
        <p className="text-2xl leading-none font-light font-[Saans]">+</p>
      </div>
      <div className="absolute top-1/2 -left-2 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] flex flex-col items-center justify-center">
        <h4 className="">2021</h4>
        <p className="text-2xl leading-none font-light font-[Saans]">+</p>
      </div>
    </div>
  );
};

export default Circle;
