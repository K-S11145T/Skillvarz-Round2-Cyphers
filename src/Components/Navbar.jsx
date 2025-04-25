import React from "react";

const Navbar = () => {
  return (
    <div className="fixed z-[99] top-6 left-0 w-3/4 py-3 pl-8 pointer-events-none">
      <div className="scrollbar w-full h-[.2vh] mb-2 bg-zinc-400"></div>
      <div className="flex gap-20 text-sm items-center justify-between mr-10 font-[Aux-Mono] text-zinc-500">
        <h3 className="flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-zinc-400 inline-block"></span>
          Buy Marshall
        </h3>
        <h3>Home</h3>
        <h3>Artist</h3>
        <h3>Products</h3>
        <h3>Showcase</h3>
      </div>
    </div>
  );
};

export default Navbar;
