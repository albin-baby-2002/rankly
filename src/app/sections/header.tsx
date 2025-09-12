"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import Link from "next/link";
import Logo from "../components/logo";

//----------------------------------------------------------------------

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#" },
  { label: "Company", href: "/#" },
  { label: "Feedback", href: "/#" },
  { label: "Blog", href: "/#" },
] as const;

//----------------------------------------------------------------------

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  // Close mobile nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showMobileNav && !target.closest(".mobile-nav-container")) {
        setShowMobileNav(false);
      }
    };

    if (showMobileNav) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMobileNav]);

  //----------------------------------------

  return (
    <header className="bg-background contained relative flex items-center justify-between border-b border-white/15 p-[13px] lg:border-b-0">
      <Logo />

      <button
        onClick={() => setShowMobileNav((prev) => !prev)}
        className="text-purple-5 cursor-pointer rounded-sm bg-[#262626] p-1"
      >
        {!showMobileNav ? <Menu size={22} /> : <X size={22} />}
      </button>

      <MobileNav
        isOpen={showMobileNav}
        onClose={() => setShowMobileNav(false)}
      />
    </header>
  );
};

export default Header;

//----------------------------------------------------------------------
// CHILD COMPONENTS
//----------------------------------------------------------------------

const MobileNav = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const pathname = usePathname();

  // Handle mobile nav item click

  return (
    <>
      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "mobile-nav-container bg-background/30 fixed right-0 left-0 z-50 min-h-screen border-b border-white/30 backdrop-blur-xl transition-all duration-500 ease-out lg:hidden",
          isOpen
            ? "top-[72px] translate-y-0 opacity-100 md:top-[80px]"
            : "pointer-events-none top-[72px] -translate-y-full opacity-0 md:top-[80px]",
        )}
      >
        <nav className="ml-auto px-4 py-6">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-lg px-4 py-3 text-base transition-colors duration-200",
                    "hover:bg-white/10 active:bg-white/15",
                    isActive
                      ? "bg-white/10 font-semibold text-white"
                      : "text-gray-300 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile Contact Button */}
            <div className="border-white/30 pt-3">
              <button
                onClick={onClose}
                className="bg-background/30 w-full rounded-xl border border-white/30 p-2 text-center backdrop-blur-xl"
              >
                <div className="inner-shadow bg-purple-10/40 flex items-center justify-center rounded-lg py-1.5 font-normal backdrop-blur-xl">
                  Join waitlist
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
