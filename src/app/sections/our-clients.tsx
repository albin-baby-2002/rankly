import Image from "next/image";
import React from "react";

const OurClients = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[50px] text-center">
      <div className="space-y-[10px]">
        <p className="text-[26px] leading-[65px] font-medium">Our Clients</p>
        <p className="mx-auto max-w-[70%] text-[18px] leading-[31px]">
          Hear firsthand how our solutions have boosted online success for users
          like you.
        </p>
      </div>
      <div className="relative m-10">
        <Image
          className="size-[171px]"
          src="/client.avif"
          width={689}
          height={684}
          alt="Client Logo"
        />
        <div className="client-line-gradient absolute left-1/2 h-[1px] w-[160%] -translate-x-1/2 bg-white" />

        <div className="client-line-gradient absolute top-0 left-1/2 h-[1px] w-[160%] -translate-x-1/2 bg-white" />

        <div className="client-line-gradient-2 absolute top-1/2 left-0 h-[140%] w-[1px] -translate-y-1/2 bg-white" />

        <div className="client-line-gradient-2 absolute top-1/2 right-0 h-[140%] w-[1px] -translate-y-1/2 bg-white" />

        <div className="absolute top-8 left-1/2 h-[234px] w-[312px] -translate-x-1/2 rounded-full bg-[#8C45FF]/50 blur-[100px]" />
      </div>

      <div className="flex flex-col items-center gap-5">
        <p className="max-w-[90%] text-[20px] leading-[26px] font-medium">
          ”This product has completely transformed how I manage my projects and
          deadlines”
        </p>
        <div>
          <p>Talia Taylor</p>
          <p className="text-sm text-white/70">
            Digital Marketing Director @ Quantum
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
