import { Check } from "lucide-react";
import React from "react";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center gap-[40px] py-[40px]">
      <div className="flex flex-col items-center space-y-2.5">
        <p className="text-[26px] leading-[65px] font-medium">Pricing</p>
        <p className="max-w-[80%] text-center text-[18px] leading-[31px]">
          Choose the right plan to meet your SEO needs and start optimizing
          today.
        </p>
      </div>

      <div className="w-full">
        <div className="mx-auto flex h-[500px] max-w-[250px] flex-col justify-between rounded-[10px] border border-white/15 p-4">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 border-b border-white/30 pb-6">
              <p className="text-[24px] leading-[31px] font-medium">Basic</p>
              <p className="text-white/70">$29/mo</p>
            </div>

            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-2">
                <Check size={15} />
                <p>Keyword optimization</p>
              </div>

              <div className="flex items-center gap-2">
                <Check size={15} />
                <p>Automated meta tags</p>
              </div>

              <div className="flex items-center gap-2">
                <Check size={15} />
                <p>SEO monitoring</p>
              </div>

              <div className="flex items-center gap-2">
                <Check size={15} />
                <p>Monthly reports</p>
              </div>
            </div>
          </div>

          <button className="w-full rounded-xl border border-white/15 text-center backdrop-blur-xl">
            <div className="inner-shadow bg-[#3D3D3D]/40 flex items-center justify-center rounded-lg py-1.5 font-[300] backdrop-blur-xl">
              Join waitlist
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
