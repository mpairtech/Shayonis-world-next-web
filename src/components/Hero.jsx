"use client";
import React from "react";
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { HiOutlineArrowLongRight } from "react-icons/hi2";


const StarIcon = ({
  color = "white",
  size = 40, // Default size: 40px
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 37 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_24_49)">
      <path
        d="M36.5 17.5392C36.5 17.5392 20.2326 18.1986 18.5 0C18.5 0 18.5 17.2744 0.5 17.5416C0.5 17.5416 17.6994 18.3309 18.5 36C18.5 36 17.4342 20.3091 36.5 17.5392Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_24_49">
        <rect width="36" height="36" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);



const Hero = () => {

  const className = "text";
  
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    let animationFrameId;

    const scroll = () => {
      if (scrollEl) {
        scrollEl.scrollLeft += 0.5;
        if (scrollEl.scrollLeft >= scrollEl.scrollWidth - scrollEl.clientWidth) {
          scrollEl.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrameId);
  }, []);


  return (

    <div  id="home" className="hero-bg   overflow-hidden">

    <div className=" max-w-screen mx-auto  relative pt-12 px-12">
     
<div className="absolute overflow-hidden -top-30 -right-90 -translate-x-1/2 w-[500px] h-[500px] rounded-full border-[80px] border-[#AF703226] opacity-100 blur-2xl z-0" />


      {/* Hero Content */}
      <div className="flex flex-row justify-between md:grid-cols-2 items-center gap-10 mt-20 px-2">



 <div className="absolute top-30 left-1">
        <StarIcon color="#FFFFFF" size={80} /> 
      </div>

 <div className="absolute top-70 left-200">
        <StarIcon color="#AF703226" size={70} /> 
      </div>
 <div className="absolute top-1 right-30">
        <StarIcon color="#F5F2EC" size={80} /> 
      </div>

        {/* Left Text Section */}
        <div>
          <h1 className="text-[54px] font-black text-[#5F657B] mb-4">
            Welcome to Shayonis World
          </h1>
          <p className="text-2xl font-bold text-[#646983] mb-4">
            A Universe of Style, Sustainability & Sophistication
          </p>
          <p className="text-xl font-normal text-[#434343] mt-10 mb-6 max-w-2xl"> From fashion statements to farm-to-table produce and elegant <br />  home decor—Shayonis World is a diverse lifestyle brand <br /> redefining excellence in every sector we touch. </p>
          <button className="flex flex-row items-center justify-between gap-2 bg-[#555B73] text-white px-5 py-3 rounded-md hover:bg-[#737890] transition">
            Explore Our Universe <HiOutlineArrowLongRight className="text-[28px]"/>

          </button>
        </div>

        {/* Right Image Section */}
        <div className="grid grid-cols-2 gap-6 ">
          <Image 
            src="/image/image1.png" 
            alt="Emporium" 
            width={230} 
            height={230} 
            className="rounded-[30px] object-cover w-[230px] h-[230px] overflow-hidden"  />
          <Image 
            src="/image/image2.png" 
            alt="Construction" 
            width={230} 
            height={230} 
            className="rounded-[120px_20px_20px_20px] object-cover  w-[230px] h-[230px] overflow-hidden"   />
          <Image 
            src="/image/image3.png" 
            alt="Apparel" 
            width={230} 
            height={230} 
            className="rounded-[30px_30px_120px_30px] object-cover  w-[230px] h-[230px] overflow-hidden"   />
          <Image 
            src="/image/image4.png" 
            alt="Agro" 
            width={230} 
            height={230} 
            className="rounded-[30px] object-cover  w-[230px] h-[230px] overflow-hidden"   />
        </div>
      </div>

</div>
      {/* Autoscroll Text */}
      <div className={ className + "movingtext pb-12 overflow-auto pt-12 flex flex-row "}>
        <div
          ref={scrollRef}
          className = " whitespace-nowrap flex flex-row gap-18  text-[#555] text-sm font-medium items-center"
        >
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-x-26  ">
              <span className="flex flex-row gap-3 items-center justify-center "><Image src="/image/68.svg" alt="Logo" width={30} height={30} /> <p className="font-medium text-[22px]">  Shayonis Apparel</p></span>

              <span className="flex flex-row gap-3 items-center justify-center "> <Image src="/image/68.svg" alt="Logo" width={30} height={30} /> <p className="font-medium text-[22px]">  Shayonis Emporium</p> </span>

              <span className="flex flex-row gap-3 items-center justify-center "> <Image src="/image/68.svg" alt="Logo" width={30} height={30} /> <p className="font-medium text-[22px]">  Shayonis Dream Homes</p> </span>
             
              <span className="flex flex-row gap-3 items-center justify-center "> <Image src="/image/68.svg" alt="Logo" width={30} height={30} />  <p className="font-medium text-[22px]">Shayonis Agro</p> </span>
            
            </div>
          ))}
        </div>
      </div>
    
    
    </div>
  );
};

export default Hero;

/*<FaStarOfLife className="text-[#c5c3ce]" />*/