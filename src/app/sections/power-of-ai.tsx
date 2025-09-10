import Image from 'next/image';
import React from 'react';

const PowerOfAI = () => {
  return (
    <div className=" px-3 py-[80px] flex flex-col justify-center items-center gap-[31px]">
      <h2 className=" text-[26px] font-medium leading-[38px] max-w-[90%] md:max-w-[70%] text-center">
        Harness the power of AI, making search engine optimization intuitive and
        effective for all skill levels.
      </h2>
      <div className=" w-full grid items-center gap-[10px]">
        <div className=" p-[30px] sm:items-center flex flex-col  border w-full border-white/15 rounded-[10px] space-y-[14px]">
          <Image
            src={`/ring.avif`}
            className=" sm:max-w-[400px]"
            width={828}
            height={618}
            alt={`ring`}
          />
          <p className=" font-medium leading-[31px]">SEO goal setting</p>
          <p className=" text-white/70">
            {' '}
            Helps you set and achieve SEO goals with guided assistance.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PowerOfAI;
