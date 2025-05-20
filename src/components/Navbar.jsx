"use client";

import React from 'react';
import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "clothingbrand", "construction", "apparel", "agro", "about"];

      let current = "home";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 80) current = section;  // Adjust 80 if your navbar height changes
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleClick = (e, section) => {
    e.preventDefault();
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(section);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Clothing", id: "clothingbrand" },
    { label: "Construction", id: "construction" },
    { label: "Apparel", id: "apparel" },
    { label: "Agro", id: "agro" },
    { label: "About Us", id: "about" },
  ];

  return (
    <nav className="w-full flex items-center justify-center h-fit">
      <div className="max-w-screen fixed mx-auto top-4 bg-white rounded-full border border-gray-100 z-50 gap-40">
        <ul className="flex gap-12 px-10 py-6 justify-center text-base font-semibold text-black">
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`nav-hover cursor-pointer ${
                  active === id ? "underline decoration-primary decoration-1 pt-2" : ""
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>

   
  );
}
export default Navbar;

