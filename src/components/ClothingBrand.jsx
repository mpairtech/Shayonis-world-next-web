'use client';

import React  from 'react';
import { useEffect, useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import Tag from './Tag';
import AutoScroll from './AutoScroll';



const categories = [
  { label: 'Kids Outfit', src: '/image/clothing1.png' , objectPos: 'object-center'},
  { label: 'Mans Wear', src: '/image/clothing2.png' , objectPos: 'object-left'},
  { label: 'Female Wear', src: '/image/clothing3.png' , objectPos: 'object-left-top'},
  { label: 'Saree', src: '/image/clothing4.png', objectPos: 'object-center' },
  { label: 'Panjabi', src: '/image/clothing5.png' , objectPos: 'object-center'},
];



const ClothingBrand = () => {

  const [activeText, setActiveText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveText((prev) => (prev === 0 ? 1 : 0));
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  },  []);



  return (
    <section className="mt-16 relative bg-[#FAF9F7] py-20 px-18 max-w-screen mx-auto">
      <div className="flex flex-row items-center justify-between ">
        

      {/* Heading */}
      <div className="text-start mb-14 ">
        <Tag text="Clothing Brand" />
        <h2 className=" font-bold  text-[44px] mt-3" style={{ color: "var(--primary-text)"}}>  Shayonis Emporium  </h2>
        <p className="font-bold text-[44px]" style={{ color: "var(--secondary-text)"}} >
          Clothing for Every Generation
        </p>
      </div>
      
       {/* Scrollable Info Box */}
        <AutoScroll />
        
       </div> 

      {/* Image Grid */}
      <div className="grid grid-cols-5 justify-start  max-w-screen ">
        {categories.map((item, index) => {
          const isShort = index === 1 || index === 3;

          return (
            <div   key={index}  className="" >
              <div  className={`overflow-hidden rounded-full w-55 ${ isShort ? 'h-72' : 'h-91' }`} >
                <img
                  src={item.src}
                  alt={item.label}
                  className={"w-full h-full object-cover ${objectPos}"} />
              </div>
              <div className="-mt-8">
                <p className=" ml-38 text-sm font-medium bg-white rounded-full py-3 px-4 shadow-md inline-block" style={{color: "var(--tag-text)"}}>
                {item.label}
              </p> </div>
            </div>
          );
        })}
      </div>

     

    </section>
  );
};

export default ClothingBrand;
