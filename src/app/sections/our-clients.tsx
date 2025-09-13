import Image from "next/image";
import React from "react";

const OurClients = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-clip py-[50px] text-center md:pb-[80px] lg:pt-[70px] lg:pb-[100px]">
      <div className="space-y-[10px]">
        <p className="text-[26px] leading-[65px] font-medium sm:text-[36px] md:text-[50px]">
          Our Clients
        </p>
        <p className="mx-auto max-w-[70%] text-[18px] leading-[31px] sm:max-w-[65%] md:max-w-[60%] md:text-[20px]">
          Hear firsthand how our solutions have boosted online success for users
          like you.
        </p>
      </div>
      <div className="m-10 flex flex-col items-center gap-10 md:relative md:mx-auto md:mt-25 md:flex-row md:justify-center md:gap-[20px] lg:gap-10">
        <div className="absolute top-5 left-1/2 hidden h-[234px] w-[312px] -translate-x-1/2 rounded-full bg-[#8C45FF]/50 blur-[110px] md:block lg:left-0 lg:-translate-x-5" />
        <div className="relative">
          <Image
            className="size-[171px] md:size-[180px] lg:size-[234px]"
            src="/client.avif"
            width={689}
            height={684}
            alt="Client Logo"
          />
          <div className="client-line-gradient absolute left-1/2 h-[1px] w-[160%] -translate-x-1/2 md:-left-[120px] md:w-[800px] md:translate-x-0 lg:w-[900px] xl:w-[1000px]" />

          <div className="client-line-gradient absolute top-0 left-1/2 h-[1px] w-[160%] -translate-x-1/2 md:-left-[120px] md:w-[800px] md:translate-x-0 lg:w-[900px] xl:w-[1000px]" />

          <div className="client-line-gradient-2 absolute top-1/2 left-0 h-[140%] w-[1px] -translate-y-1/2 md:h-[170%]" />

          <div className="client-line-gradient-2 absolute top-1/2 right-0 h-[140%] w-[1px] -translate-y-1/2 md:h-[170%]" />

          <div className="absolute top-8 left-1/2 h-[234px] w-[312px] -translate-x-1/2 rounded-full bg-[#8C45FF]/50 blur-[100px] md:hidden" />
        </div>

        <div className="flex flex-col items-center gap-5 md:max-w-[360px] md:items-start md:text-left">
          <p className="max-w-[90%] text-[20px] leading-[26px] font-medium sm:max-w-[70%] md:max-w-full md:text-[23px]">
            ”This product has completely transformed how I manage my projects
            and deadlines”
          </p>
          <div>
            <p>Talia Taylor</p>
            <p className="text-sm text-white/70">
              Digital Marketing Director @ Quantum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
