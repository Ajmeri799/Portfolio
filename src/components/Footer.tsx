"use client";
import React from "react";
import { social } from "@/data/data";
import Link from "next/link";
import Image from "next/image";
function Footer() {
  return (
    <div className="flex justify-center border-t-[1px] border-green-700 ">
      <div className=" px-10 py-5  bg-black-100 ">
        <div className="hidden lg:flex gap-4 z-20 pb-5 text-right">
          {social.map((social, index) => (
            <div
              className=" bg-black w-fit h-fit p-1 rounded-full hover:animate-bounce"
              key={index}
            >
              <Link href={`${social.link}`}>
                <Image
                  src={`${social.icon}`}
                  alt={`${social.alt}`}
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          ))}
        </div>
        <h1 className="text-sm md:text-lg">
          code with
          <span className="animate-pulse"> ❤️ </span>
          by <span className="text-purple font-medium">Ajmeri </span>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
