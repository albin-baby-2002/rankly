"use client";
import Image from "next/image";
import { motion } from "motion/react";
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
    <div className="flex flex-col justify-center gap-[40px] bg-gradient-to-r from-[#190D2E] to-[#020103] px-[40px] py-[70px]">
      <p className="text-[26px] leading-[65px] font-medium sm:text-[36px] md:max-w-[50%] md:text-[50px] lg:max-w-[40%] xl:max-w-[35%]">
        Elevate your SEO efforts.
      </p>

      <div className="grid w-full space-y-10 md:grid-cols-2 md:gap-10 md:space-y-0 lg:grid-cols-3">
        {DATA.map((item, idx) => {

          return (
            <motion.div
              initial={{ opacity: 0, translateY: 30 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, delay: 0.1 * idx }}
              viewport={{ once: true }}
              className="space-y-[10px]"
              key={item.feature}
            >
              <div className="flex items-center gap-2">
                <Image
                  src={`/elevate-seo/evs-${idx + 1}.svg`}
                  width={16}
                  height={17}
                  alt={item.feature}
                />
                <p className="font-medium">{item.feature}</p>
              </div>
              <p className="leading-[26px] text-white/70">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ElevateSeo;
