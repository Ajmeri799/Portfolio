"use client";
import React from "react";
import Image from "next/image";
import FeedbackForm from "./FeedbackForm";

function Contact() {
  return (
    <div className="mt-20 pt-10 py-5 px-1 md:px-20 " id="contact">
      <h1 className="text-5xl md:text-6xl font-bold text-center">
        <span className="text-purple">Contact</span> Me
      </h1>

      <div className="flex justify-center items-center bg-black md:bg-transparent border border-gray-700 mt-1 md:mt-16 py-3 px-3 rounded-3xl shadow-md shadow-green-900">
        <div className=" hidden md:block w-fit  ">
          <Image
            src="/images/Contact.svg"
            alt="img"
            width={70}
            height={70}
            className=" w-[30rem] h-auto  rounded-3xl"
          />
        </div>

        <div className=" leading-7 px-1 md:px-10 pt-10  ">
          <h1 className="text-2xl ">Get in Touch </h1>
          <p className="text-md text-slate-400  ">
            My inbox is always open&#44; Whether you have a question&#44; an
            idea&#44; or just want to say &quot;hi&quot;👋&#44; feel free to
            drop a message, I&apos;m excited to hear from you!👂 <br />
            🎉 Let&apos;s connect and create something amazing together 🤝
          </p>

          <FeedbackForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
