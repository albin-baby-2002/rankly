import { Menu } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className=" flex items-center justify-between p-[13px] border-b border-white/15">
      <div className=" flex items-center gap-2">
        <Image src="/logo.svg" alt="Rankly Logo" width={38} height={38} />
        <p className=" font-semibold text-lg">Rankly</p>
      </div>
      <button className=" p-1 rounded-sm cursor-pointer text-purple-5 bg-[#262626]">
        <Menu size={22} />
      </button>
    </div>
  );
};

export default Header;
