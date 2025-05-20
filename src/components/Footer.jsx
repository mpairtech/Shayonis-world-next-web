"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram,  FaYoutube, FaWhatsapp,} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { Playfair_Display } from 'next/font/google';




export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '800'],
});

const StarIcon = ({ className = "" }) => (
  <svg
    width="37"
    height="36"
    viewBox="0 0 37 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-10 h-10 ${className}`}  // ✅ correct line
  >
    <g clipPath="url(#clip0_24_49)">
      <path
        d="M36.5 17.5392C36.5 17.5392 20.2326 18.1986 18.5 0C18.5 0 18.5 17.2744 0.5 17.5416C0.5 17.5416 17.6994 18.3309 18.5 36C18.5 36 17.4342 20.3091 36.5 17.5392Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_24_49">
        <rect width="36" height="36" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);





export default function Footer() {
  return (
    <footer className=" w-full  ">
      <section className="mb-20">
        <div className="relative mission p-12 max-w-10/12 mx-auto text-white text-center font-semibold text-xl leading-relaxed">
          {/* Top-left star */}
          <div className="absolute top-6 left-16">
            <StarIcon className="animate-flip-x" />
          </div>

          {/* Mission Text */}
          <p className=" font-bold text-3xl py-4">
            Our mission is to enrich everyday living through quality,
            innovation, and integrity— whether{" "}
            <em>you wear it, eat it, or live in it</em>. Join us as we continue
            to <em>grow, inspire, and create a legacy</em> across industries.
          </p>

          {/* Bottom-right star */}
          <div className="absolute bottom-10 right-46">
            <StarIcon className="animate-flip-x" />
          </div>
        </div>
      </section>

      <section className="footer text-white w-full  pb-4">
        <div className="w-full py-10 px-6 flex flex-row  items-start justify-between gap-1">
          {/* Left Column */}
          <div className="pl-10">
            <div className="flex flex-row justify-start items-center gap-2 ">
              <div className={`text-3xl mb-2 ${playfairDisplay.className}`}>
                <span className="text-white font-normal ">Shayonis</span> <br />
                <span className="text-white font-extrabold  ">World</span>
              </div>

              <p className="text-base pl-4">
                From fashion to farming, fabric to foundations — <br />
                Shayonis World unites diverse industries with a single <br />
                promise: quality, innovation, and trust.
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              {[FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="bg-white/30 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                  >
                    <Icon className="text-white text-xl cursor-pointer" />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Middle Column */}
          <div className="grid grid-cols-3 gap-2 text-base font-semibold">
            <a href="#hero" className="hover:underline">
              About Us
            </a>
            <a href="#construction" className="hover:underline">
              Construction
            </a>
            <a href="#agro" className="hover:underline">
              Agro
            </a>
            <a href="#clothing" className="hover:underline">
              Clothing
            </a>
            <a href="#apparel" className="hover:underline">
              Apparel
            </a>
          </div>

          {/* Right Column */}
          <div className="space-y-3 text-sm pr-10">
            <div className="flex items-start">
              <MdLocationOn className="mt-1 mr-2" />
              <span>
                Shop#350, 2nd floor, Concord Twin Center <br /> Shopping
                Complex, Khulshi, Chattogram
              </span>
            </div>
            <div className="flex items-center">
              <MdEmail className="mr-2" />
              <a
                href="mailto:Shayonisworld@gmail.com"
                className="hover:underline"
              >
                Shayonisworld@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <MdPhone className="mr-2" />
              <a href="tel:+8801829337533" className="hover:underline">
                +8801829337533
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-400 px-16 py-4 flex flex-row  justify-between  items-center">
          <div className="flex items-center gap-2">
            <span>&copy;</span>
            <span className="text-xs font-medium">
              Copyright by Shayonis Wolrd.
            </span>
          </div>
          <div className="text-xs font-medium ">
            Developed by{" "}
            <span className="font-bold">mPair Technologies Ltd.</span>
          </div>
        </div>
      </section>
    </footer>
  );
}
