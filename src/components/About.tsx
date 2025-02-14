"use client";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { Button } from "./ui/moving-border";
import Image from "next/image";
import Link from "next/link";
function About() {
  return (
    <div className="mt-10 md:mt-3 md:mb-10 py-10 px-1 md:px-14" id="about">
      <h1 className="text-5xl md:text-6xl font-semibold text-center ">
        <span className="text-green-800">About</span> Me
      </h1>

      <div className="flex justify-around md:px-12 ">
        <Image
          src="/images/about.svg"
          alt="me"
          width={400}
          height={600}
          className="hidden md:block "
        />
        <div className="px-5 md:px-20 py-8 sm:py-20  md:py-28">
          <h1 className="text-xl font-semibold ">I&apos;m Ajmeri&#44;</h1>
          <p className="text-slate-400 mt-3">
            {" "}
            I&apos;m a full-stack web developer and I&apos;m passionate about
            building innovative,dynamic websites. I have started my web
            development journey by building web apps using Reactjs, Nextjs and
            Nodejs.My major focus is on designing and developing websites and
            applications that integrate functionality effortlessly. When
            I&apos;m Outside of tech you&apos;ll find me sketching and crafting
            with waste materials.
          </p>
          <h2 className="mt-5 text-lg font-medium text-purple mb-5">
            Working to be better than yesterday!
          </h2>

          <div className="w-fit">
            <Link href={"#project"}>
              <Button
                borderRadius="1.75rem"
                icon={<FaArrowDown aria-hidden="true" />}
                className="bg-white text-lg dark:bg-transparent text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
