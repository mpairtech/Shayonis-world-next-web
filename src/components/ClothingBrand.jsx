'use client';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import CategoryCard from './CategoryCard';
import Tag from './Tag';
import AutoScrolling from './AutoScrolling';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';


const categories = [
  { label: 'Kids Outfit', frontImg: '/image/clothing1.png', backImg: '/image/clothing-backimg1.png', objectPos: 'object-center-top' },
  { label: 'Mans Wear', frontImg: '/image/clothing2.png', backImg: '/image/clothing-backimg2.png', objectPos: 'object-left' },
  { label: 'Female Wear', frontImg: '/image/clothing3.png', backImg: '/image/clothing-backimg3.png', objectPos: 'object-left-top' },
  { label: 'Saree', frontImg: '/image/clothing4.png', backImg: '/image/clothing-backimg4.png', objectPos: 'object-center' },
  { label: 'Panjabi', frontImg: '/image/clothing5.png', backImg: '/image/clothing-backimg5.png', objectPos: 'object-center' },
];

const ClothingBrand = () => {
  const [activeText, setActiveText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveText(prev => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clothingbrand" className="mt-16 relative bg-[#FAF9F7] py-16 px-4 sm:px-6 lg:px-18 max-w-screen mx-auto">
      {/* Header */}
      <div className="w-full  flex flex-col lg:flex-row justify-between">
        <div className="text-center lg:text-start mb-14 lg:w-[50%] ">
          <Tag text="Clothing Brand" />
          <h2 className="font-bold text-[32px] sm:text-[36px] lg:text-[44px] mt-3" style={{ color: 'var(--primary-text)' }}>
            Shayonis Emporium
          </h2>
          <p className="font-bold text-[28px] sm:text-[32px]  lg:text-[44px]" style={{ color: 'var(--secondary-text)' }}>
            Clothing for Every Generation
          </p>
        </div>
        <div className="hidden md:block h-24 w-full lg:w-5/12">
          <AutoScrolling />
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-5 lg:gap-2 mt-2">
        {categories.map((item, index) => (
          <CategoryCard key={index} item={item} isShort={index === 1 || index === 3} />
        ))}
      </div>

      {/* Mobile/Tablet Marquee */}
      <div className="block lg:hidden mt-8 px-2 no-scrollbar h-fit">
  <ScrollMenu>
    {categories.map((item, index) => (
      <div key={index} className="mx-2">
        <CategoryCard item={item} isShort={index === 1 || index === 3} />
      </div>
    ))}
  </ScrollMenu>
      </div>
    </section>
  );
};

export default ClothingBrand;
