"use client"
import React, { useEffect, useState } from "react";
import TypeWriter from "./components/TypeWriter";
import Image from "next/image";
import Slider from "./components/Slider";
import Marquee from "react-fast-marquee";

const about = () => {
  
  return (
    <div className="ml-auto font-poppins p-6  w-[880px]  bg-white text-white h-full rounded-2xl border border-gray-100 dark:bg-black dark:border-gray-900">
      <div>
        <div className="jb">
          <TypeWriter />
          <div className=" cc   gap-4 dark:bg-gray-900 bg-gray-100 text-[#4770ff] font-semibold px-4 py-2 rounded-md">
            <div className="relative h-2 w-2">
              <span class=" top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] absolute rounded-full h-2 w-2 bg-[#4770ff]"></span>
              <span class="animate-ping absolute h-2 w-2 rounded-full bg-[#4770ff] opacity-75"></span>
            </div>{" "}
            <h2>Available For Hire</h2>
          </div>
        </div>
        <div className="mt-2 text-black text-[24px] w-[525px]">
          <p className="capitalize  text-gray-500">
            A Passionate{" "}
            <b className="dark:text-white text-black">Frontend Developer</b> 🖥️
            & <b className="dark:text-white text-black">Graphic Designer</b>{" "}
            having <b className="dark:text-white text-black">4+ </b>
            years of Experiences.
          </p>
        </div>
        {/*  */}
        <div className=" mt-10 w-[525px] flex gap-10">
          <div className=" ">
            <h2 className=" text-[40px]  text-black dark:text-white font-semibold ">
              4+
            </h2>
            <p className="text-gray-400 text-[16px]">Year of Experience</p>
          </div>

          <div className=" ">
            <h2 className=" text-[40px]  text-black dark:text-white font-semibold ">
              8+
            </h2>
            <p className="text-gray-400 text-[16px]">Project Completed</p>
          </div>

          <div className=" ">
            <h2 className=" text-[40px]  text-black dark:text-white font-semibold ">
              8+
            </h2>
            <p className="text-gray-400 text-[16px]">Happy Client</p>
          </div>
        </div>

        <div className=" mt-10 ">
          <h2 className=" font-semibold text-[40px] text-black dark:text-white pb-[25px]">
            Working With 16+ Brands ✨ Worldwide
          </h2>
          <div className=" w-full grid grid-cols-8 gap-4">
            <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg ">
              <Image
                src="/notion.svg"
                alt="notion logo"
                width={60}
                height={5}
              />
            </div>
            {/*  */}

            <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
              <Image
                src="/figma.svg"
                alt="notion logo"
                width={60}
                height={5}
              />
            </div>
            {/*  */}

            <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
              <Image
                src="/framer.svg"
                alt="notion logo"
                width={60}
                height={5}
              />
            </div>
            {/*  */}

            <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
              <Image
                src="/mico.svg"
                alt="notion logo"
                width={60}
                height={5}
              />
            </div>
            {/*  */}

            <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
              <Image
                src="/webflow.svg"
                alt="notion logo"
                width={60}
                height={5}
              />
            </div>
            {/*  */}


            <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
              <Image
                src="/zeplin.svg"
                alt="notion logo"
                width={60}
                height={5}
              />
            </div>
            {/*  */}

            <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg ">
              <Image
                src="/notion.svg"
                alt="notion logo"
                width={60}
                height={5}
              />
            </div>
            {/*  */}

            <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
              <Image
                src="/figma.svg"
                alt="notion logo"
                width={60}
                height={5}
              />
            </div>
            {/*  */}

            <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
              <Image
                src="/framer.svg"
                alt="notion logo"
                width={60}
                height={5}
              />
            </div>
            {/*  */}

            <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
              <Image
                src="/mico.svg"
                alt="notion logo"
                width={60}
                height={5}
              />
            </div>
            {/*  */}

            <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
              <Image
                src="/webflow.svg"
                alt="notion logo"
                width={60}
                height={5}
              />
            </div>
            {/*  */}


            <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
              <Image
                src="/zeplin.svg"
                alt="notion logo"
                width={60}
                height={5}
              />
            </div>
            {/*  */}

            <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg ">
              <Image
                src="/notion.svg"
                alt="notion logo"
                width={60}
                height={5}
              />
            </div>
            {/*  */}

            <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
              <Image
                src="/figma.svg"
                alt="notion logo"
                width={60}
                height={5}
              />
            </div>
            {/*  */}

            <div className=" bg-gray-100  dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
              <Image
                src="/framer.svg"
                alt="notion logo"
                width={60}
                height={5}
              />
            </div>
            {/*  */}

            <div className=" bg-gray-100 dark:bg-gray-900 col-span-1 cc p-6 rounded-lg">
              <Image
                src="/mico.svg"
                alt="notion logo"
                width={60}
                height={5}
              />
            </div>
            {/*  */}

            

           
          </div>
        </div>
        {/*  */}

        <div>
          <h2 className=" font-semibold text-[40px] text-black dark:text-white pb-[25px] mt-9">Trusted By 100+ Clients</h2>
          <div>
            <Slider/>
          </div>
        </div>

        {/*  */}
        <div className=" rounded-lg overflow-hidden bg-slate-100 dark:bg-gray-900 mt-9">
              <Marquee speed={100}>
                <h2 className=" text-[25px] text-gray-800 dark:text-gray-400 py-4 ">
                  Available For Hire 🚀 Crafting Digital Experiences 🎨
                  Available For Hire 🚀 Crafting Digital Experiences 🎨
                </h2>
              </Marquee>
            </div>
      </div>
    </div>
  );
};

export default about;