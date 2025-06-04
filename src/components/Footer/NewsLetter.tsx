import React from "react";

const Newsletter: React.FC = () => (
  <div>
    <div className="relative w-full max-w-xs mx-auto md:mx-0">
      <a
        href="#"
        className="relative peer text-[#232323] text-2xl bg-transparent w-full h-[68px] inline-block mb-4 focus:outline-none"
      >
        Receba Novidades
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#232323] text-2xl select-none">
          🡥
        </span>
      </a>
      <span className="absolute left-0 bottom-5 top-14 h-[2px] w-full bg-[#232323] transition-all duration-300 peer-focus:w-full"></span>
    </div>
  </div>
);

export default Newsletter;
