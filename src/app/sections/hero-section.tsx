import React from 'react';

const HeroSection = () => {
  return (
    <div className=" flex flex-col justify-center items-center pt-[60px]">
      <div className=" flex items-center gap-[7px] border border-white/15  text-purple-15 pl-[12px] pr-[14px] py-[8px] rounded-[50] w-max">
        <div className=" text-[10px] px-[8px] h-[24px] flex items-center rounded-[40] bg-purple-15 text-black font-bold">
          NEW
        </div>
        <p>Latest integration just arrived</p>
      </div>

      <div className="mt-3 text-center flex justify-center flex-col items-center space-y-[16px] ">
        <div className="flex flex-col font-medium text-[38px] xs:text-[42px] leading-[52px] sm:text-5xl gradient-1 bg-clip-text text-transparent">
          <span>Boost your </span>
          <span>rankings with AI</span>
        </div>
        <p className=" max-w-[90%] sm:text-[18px] leading-[28px] ">
          Elevate your site’s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>

        <button className=" border border-white/30 rounded-xl w-max p-2 text-center">
          <div className=" font-medium bg-white text-black  rounded-lg px-[15px] leading-[31px]  py-1.5 flex items-center justify-center">
            Start for free
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
