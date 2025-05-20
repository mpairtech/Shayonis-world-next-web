"use client"
import React  from 'react';
import { useEffect, useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import Tag from './Tag';
import AutoScrolling from './AutoScrolling';
import { motion } from 'framer-motion';



const categories = [
  { label: 'Kids Outfit', frontImg: '/image/clothing1.png', backImg: '/image/clothing-backimg1.png', objectPos: 'object-center'},
  { label: 'Mans Wear', frontImg: '/image/clothing2.png', backImg: '/image/clothing-backimg2.png', objectPos: 'object-left'},
  { label: 'Female Wear', frontImg: '/image/clothing3.png', backImg: '/image/clothing-backimg3.png', objectPos: 'object-left-top'},
  { label: 'Saree', frontImg: '/image/clothing4.png', backImg: '/image/clothing-backimg4.png', objectPos: 'object-center' },
  { label: 'Panjabi', frontImg: '/image/clothing5.png', backImg: '/image/clothing-backimg5.png', objectPos: 'object-center'},
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
       <div className=" h-24 w-5/12">
        <AutoScrolling  />
        </div> 
        
       </div> 

      {/* Image Grid */}
      <div className="grid grid-cols-5 justify-start  max-w-screen ">
    {categories.map((item, index) => {
  const isShort = index === 1 || index === 3;
  const [flipped, setFlipped] = useState(false);

  return (
    <div key={index} className="cursor-pointer" onClick={() => setFlipped(prev => !prev)}>
     
     
      <div className={`relative overflow-hidden rounded-full w-55 ${isShort ? 'h-72' : 'h-91'} perspective`}>
        <motion.div
          className="w-full h-full transition-transform duration-500"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: flipped ? 180 : 0 }}
        >
          {/* Front Image */}
          <div className="absolute w-full h-full backface-hidden rounded-full overflow-hidden">
            <img
              src={item.frontImg}
              alt="Front"
              className={`w-full h-full object-cover ${item.objectPos}`}
            />
          </div>

          {/* Back Image */}
          <div className="absolute w-full h-full rotate-y-180 backface-hidden rounded-full overflow-hidden">
            <img
              src={item.backImg}
              alt="Back"
              className={`w-full h-full object-cover ${item.objectPos}`}
            />
          </div>
        </motion.div>
      </div>

      <div className="-mt-8">
        <p className="absolute ml-38 text-sm font-medium bg-white rounded-full  py-3 px-4 shadow-md inline-block z-10" style={{ color: "var(--tag-text)" }}>
          {item.label}
        </p>
      </div>
    </div>
  );
})}   
</div>

    </section>
  );
};

export default ClothingBrand;
