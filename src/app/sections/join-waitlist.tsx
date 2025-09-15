import React from "react";

const JoinWaitlist = () => {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-clip rounded-lg border border-white/15 pt-16 pb-20 text-center md:mx-4 lg:pt-18 xl:mt-10 xl:border-0">
      {/* pattern */}

      <div className="absolute top-0 right-0 bottom-0 left-0 -z-[2] rounded-[10px] bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-[size:40px_60px] opacity-30"></div>

      {/* gradient */}
      <div className="absolute -top-[100px] -z-[1] h-[80%] w-[50%] rounded-full bg-[#8C45FF]/49 blur-[100px]" />
      <p className="max-w-[80%] text-[28px] leading-[36px] font-medium md:max-w-1/2 md:text-[56px] md:leading-[65px] lg:max-w-[40%]">
        AI-driven SEO for everyone.
      </p>

      <div className="mt-10 flex max-w-[272px] flex-col items-center gap-2 md:max-w-none md:flex-row">
        <input
          placeholder="Your email"
          className="h-[41px] w-full gap-[12px] rounded-lg border border-white/15 px-2 text-[16px] md:w-[250px]"
        />
        <button className="w h-[41px] w-full rounded-lg bg-white text-[15px] font-medium text-black md:w-auto md:px-4">
          Join Waitlist
        </button>
      </div>
      <p className="mt-10 flex max-w-[90%] flex-wrap items-center justify-center space-x-1 text-center text-white/50">
        <span>No credit card required</span>
        <span>.</span>
        <span>7-days free trial</span>
      </p>
    </div>
  );
};

export default JoinWaitlist;
