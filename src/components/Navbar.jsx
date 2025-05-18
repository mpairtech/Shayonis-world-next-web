"use client";

import React from 'react';

const Navbar = () => {
  return (
    <nav className='w-full  flex items-center justify-center h-fit'>
      <div className="max-w-screen fixed mx-auto top-4 bg-white rounded-full border-1 border-gray-100 z-50 gap-40">
        <ul className="flex gap-12 px-10 py-6 justify-center text-base font-semibold text-black">
        <li><a href="#home" className="nav-hover">Home</a></li>
        <li><a href="#clothing" className="nav-hover">Clothing</a></li>
        <li><a href="#construction" className="nav-hover">Construction</a></li>
        <li><a href="#apparel" className="nav-hover">Apparel</a></li>
        <li><a href="#agro" className="nav-hover">Agro</a></li>
        <li><a href="#about" className="nav-hover">About Us</a></li>
      </ul>
        </div>
    </nav>
  );
}
export default Navbar;
