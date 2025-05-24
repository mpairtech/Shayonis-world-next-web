"use client";

import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";



const Navbar = () => {
  const [active, setActive] = useState("home");
  const isClickScrolling = useRef(false);
  const [mobileOpen, setMobileOpen] = useState(false);


  const navItems = [
    { label: "Home", id: "home" },
    { label: "Clothing", id: "clothingbrand" },
    { label: "Construction", id: "construction" },
    { label: "Apparel", id: "apparel" },
    { label: "Agro", id: "agro" },
    { label: "About Us", id: "about" },
  ];


  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      let current = "home";
      navItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            current = id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setActive(id);
    isClickScrolling.current = true;
    setMobileOpen(false);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 500);
  };


  return (
  <nav className="fixed top-0 left-0 w-full z-50 bg-transparent md:px-6 ">
    <div className="max-w-screen-md mx-auto flex justify-between items-center md:mt-2 mt-8 px-10">
      
      {/* Desktop Nav */}
      
        <ul className=" hidden md:flex bg-white rounded-full border md:h-[75px] md:px-10  border-gray-100 w-full justify-between items-center text-base font-medium text-black">

        {navItems.map(({ label, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`cursor-pointer ${
                active === id
                  ? "underline decoration-primary decoration-1"
                  : ""
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end flex-1 ">
        {!mobileOpen && (
          <button
            className="text-black z-50"
            onClick={() => setMobileOpen(true)}
          >
            <RxHamburgerMenu size={28} />
          </button>
        )}
      </div>
    </div>

    {/* Mobile Slide-in Menu */}
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
        mobileOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={() => setMobileOpen(false)} className="text-black">
          <IoCloseOutline size={32} />
        </button>
      </div>

      <div className="p-6 flex flex-col gap-4">
        {navItems.map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleClick(e, id)}
            className="text-base font-semibold text-black hover:underline"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </nav>


  );
};

export default Navbar;
