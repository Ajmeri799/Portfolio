"use client";
import Link from "next/link";
import Project from "./Project";
import { Button } from "./ui/moving-border";
function AllProject() {
  return (
    <>
      <div
        className="pt-20 pb-5 w-full  px-1 md:px-20  min-h-screen"
        id="project"
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl  font-bold pb-8 sm:pb-0">
            My <span className="text-green-800">Projects</span>
          </h1>
        </div>
        <Project />
        <div className="w-full text-center pt-5 sm:pt-10">
          <Link href="https://github.com/Ajmeri799?tab=repositories">
            <Button
              borderRadius="1.75rem"
              className="bg-white text-lg dark:bg-transparent text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              All Project
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default AllProject;
