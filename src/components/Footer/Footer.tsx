"use client";
import React from "react";

import { MdLocationPin } from "react-icons/md";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";

import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex justify-center  bg-black">
      <div className="flex  md:w-full flex-col md:flex-row  md:justify-between  text-white min-h-[250px]  md:px-20 py-14 ">
        <div>
          {/* left introduction and contact information */}
          {/* <div className='flex items-center space-x-2'>
                        <Image
                            src={rahtulGoniImage}
                            height={70}
                            width={80}
                            alt="pp"
                            className='rounded-lg'
                        >

                        </Image>

                        <div>
                            <h4 className=" block font-sans text-lg font-semibold tracking-normal text-blue-gray-900 antialiased">
                                RAHATUL GONI
                            </h4>
                            <h4 className="mb-2 block font-sans text-lg md:text-xl font-semibold tracking-normal text-blue-gray-900 antialiased">
                                BSC in Chemistry, HSTU
                            </h4>
                        </div>
                    </div> */}
          <div>
            <p className="my-2 flex items-center gap-2 font-sans  font-semibold text-lg ">
              <AiOutlineMail className="w-10 h-w-10" />{" "}
              mdnasiruddin5201@gmail.com
            </p>
            <p className="flex items-center gap-2 font-sans font-semibold text-lg">
              <FiPhoneCall className="w-10 h-w-10" />
              01729678295
            </p>
            <p className="mt-2 flex items-center gap-2 font-sans font-semibold text-lg ml-[6px]">
              <MdLocationPin className="w-8 h-8" />
              Dinajpur , Bangladesh
            </p>
          </div>
        </div>

        {/* services.............................. */}

        <div className="flex space-y-3 text-white flex-col items-start gap-3 hidden lg:block">
          <Link
            href="#Award&Achivements"
            className=" link-hover no-underline text-white  block font-sans text-xl font-semibold tracking-normal text-blue-gray-900 antialiased"
          >
            About
          </Link>
          <Link
            href="#Award&Achivements"
            className="link link-hover no-underline text-white  block font-sans text-xl font-semibold tracking-normal text-blue-gray-900 antialiased"
          >
            Award & Achivements
          </Link>
          <Link
            href="#Award&Achivements"
            className="link link-hover no-underline  text-white block font-sans text-xl font-semibold tracking-normal text-blue-gray-900 antialiased"
          >
            Extra-curricular Activities
          </Link>
          <Link
            href="#Award&Achivements"
            className="link link-hover no-underline text-white  block font-sans text-xl font-semibold tracking-normal text-blue-gray-900 "
          >
            Skills
          </Link>
          <Link
            href="#Award&Achivements"
            className="link link-hover no-underline  text-white  block font-sans text-xl font-semibold tracking-normal text-blue-gray-900 antialiased"
          >
            MY Courses
          </Link>
        </div>

        {/* social icons and links................. */}

        <div className="flex md:flex-col  items-center gap-4 py-11">
          <div className="flex gap-3 ">
            <Link
              className="flex items-center gap-4 my-0"
              href={""}
              target="_blank"
            >
              <BsYoutube className="w-10 h-10 text-white" />
            </Link>
            <Link className="flex  my-0" href={""} target="_blank">
              <BsFacebook className="w-10 h-8 text-white" />
            </Link>
            <Link className="flex items-center  my-0" href={""} target="_blank">
              <AiFillInstagram className="w-10 h-10 text-white" />
            </Link>
          </div>
          <div className="flex gap-3 w-full justify-start ">
            <Link className="flex  my-0" href={""} target="_blank">
              <BsTwitter className="w-10 h-10 text-white" />
            </Link>
            <Link className="flex " href={"/"} target="_blank">
              {/* <Image src={linkedIn} width={40} height={70} alt='yt-logo' /> */}
              <BsLinkedin className="w-10 h-8 text-white" />
            </Link>
          </div>
        </div>

        {/* contact me  button */}

        <div className="">
          <div className="lg:mx-auto mt-6 flex flex-col  ">
            <Link href={"/#contact"}>
              <button className="w-44 font-sans font-bold p-3 border rounded bg-[#6597FF] mb-4">
                Contact me
              </button>
            </Link>
            <button className="w-44 p-3 border rounded font-sans font-semibold">
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
