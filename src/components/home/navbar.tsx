"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = ["About", "Services", "Team", "Contact"] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50
        px-[5%] py-5
        flex justify-between items-center
        transition-all duration-300
        ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md border-b border-slate-200"
            : "bg-transparent border-b border-slate-200"
        }`}
    >
      {/* Logo */}
      <div className="text-3xl font-extrabold bg-gradient-to-r from-[#5D2F77] to-[#3E1E68] bg-clip-text text-transparent">
        EMPLE
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center gap-6">
        {/* Navigation links */}
        <ul className="flex gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 font-medium
                           hover:text-gray-900
                           transition-colors
                           relative group"
              >
                {item}
                <span
                  className="absolute -bottom-1 left-0
                             w-0 h-0.5
                             bg-gradient-to-r from-indigo-500 to-pink-500
                             group-hover:w-full
                             transition-all duration-300"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Auth buttons */}
        <div className="flex items-center gap-3">
          
          {/* Sign Up */}
          <button
            className="px-5 py-2 text-base font-semibold rounded-lg
                       bg-gradient-to-r from-purple-600 to-indigo-600
                       text-white shadow-md
                       hover:shadow-lg hover:-translate-y-0.5
                       transition-all duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

