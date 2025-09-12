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
      />

      <p className="text-lg font-semibold">Rankly</p>
    </div>
  );
};

export default Logo;
