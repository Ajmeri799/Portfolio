"use client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { Typewriter } from "react-simple-typewriter";

function HeroSection() {
  return (
    <div className="py-10 md:py-0 dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      <div className=" h-auto md:h-[40rem] w-full rounded-sm flex flex-col items-center justify-center relative overflow-hidden mx-auto  bg-gradient-to-r from-transparent from-70% to-green-950 transition-shadow">
        <Spotlight
          className="-top-40 left-0 md:left-50 md:-top-20"
          fill="green"
        />

        <div className="p-4 relative z-10 w-full text-left md:pl-48">
          <h2 className=" font-bold text-base md:text-2xl text-neutral-300  mx-auto p-1">
            Hi There&#44; I&apos;m
          </h2>
          <h1 className="mt-1 md:mt-1 text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Ajmeri Guniya
          </h1>
          <h2 className="text-lg md:text-3xl flex gap-3 mt-8">
            I am into
            <span className="text-green-700 dark:text-green-600 text-lg md:text-2xl font-medium">
              <Typewriter
                words={["Frontend Development", "Backend Development"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <div className="mt-4">
            <Link href={"/about"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white text-lg dark:bg-transparent text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                About me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
