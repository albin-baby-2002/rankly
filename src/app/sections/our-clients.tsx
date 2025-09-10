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

        <div className="client-line-gradient absolute left-1/2 top-0 h-[1px] w-[160%] -translate-x-1/2 bg-white" />

        <div className="client-line-gradient-2 absolute left-0 top-1/2 w-[1px] h-[140%] -translate-y-1/2 bg-white" />

        <div className="client-line-gradient-2 absolute right-0 top-1/2 w-[1px] h-[140%] -translate-y-1/2 bg-white" />
      </div>
    </div>
  );
};

export default OurClients;
