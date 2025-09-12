import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        priority
        loading="eager"
        unoptimized
        src="/logo.svg"
        alt="Rankly Logo"
        width={38}
        height={38}
        className=" md:size-[41px]"
      />

      <p className="text-lg md:text-[20px] font-semibold">Rankly</p>
    </div>
  );
};

export default Logo;
