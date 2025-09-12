import React from "react";

const JoinWaitlist = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center pt-16 pb-20 border border-white/15 rounded-lg overflow-clip">
      {/* pattern */}

      <div className="absolute top-0 right-0 bottom-0 left-0 rounded-[10px] bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] opacity-30 -z-[2]  bg-[size:40px_60px]"></div>

      {/* gradient */}
      <div className="absolute h-[80%] -z-[1] -top-[100px] w-[50%] rounded-full bg-[#8C45FF]/49 blur-[100px]" />
      <p className="max-w-[80%] text-[28px] leading-[36px] font-medium md:text-[36px] md:leading-[43px]">
        AI-driven SEO for everyone.
      </p>

      <div className="mt-10 flex max-w-[272px] flex-col items-center gap-2">
        <input
          placeholder="Your email"
          className="h-[41px] w-full gap-[12px] rounded-lg border border-white/15 px-2 text-[16px]"
        />
        <button className="w h-[41px] w-full rounded-lg bg-white text-[15px] font-medium text-black">
          Join Waitlist
        </button>
      </div>
      <p className="mt-10 flex flex-wrap text-center justify-center max-w-[90%] items-center space-x-1 text-white/50">
        <span>No credit card required</span>
        <span>.</span>
        <span>7-days free trial</span>
      </p>
    </div>
  );
};

export default JoinWaitlist;
