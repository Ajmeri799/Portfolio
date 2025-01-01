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
    <div className=" py-20 w-full  px-1 md:px-20 ">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl  font-bold">
          My <span className="text-green-900">Education</span>
        </h1>
        <p className="text-md text-white mt-3">
          Education Is Not The Learning Of Facts, But The Training Of The Mind
          To Think.
        </p>
      </div>

      <div className="w-full mt-20 grid lg:grid-cols-2 grid-cols-1 gap-5 md:pl-28">
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
              <div className=" py-2  md:flex justify-center items-center gap-21">
                <Image
                  src={thumbnail}
                  alt={`thumbnail`}
                  width={100}
                  height={100}
                  className=" w-[100px] h-[100px] hidden md:block rounded-full mr-4"
                />
                <div className="text-left ">
                  <h2 className="text-4xl font-semibold text-white ">
                    {degree}
                  </h2>
                  <p className="text-sm text-slate-400 mt-2 font-medium">
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
