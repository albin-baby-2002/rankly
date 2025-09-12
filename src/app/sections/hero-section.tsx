import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <div className=" px-3 flex flex-col justify-center items-center pt-[60px]">
      <div className=" flex items-center gap-[7px] border border-white/15  text-purple-15 pl-[12px] pr-[14px] py-[8px] rounded-[50] w-max">
        <div className=" text-[10px] px-[8px] h-[24px] flex items-center rounded-[40] bg-purple-15 text-black font-bold">
          NEW
        </div>
        <p>Latest integration just arrived</p>
      </div>

      <div className="mt-3 text-center flex justify-center flex-col items-center space-y-[16px] ">
        <div className="flex flex-col font-medium text-[38px] xs:text-[42px] leading-[52px] sm:text-5xl gradient-1 bg-clip-text text-transparent">
          <span>Boost your </span>
          <span>rankings with AI.</span>
        </div>
        <p className=" max-w-[90%] sm:text-[18px]  leading-[28px] ">
          Elevate your site’s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>

        <button className=" border border-white/30 rounded-xl w-max p-2 text-center">
          <div className=" font-medium bg-white text-black  rounded-lg px-[15px] leading-[31px]  py-1.5 flex items-center justify-center">
            Start for free
          </div>
        </button>
      </div>

      <div className=" relative mt-[50px] pt-2 pb-[50px]">
        <div className=" mx-4 border border-white/10 rounded-[30px] hero-img-box-shadow md:mx-6 p-1 contained bg-gradient-to-b  from-hero-stop1 via-hero-stop2/0 via-48% to-hero-stop3 ">
          <Image
            priority
            loading="eager"
            unoptimized
            src="/hero.avif"
            alt="Rankly Hero"
            width={1417}
            height={1024}
          />
        </div>
        <div className="z-10  bg-gradient-to-b from-[#000000]/0 to-[#050208] absolute top-0 left-0 inset-0" />

        <div className=" absolute w-full h-[120%] bg-red-00     bottom-[30%] -z-[1]">
          <div className=" relative w-full h-full border-white/10 ">
            <div className="w-[70%] hero-ellipse ">
              <div className=" relative w-full h-full">
                <Image
                  priority
                  loading="eager"
                  unoptimized
                  src="/ellipse.svg"
                  alt="hero ellipse"
                  width={11}
                  height={11}
                  className=" absolute top-0 left-1/2 -translate-y-1/2"
                />
              </div>
            </div>
            <div className="w-[100%] hero-ellipse  rotate-[80deg]">
              <div className=" relative w-full h-full">
                <Image
                  priority
                  loading="eager"
                  unoptimized
                  src="/ellipse.svg"
                  alt="hero ellipse"
                  width={11}
                  height={11}
                  className=" absolute top-0 left-1/2 -translate-y-1/2"
                />
              </div>
            </div>
            <div className="w-[130%] hero-ellipse">
              <div className=" relative w-full h-full rotate-[240deg]">
                <Image
                  priority
                  loading="eager"
                  unoptimized
                  src="/ellipse.svg"
                  alt="hero ellipse"
                  width={11}
                  height={11}
                  className=" absolute top-0 left-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
