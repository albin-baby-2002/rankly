"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const TrustedBy = () => {
  return (
    <div className="bg-background flex flex-col items-center justify-center gap-10 px-3 py-7 md:px-6 md:py-[54px]">
      <motion.p
        initial={{ opacity: 0, translateY: 30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="text-center leading-[26px] text-white/70 md:text-[18px]"
      >
        Trusted by the world’s most innovative teams
      </motion.p>
      <div className="grid w-full max-w-[970px] grid-cols-2 gap-[10px] md:grid-cols-4">
        {new Array(8).fill(0).map((_, index) => (
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 0.1 * index }}
            viewport={{once:true}}
            key={index}
            className="flex items-center justify-center rounded-[10px] border border-white/15 px-3 py-[30px] sm:py-[40px]"
          >
            <Image
              src={`/trusted-by/tr-by-${index + 1}.svg`}
              width={155}
              height={34}
              alt={`Trusted by ${index + 1}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
