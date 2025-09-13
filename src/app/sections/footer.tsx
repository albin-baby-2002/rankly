import React from "react";
import Logo from "../components/logo";
import Image from "next/image";

const DATA = [
  {
    title: "Product",
    links: ["Features", "Integration", "Updates", "FAQ", "Pricing"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Manifesto", "Press", "Contract"],
  },
  {
    title: "Resources",
    links: ["Examples", "Community", "Guides", "Docs", "Press"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security"],
  },
];

const Footer = () => {
  return (
    <footer className= " contained xs:p-10 p-5 space-y-10 md:flex md:justify-between ">
      <div className="flex items-center md:flex-col justify-between">
        <Logo />
        <div className="flex items-center gap-3">
          <Image
            width={24}
            height={24}
            alt="insta.svg"
            src={"/socials/insta.svg"}
          />

          <Image width={24} height={24} alt="x.svg" src={"/socials/x.svg"} />

          <Image
            width={24}
            height={24}
            alt="youtube.svg"
            src={"/socials/youtube.svg"}
          />
        </div>
      </div>

      <div className=" grid grid-cols-2 md:grid-cols-4 md:gap-10 space-y-10 pl-2">
        {DATA.map((item) => (
          <div key={item.title}>
            <h4>{item.title}</h4>
            <ul className=" space-y-3 pt-3 text-[13px] text-white/50">
              {item.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
