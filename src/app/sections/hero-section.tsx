import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-y-clip px-2 pt-[60px] md:pt-[90px]">
      <div className="absolute bottom-10 -z-[4] hidden aspect-square w-[556px] rounded-full bg-[#602A9A] blur-[400px] md:block" />

      <div className="absolute bottom-[120px] -z-[1] hidden aspect-square w-[384px] rounded-full bg-[#622A94] blur-[105px] md:block" />

      <div className="text-purple-15 flex w-max items-center gap-[7px] rounded-[50] border border-white/15 py-[8px] pr-[14px] pl-[12px]">
        <div className="bg-purple-15 flex h-[24px] items-center rounded-[40] px-[8px] text-[10px] font-bold text-black">
          NEW
        </div>
        <p>Latest integration just arrived</p>
      </div>

      <div className="mt-3 flex flex-col items-center justify-center space-y-[16px] text-center">
        <div className="xs:text-[42px] gradient-1 flex flex-col bg-clip-text text-[38px] leading-[52px] font-medium text-transparent sm:text-[48px] md:text-[75px] md:leading-[84px]">
          <span>Boost your </span>
          <span>rankings with AI.</span>
        </div>
        <p className="max-w-[90%] leading-[28px] sm:text-[18px] md:max-w-[65%]">
          Elevate your site’s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>

        <button className="w-max rounded-xl border border-white/30 p-2 text-center">
          <div className="flex items-center justify-center rounded-lg bg-white px-[15px] py-1.5 leading-[31px] font-medium text-black">
            Start for free
          </div>
        </button>
      </div>

      <div className="relative mt-[50px] overflow-y-visible pt-2 pb-[50px] md:max-w-[90%] md:pb-0">
        <div className="hero-img-box-shadow contained from-hero-stop1 via-hero-stop2/0 to-hero-stop3 mx-4 overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b via-48% p-1 md:mx-6 md:max-h-[300px] lg:max-h-[600px]">
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
        <div className="absolute inset-0 top-0 left-0 z-10 bg-gradient-to-b from-[#000000]/0 to-[#050208] md:top-20" />

        <div className="bg-red-00 xs:max-w-[100%] absolute bottom-[30%] lg:bottom-[10%] md:bottom-[20%] left-1/2 -z-[1] h-[120%] w-full -translate-x-1/2 sm:max-w-[80%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[65%]">
          <div className="relative h-full w-full border-white/10">
            <div className="hero-ellipse w-[70%]">
              <div className="relative h-full w-full">
                <Image
                  priority
                  loading="eager"
                  unoptimized
                  src="/ellipse.svg"
                  alt="hero ellipse"
                  width={11}
                  height={11}
                  className="absolute top-0 left-1/2 -translate-y-1/2"
                />
              </div>
            </div>
            <div className="hero-ellipse w-[100%] rotate-[80deg]">
              <div className="relative h-full w-full">
                <Image
                  priority
                  loading="eager"
                  unoptimized
                  src="/ellipse.svg"
                  alt="hero ellipse"
                  width={11}
                  height={11}
                  className="absolute top-0 left-1/2 -translate-y-1/2"
                />
              </div>
            </div>
            <div className="hero-ellipse w-[130%]">
              <div className="relative h-full w-full rotate-[240deg]">
                <Image
                  priority
                  loading="eager"
                  unoptimized
                  src="/ellipse.svg"
                  alt="hero ellipse"
                  width={11}
                  height={11}
                  className="absolute top-0 left-1/2 -translate-y-1/2"
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
