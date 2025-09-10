import Image from 'next/image';
import React from 'react';

const subHeadClassName = ' font-medium leading-[31px] z-10';
const descriptionClassName = ' text-white/70 z-10';

const PowerOfAI = () => {
  return (
    <div className=" px-3 py-[80px] flex flex-col justify-center items-center gap-[31px]">
      <h2 className=" text-[26px] font-medium leading-[38px] max-w-[90%] md:max-w-[70%] text-center">
        Harness the power of AI, making search engine optimization intuitive and
        effective for all skill levels.
      </h2>
      <div className=" w-full grid items-center gap-[10px]">
        <div className="  p-[30px] sm:items-center flex flex-col  border w-full border-white/15 rounded-[10px] space-y-[14px]">
          <Image
            src={`/power-of-ai/ring.avif`}
            className=" sm:max-w-[400px]"
            width={828}
            height={618}
            alt={`ring`}
          />
          <p className={subHeadClassName}>SEO goal setting</p>
          <p className={descriptionClassName}>
            Helps you set and achieve SEO goals with guided assistance.
          </p>
        </div>

        <div className=" min-h-[370px] xs:min-h-[400px] sm:min-h-[500px] justify-end relative p-[30px]  bg-gradient-to-b from-[#000] to-[#371866] flex flex-col overflow-hidden   w-full  rounded-[10px] space-y-[14px]">
          <Image
            unoptimized
            src={`/power-of-ai/product-1.avif`}
            className=" w-[827px] h-[483px] absolute top-[15%] left-[20px]    max-w-none  "
            width={3308}
            height={1932}
            alt={`product-1`}
          />

          <p className={subHeadClassName}>User-friendly dashboard</p>
          <p className={descriptionClassName}>
            Perform complex SEO audits and optimizations with a single click.
          </p>
          <div className=" absolute inset-0 bg-gradient-to-b from-[#fff]/0 to-[#361764]" />
        </div>
      </div>

      <div className=" w-full grid items-center gap-[10px]">
        <div className=" min-h-[370px] xs:min-h-[400px] sm:min-h-[500px] justify-end relative p-[30px]  bg-gradient-to-b from-[#000] to-[#371866] flex flex-col overflow-hidden   w-full  rounded-[10px] space-y-[14px]">
          <Image
            unoptimized
            src={`/power-of-ai/product-2.avif`}
            className=" w-[827px] h-[483px] absolute top-[15%] left-[20px]    max-w-none  "
            width={2532}
            height={1414}
            alt={`product-1`}
          />

          <p className={subHeadClassName}>Visual reports</p>
          <p className={descriptionClassName}>
            Visual insights into your site’s performance.
          </p>
          <div className=" absolute inset-0 bg-gradient-to-b from-[#fff]/0 to-[#361764]" />
        </div>

        <div className="  p-[30px] sm:items-center flex flex-col  border w-full border-white/15 rounded-[10px] space-y-[14px]">
          <Image
            src={`/power-of-ai/cone.avif`}
            className=" sm:max-w-[400px]"
            width={828}
            height={618}
            alt={`ring`}
          />
          <p className={subHeadClassName}>Smart Keyword Generator</p>
          <p className={descriptionClassName}>
            Automatic suggestions and the best keywords to target.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PowerOfAI;
