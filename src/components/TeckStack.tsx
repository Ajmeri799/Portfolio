"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
import { techStacks } from "../data/data";

function TechStack() {
  return (
    <div className=" w-full p-8 rounded-3xl h-auto md:mt-10 sm:mb-20 px-1 md:px-20">
      <h1 className="text-5xl md:text-6xl font-bold text-center">
        Tech <span className="text-green-800">Stack</span>{" "}
      </h1>
      <div className="flex flex-wrap  justify-center  gap-3 md:gap-8 mt-14 md:mt-20 px-3 md:px-40">
        {techStacks.map(
          ({ icon, techname }: { icon: string; techname: string }, index) => (
            <BackgroundGradient
              className="bg-black rounded-full "
              containerClassName="w-auto rounded-full "
              key={index}
            >
              <div className=" w-[100px] h-[100px] md:w-[110px] md:h-[110px] flex flex-col justify-center items-center px-4 py-1 rounded-3xl ">
                <Image
                  src={icon}
                  alt={techname}
                  width={60}
                  height={60}
                  className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] "
                />
                <p className="text-xs md:text-base uppercase text-center">{}</p>
              </div>
            </BackgroundGradient>
          )
        )}
      </div>
    </div>
  );
}

export default TechStack;
