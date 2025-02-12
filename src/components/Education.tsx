"use client";

import { Education } from "../data/data";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from "next/image";

interface qualifications {
  id: number;
  degree: string;
  des: string;
  thumbnail: string;
  yearOfcompletion: string;
  completed: string;
}
function Educations() {
  return (
    <div className="py-20 w-full  px-5 md:px-20 ">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl  font-bold">
          My <span className="text-green-800">Education</span>
        </h1>
        <p className="text-md text-white mt-3 px-3">
          {" "}
          Education is the key to unlocking the world, a passport to freedom.
        </p>
      </div>

      <div className="gap-16 md:gap-0  mt-10 sm:mt-20 flex flex-wrap  justify-evenly ">
        {Education.map(
          ({
            id,
            degree,
            des,
            thumbnail,
            yearOfcompletion,
            completed,
          }: qualifications) => (
            <HoverBorderGradient
              containerClassName="rounded-2xl"
              as="button"
              key={id}
              className="dark:bg-gradient-to-tr from-transparent to-green-950 bg-transparent text-black dark:text-white flex items-center space-x-2"
            >
              <div className="w-60 sm:w-80 items-center">
                <div className="flex justify-center items-center">
                  <Image
                    src={thumbnail}
                    alt={`thumbnail`}
                    width={100}
                    height={100}
                    className=" w-[100px] h-[100px] hidden md:block rounded-full"
                  />
                </div>
                <div className="text-left py-10 px-5 ">
                  <h2 className="text-3xl font-semibold text-white ">
                    {degree}
                  </h2>
                  <p className="text-sm text-slate-400 mt-2 font-medium ">
                    {des}
                  </p>
                  <p className="mt-1 text-sm">
                    {yearOfcompletion} | {completed}
                  </p>
                </div>
              </div>
            </HoverBorderGradient>
          )
        )}
      </div>
    </div>
  );
}

export default Educations;
