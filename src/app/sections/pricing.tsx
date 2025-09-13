import { Check } from "lucide-react";
import React from "react";

const Pricing = () => {
  return (
    <div className="relative flex flex-col items-center gap-[40px] py-[40px]">
      <div className="pricing-gradient absolute top-1/2 left-1/2  h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 -z-[1]" />
      <div className="flex flex-col items-center md:space-y-7 space-y-2.5">
        <p className="text-[26px] sm:text-[36px] md:text-[50px] leading-[65px] font-medium">Pricing</p>
        <p className="max-w-[80%] text-center text-[18px] md:text-[20px] md:max-w-[60%] sm:max-w-[70%] leading-[31px]">
          Choose the right plan to meet your SEO needs and start optimizing
          today.
        </p>
      </div>

      <div className="w-full md:gap-2 md:max-w-[941px] md:px-4 space-y-[10px] md:space-y-0 md:grid grid-cols-3  ">
        <div className="mx-auto flex h-[500px] md:h-[530px] w-[80%] md:w-full max-w-[400px] flex-col justify-between rounded-[10px] border border-white/15 p-4">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 border-b border-white/30 pb-6">
              <p className="text-[24px] leading-[31px] font-medium">Basic</p>
              <p className="text-white/70">$29/mo</p>
            </div>

            <div className="space-y-3 pt-8">
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
            <div className="inner-shadow flex items-center justify-center rounded-lg bg-[#3D3D3D]/40 py-1.5 font-[300] backdrop-blur-xl">
              Join waitlist
            </div>
          </button>
        </div>

        <div className="pro-pricing-shadow md:w-full md:h-[530px] relative mx-auto flex h-[500px] w-[80%] max-w-[400px] flex-col justify-between rounded-[10px] border-white/15 bg-gradient-to-b from-[#010002] to-[#361764] p-4">
          <div className="absolute top-0 rounded-[10px] right-0 bottom-0 left-0 bg-[linear-gradient(to_right,#606060_1px,transparent_1px),linear-gradient(to_bottom,#606060_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_80%,transparent_100%)] opacity-70 bg-[size:45px_60px]"></div>

          <div className="flex flex-col">
            <div className="flex flex-col gap-2 border-b border-white/30 pb-6">
              <p className="text-[24px] leading-[31px] font-medium">Pro</p>
              <p className="text-white/70">$79/mo</p>
            </div>

            <div className="space-y-3 pt-8">
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

              <div className="flex items-center gap-2">
                <Check size={15} />
                <p>Content suggestions</p>
              </div>

              <div className="flex items-center gap-2">
                <Check size={15} />
                <p>Link optimization</p>
              </div>
            </div>
          </div>

          <button className="w-full rounded-xl border border-white/15 text-center backdrop-blur-xl">
            <div className="inner-shadow flex items-center justify-center rounded-lg bg-[#8C45FF]/40 py-1.5 font-[300] backdrop-blur-xl">
              Join waitlist
            </div>
          </button>
        </div>

        <div className="mx-auto md:w-full md:h-[530px] flex h-[500px] w-[80%] max-w-[400px] flex-col justify-between rounded-[10px] border border-white/15 p-4">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 border-b border-white/30 pb-6">
              <p className="text-[24px] leading-[31px] font-medium">Business</p>
              <p className="text-white/70">$129/mo</p>
            </div>

            <div className="space-y-3 pt-8">
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

              <div className="flex items-center gap-2">
                <Check size={15} />
                <p>Content suggestions</p>
              </div>

              <div className="flex items-center gap-2">
                <Check size={15} />
                <p>Link optimization</p>
              </div>

              <div className="flex items-center gap-2">
                <Check size={15} />
                <p>Multi-user access</p>
              </div>

              <div className="flex items-center gap-2">
                <Check size={15} />
                <p>API integration</p>
              </div>
            </div>
          </div>

          <button className="w-full rounded-xl border border-white/15 text-center backdrop-blur-xl">
            <div className="inner-shadow flex items-center justify-center rounded-lg bg-[#3D3D3D]/40 py-1.5 font-[300] backdrop-blur-xl">
              Join waitlist
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
