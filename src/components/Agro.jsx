"use client"
import React from 'react';
import Image from 'next/image';
import Tag from './Tag';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { HiOutlineArrowLongRight } from "react-icons/hi2";


const contentData = [
  {
    title: "Sustainable Farming Practices",
    img: "/image/agro-img1.png", 
    text: "Focuses on long-term environmental health and resource efficiency in agriculture.",
  },
  {
    title: "Naturally Grown Produce",
    img: "/image/agro-img2.png",
    text: "Supports the cultivation of produce without synthetic chemicals.",
  },
  {
    title: "Farm-to-Table Model",
    img: "/image/agro-img3.png",
    text: "Connects consumers directly to local farms, reducing travel and waste.",
  },
  {
    title: "Packaging & Distribution",
    img: "/image/agro-img4.png",
    text: "Emphasizes eco-friendly, organic, and environmentally responsible methods.",
  },
];


const Agro = () => {
      const [activeIndex, setActiveIndex] = useState(0);

      
  return (
    <section className="mt-12  px-6 md:px-12 lg:px-18 py-8 md:py-12 lg:my-16">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center text-center mb-8 md:mb-10 lg:mb-14  ">
        <Tag text="Agro Business" />
        <h2
          className="  text-[32px] md:text-[38px] lg:text-[44px]   font-bold  mt-3"
          style={{ color: "var(--primary-text)" }}
        >
          {" "}
          Shayonis Agro{" "}
        </h2>

        <p
          className="font-bold text-[24px] md:text-[30px] lg:text-[44px]"
          style={{ color: "var(--secondary-text)" }}
        >
          {" "}
          Rooted in Nature. Growing the Future{" "}
        </p>
      </div>

      {/* Main Content */}

     <div className="info-panel">
      {/* Sidebar */}
      <div className="sidebar">
        {contentData.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`sidebar-btn ${activeIndex === index ? "active" : ""}`}
          >
            <span>{item.title}</span>
            <HiOutlineArrowLongRight style={{ fontSize: "24px" }} />
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex relative  w-full height-[380px] rounded-2xl overflow-hidden" >
        <img
          src={contentData[activeIndex].img}
          alt="Background" className=" h-[380px] w-full object-cover overflow-hidden object-center"
        />
        <div
          className=" absolute bottom-0 left-0 w-full h-28 bg-black/50 p-5 rounded-2xl flex items-center justify-center  text-white text-lg" >
          {contentData[activeIndex].text}
        </div>
      </div>
    </div>
    </section>
  );
}

export default Agro;
