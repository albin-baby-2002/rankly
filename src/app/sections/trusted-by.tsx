import Image from 'next/image';
import React from 'react';

const TrustedBy = () => {
  return (
    <div className="md:px-6 bg-background px-3 py-7 md:py-[54px] flex items-center flex-col justify-center gap-10">
      <p className=' text-center leading-[26px] md:text-[18px] text-white/70'>Trusted by the world’s most innovative teams</p>
      <div className=' grid grid-cols-2 w-full max-w-[970px]   md:grid-cols-4 gap-[10px]'>
        {new Array(8).fill(0).map((_, index) => (
          <div key={index} className="flex justify-center border border-white/15 rounded-[10px] py-[30px] px-3 sm:py-[40px] items-center">
            <Image
              src={`/trusted-by/tr-by-${index + 1}.svg`}
              width={155}
              height={34}
              alt={`Trusted by ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
