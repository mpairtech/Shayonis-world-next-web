"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Tag from "./Tag";


const About =() => {
  const cards = [
    {
      Image: "/image/image1.png",
      title: "Shayonis Emporium",
      subtitle: "A bold and expressive fashion label that blends tradition with modernity.",
    },
    {
      Image: "/image/image2.png",
      title: "Shayonis Dream Homes",
      subtitle: "Curated home decor that transforms spaces into personal sanctuaries.",
    },
    {
      Image: "/image/image3.png",
      title: "Shayonis Apparel",
      subtitle: "Everyday wear redefined with comfort, functionality, and contemporary design at its core.",
    },
    {
      Image: "/image/image4.png",
      title: "Shayonis Agro",
      subtitle: "A bold and expressive fashion label that blends tradition with modernity.",
    },
  ];

  return (
    <div  id="about" className="mt-28 max-w-screen mx-auto px-18 flex flex-col items-center justify-center">
      <section>
        {" "}
        <div className=" flex flex-col items-center justify-center  w-fit h-fit mb-12 ">
          <Tag text="About Shayonis World" />
          <p className="text-center text-lg font-normal mt-8 ">
            Shayonis World is more than a brand—it’s a multi-dimensional
            lifestyle ecosystem. Born from a passion for excellence <br /> and
            creativity, Shayonis World brings together three powerful ventures
            under one roof:
          </p>
        </div>
      </section>

      <section className="bg-[#F9E9D9] w-full py-10 px-12 rounded-3xl">
        {" "}
        {/* brown bg */}
        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-[295px] h-[310px] pl-[22px] py-[22px] pr-3 hover:bg-white transition duration-300 rounded-xl cursor-pointer flex items-start flex-col"
            >
              <img
                src={card.Image}
                alt={card.title}
                className="w-[64px] h-[64px] object-cover object-center rounded-md mt-[5px] mb-22"
              />
              <div>
                <h3 className="text-xl font-medium mb-3 text-gray-800">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 ">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* mission vision */}
      <section>
        <div className="mt-6 vision-bg  mx-auto py-10 px-16 rounded-3xl flex flex-row items-start justify-between  gap-16">
          {/*left text*/}
          <div className="flex flex-col gap-24 justify-between">
            <h1 className="text-white text-[44px] font-bold">
              One Vision. <br /> Many Dimensions.
            </h1>

            <p className=" text-lg font-normal text-white ">
              Shayonis World is more than a business — it's a collective vision
              brought to life through innovation, creativity, and purpose. With
              thriving ventures in fashion, agriculture, apparel, and home
              lifestyle, we strive to enhance the everyday experience of
              individuals and communities alike. Each brand under our name is
              guided by a shared philosophy: excellence, authenticity, and
              impact.
            </p>
          </div>

          {/*right image*/}
          <div className=" gap-8 flex flex-row justify-start items-start flex-shrink-0 ">

            <div className="w-[160px] h-[200px] overflow-hidden rounded-[0_0_110px_110px]">
              <Image
                src="/image/vision-img2.png"
                alt="Vision"
                width={80}
                height={200}
                className="w-full h-full object-cover object-right-top transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            <div className="w-[160px] h-[300px] overflow-hidden rounded-[0_0_110px_110px]">
              <Image
                src="/image/vision-img1.png"
                alt="Vision"
                width={160}
                height={300}
                className="w-full h-full object-cover object-center-top transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;