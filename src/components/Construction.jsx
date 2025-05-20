"use client"
import React from 'react';
import Image from 'next/image';
import Tag from './Tag';
import { useEffect, useRef } from 'react';

const Construction = () => {
  return (
    <section  id="construction" className="mt-12 px-18 py-16">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center text-center mb-14 ">
        <Tag text="Construction Business" />
        <h2
          className=" font-bold  text-[44px] mt-3"
          style={{ color: "var(--primary-text)" }}
        >
          {" "}
          Shayoni’s Dream Homes & Premium Lifestyle{" "}
        </h2>
        <p
          className="font-bold text-[44px]"
          style={{ color: "var(--secondary-text)" }}
        >
          {" "}
          Crafting More Than Homes — Creating Dreams in Concrete{" "}
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-row items-start justify-between gap-5">
        {/*images */}
        
        <div className="flex flex-row gap-6">
          <div className="w-[335px] h-[340px] overflow-hidden rounded-xl">
            <Image
              src="/image/cons1.png"
              alt="Image 1"
              width={340}
              height={335}
              className="w-full h-full object-cover object-right-top transition-transform duration-400 ease-in-out hover:scale-120"
            />
          </div>
         
          <div className="w-[250px] h-[340px] overflow-hidden rounded-xl">
            <Image
                src="/image/cons2.png"
            alt="Image 2"
            width={250}
            height={335}
              className="w-full h-full object-cover object-right-top transition-transform duration-400 ease-in-out hover:scale-120"
            />
          </div>

          <div className="w-[250px] h-[340px] overflow-hidden rounded-xl">
            <Image
              src="/image/cons3.png"
            alt="Image 3"
            width={250}
            height={335}
              className="w-full h-full object-cover object-right-top transition-transform duration-400 ease-in-out hover:scale-120"
            />
          </div>

        </div>

        {/* Right - Card */}
        <div className="relative bg-[#FCF9F4] h-[340px] w-full max-w-md p-6 rounded-2xl ">
          <h4 className="text-base font-medium text-gray-800 mb-8">
            Whether you're building your first home or investing in future
            spaces, we bring together innovation, precision with our strengths
            in-{" "}
          </h4>
          {/* Vertical Divider */}
          <div className="absolute left-10 top-32 bottom-6 w-[4px] bg-gradient-to-t from-[#BEB7AD] to-[#DACAB4] rounded-full" />

          <div className="pl-10">
            <p className="text-gray-500 font-semibold mb-3"> GREAT PLACES</p>
            <p className="text-gray-500 font-semibold mb-3">
              {" "}
              LEADING CONSTRUCTION
            </p>
            <p className="text-gray-500 font-semibold mb-3">
              {" "}
              INVESTING IN OUR PEOPLE
            </p>
            <p className="text-gray-500 font-semibold"> CUSTOMER FIRST</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Construction;
