"use client";
import React from "react";

import { MdLocationPin } from "react-icons/md";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";

import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex justify-center  p-2 bg-black">
      <div className="flex  md:w-full flex-col md:flex-row  md:justify-between  text-white   md:px-20 py-2 ">
        <div>
          <div>
            <p className="my-2 flex items-center gap-2   font-normal text-lg ">
              <AiOutlineMail className="w-10 h-w-10" /> TutionMedia@gmail.com
            </p>
            <p className="flex items-center gap-2  font-normal text-lg">
              <FiPhoneCall className="w-10 h-w-10" />
              01729678295
            </p>
            <p className="mt-2 flex items-center gap-2  font-normal text-lg ml-[6px]">
              <MdLocationPin className="w-8 h-8" />
              Dinajpur , Bangladesh
            </p>
          </div>
        </div>

        {/* services.............................. */}

        <div className="flex space-y-3 text-white flex-col items-start gap-3 hidden lg:block">
          <Link
            href="#Award&Achivements"
            className=" link-hover no-underline text-white  block   text-xl font-normal tracking-normal text-blue-gray-900 antialiased"
          >
            About
          </Link>
          <Link
            href="#Award&Achivements"
            className="link link-hover no-underline text-white  block   text-xl font-normal tracking-normal text-blue-gray-900 antialiased"
          >
            Our Award & Achivements
          </Link>
          <Link
            href="#Award&Achivements"
            className="link link-hover no-underline  text-white block   text-xl font-normal tracking-normal text-blue-gray-900 antialiased"
          >
            our Extra-curricular Activities
          </Link>

          <Link
            href="#Award&Achivements"
            className="link link-hover no-underline  text-white  block   text-xl font-normal tracking-normal text-blue-gray-900 antialiased"
          >
            Services
          </Link>
        </div>

        {/* social icons and links................. */}

        <div className="my-2">
          <div className="flex md:flex-col gap-3 justify-center">
            <Link className="" href={""} target="_blank">
              <BsYoutube className="w-10 h-10 text-white" />
            </Link>
            <Link className="flex  my-0" href={""} target="_blank">
              <BsFacebook className="w-10 h-8 text-white" />
            </Link>
            <Link className="flex " href={"/"} target="_blank">
              <BsLinkedin className="w-10 h-8 text-white" />
            </Link>
          </div>
          <div className="flex gap-3 w-full justify-start "></div>
        </div>

        {/* contact me  button */}

        <div className="">
          <div className="lg:mx-auto mt-6 flex flex-col  ">
            <button className="w-44 p-3 border rounded   font-semibold">
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
