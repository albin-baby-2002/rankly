import Image from "next/image";
import React from "react";

const subHeadClassName = " font-medium leading-[31px] z-10";
const descriptionClassName = " text-white/70 z-10 md:max-w-[300px]";

const PowerOfAI = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[31px] px-3 py-[80px] md:px-6">
      <h2 className="max-w-[90%] text-center text-[26px] leading-[38px] font-medium md:max-w-[75%] lg:max-w-[50%] md:pb-10 md:text-[32px]">
        Harness the power of AI, making search engine optimization intuitive and
        effective for all skill levels.
      </h2>
      <div className="grid w-full items-center gap-[10px] md:grid-cols-[254px_1fr] lg:grid-cols-[346px_1fr]">
        <div className="flex w-full flex-col space-y-[14px] rounded-[10px] border border-white/15 p-[30px] sm:items-center md:h-[400px] md:items-start md:justify-between md:p-[20px]">
          <Image
            src={`/power-of-ai/ring.avif`}
            className="sm:max-w-[400px] md:mt-10 md:max-w-full lg:mt-5"
            width={828}
            height={618}
            alt={`ring`}
          />
          <div className="space-y-[14px]">
            <p className={subHeadClassName}>SEO goal setting</p>
            <p className={descriptionClassName}>
              Helps you set and achieve SEO goals with guided assistance.
            </p>
          </div>
        </div>

        <div className="xs:min-h-[400px] relative flex min-h-[370px] w-full flex-col justify-end space-y-[14px] overflow-hidden rounded-[10px] bg-gradient-to-b from-[#000] to-[#371866] p-[30px] sm:min-h-[500px] md:min-h-[400px]">
          <Image
            unoptimized
            src={`/power-of-ai/product-1.avif`}
            className="absolute top-[15%] left-[20px] h-[483px] w-[827px] max-w-none"
            width={3308}
            height={1932}
            alt={`product-1`}
          />

          <p className={subHeadClassName}>User-friendly dashboard</p>
          <p className={descriptionClassName}>
            Perform complex SEO audits and optimizations with a single click.
          </p>
          <div className="absolute inset-0 bg-gradient-to-b from-[#fff]/0 to-[#361764]" />
        </div>
      </div>

      <div className="grid w-full items-center gap-[10px] md:grid-cols-[1fr_254px] lg:grid-cols-[1fr_346px]">
        <div className="xs:min-h-[400px] relative flex min-h-[370px] w-full flex-col justify-end space-y-[14px] overflow-hidden rounded-[10px] bg-gradient-to-b from-[#000] to-[#371866] p-[30px] sm:min-h-[500px] md:min-h-[400px]">
          <Image
            unoptimized
            src={`/power-of-ai/product-2.avif`}
            className="absolute top-[15%] left-[20px] h-[483px] w-[827px] max-w-none"
            width={2532}
            height={1414}
            alt={`product-1`}
          />

          <p className={subHeadClassName}>Visual reports</p>
          <p className={descriptionClassName}>
            Visual insights into your site’s performance.
          </p>
          <div className="absolute inset-0 bg-gradient-to-b from-[#fff]/0 to-[#361764]" />
        </div>

        <div className="flex w-full flex-col space-y-[14px] rounded-[10px] border border-white/15 p-[30px] sm:items-center md:h-[400px] md:items-start md:justify-between md:p-[20px]">
          <Image
            src={`/power-of-ai/cone.avif`}
            className="mt-5 lg:mt-0 lg:max-w-[250px] lg:mx-auto sm:max-w-[400px] md:max-w-full"
            width={828}
            height={618}
            alt={`ring`}
          />

          <div className="space-y-[14px]">
            <p className={subHeadClassName}>Smart Keyword Generator</p>
            <p className={descriptionClassName}>
              Automatic suggestions and the best keywords to target.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerOfAI;
