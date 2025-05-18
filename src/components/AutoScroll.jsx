"use client";
import { useEffect, useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import Marquee from "react-fast-marquee";


const AutoScroll = ({ activeText }) => {
 
  return (
    <div className="relative h-24 w-2/5 mx-auto overflow-hidden flex items-center justify-center">
      <Marquee
        direction="down" 
        speed={30}
        gradient={false}
        pauseOnHover={true}
        className="transform -rotate-90 w-24 h-full"
      >
        <div className="flex flex-col gap-10 w-max transform rotate-90">
          {/* First Text */}
          <p className="text-lg font-normal text-gray-800 leading-snug w-64">
            Here tradition meets trend, and elegance defines everyday wear. From ethnic collections to modern essentials, we curate timeless fashion that celebrates identity and confidence.
          </p>

          {/* Second Text */}
          <div className="flex items-start gap-3 w-64">
            <IoLocationSharp className="text-red-500 w-6 h-6 mt-1 shrink-0" />
            <p className="text-sm text-gray-800 leading-snug">
              Shayoni’s Emporium – Shop#350, 2nd floor, Concord Twin Center Shopping Complex, Khulshi, Chattogram
            </p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default AutoScroll;