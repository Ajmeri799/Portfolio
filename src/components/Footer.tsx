import React from "react";
import { sociallist } from "@/data/data";
import Link from "next/link";
import Image from "next/image";
function Footer() {
  return (
    <div className=" px-10 py-5 border-t-[1px] border-black bg-black-100 flex justify-center">
      <h1 className="text-lg md:text-xl">
        Made with
        <span className="animate-pulse"> ❤️ </span>
        by <span className="text-purple font-medium">Sakshi Pandey</span>
      </h1>
      <div className="w-[4rem]   fixed bottom-0 hidden lg:flex flex-col gap-3 z-20 pb-5 pl-3">
        {sociallist.map((social, index) => (
          <div
            className=" bg-purple w-fit p-3 rounded-full hover:animate-bounce"
            key={index}
          >
            <Link href={`${social.link}`}>
              <Image
                src={`${social.icon}`}
                alt={`${social.alt}`}
                width={60}
                height={60}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
