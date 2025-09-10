import Image from "next/image";
import React from "react";

const DATA = [
  {
    feature: "User-friendly dashboard",
    description:
      "Perform complex SEO audits and optimizations with a single click.",
  },
  {
    feature: "Content evaluation",
    description: "Simple corrections for immediate improvements.",
  },
  {
    feature: "Link Optimization Wizard",
    description:
      "Guides you through the process of creating and managing links.",
  },
  {
    feature: "Visual reports",
    description: "Visual insights into your site’s performance.",
  },
  {
    feature: "SEO goal setting",
    description: "Helps you set and achieve SEO goals with guided assistance.",
  },
  {
    feature: "One-click optimization",
    description:
      "Perform complex SEO audits and optimizations with a single click.",
  },
  {
    feature: "Smart Keyword Generator",
    description: "Automatic suggestions and the best keywords to target.",
  },
  {
    feature: "Automated alerts",
    description:
      "Automatic notifications about your SEO health, including quick fixes.",
  },
  {
    feature: "Competitor reports",
    description:
      "Provides insights into competitors’ keyword strategies and ranking.",
  },
];

const ElevateSeo = () => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-[#190D2E] to-[#020103] justify-center gap-[40px] px-[40px] py-[70px]">
      <p className="text-[26px] font-medium">Elevate your SEO efforts.</p>

      <div className="w-full space-y-10">
        {DATA.map((item, idx) => {
          return (
            <div className="space-y-[10px]" key={item.feature}>
              <div className=" flex items-center gap-2">
                <Image
                  src={`/elevate-seo/evs-${idx + 1}.svg`}
                  width={16}
                  height={17}
                  alt={item.feature}
                />
                <p className=" font-medium">{item.feature}</p>
              </div>
              <p className=" text-white/70 leading-[26px]">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ElevateSeo;
