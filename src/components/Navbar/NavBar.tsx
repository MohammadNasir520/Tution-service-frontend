"use client";

import Link from "next/link";

import { useState } from "react";

import Image from "next/image";

import { usePathname } from "next/navigation";

const user = {
  _id: 1,
};

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: " About",
      href: "/#about",
    },

    {
      title: "Contact",
      href: "/#contact",
    },
    {
      title: "DashBoard",
      href: "/dashboard",
    },
  ];

  const signOption = (
    <div className=" lg:flex">
      {user?._id ? (
        <Link
          href={"/"}
          className={`${
            isMenuOpen
              ? "block px-1 py-1 mb-2 leading-loose text-center text-white  bg-blue-600 hover:bg-blue-700  rounded-xl  text-base font-sans font-semibold"
              : "  font-sans  hidden lg:inline-block py-1 px-1 bg-blue-500 hover:bg-blue-600  text-white font-semibold rounded-sm transition duration-200 "
          }`}
        >
          SignOut
        </Link>
      ) : (
        <>
          <Link
            href={"/pages/Login"}
            className={`${
              isMenuOpen
                ? "block px-4 py-3 mb-3 text-gray-900   text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                : "hidden  text-xl lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-gray-900 font-semibold  rounded-xl transition duration-200 "
            }`}
          >
            Sign In
          </Link>
          <Link
            href={"/pages/SignUp"}
            className={`${
              isMenuOpen
                ? "block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                : "hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition duration-200 text-xl"
            }`}
          >
            SignUp
          </Link>
        </>
      )}
    </div>
  );

  return (
    <div className="sticky inset-0 z-50 shadow-sm">
      <div className=" bg-black w-full text-white ">
        <nav className=" py-2  w-full flex justify-between items-center">
          <div className="flex items-center gap-2  ml-3">
            <div className="rounded-full border-4 border-blue-gray-600">
              <Image
                src={"/"}
                height={50}
                width={50}
                alt="pp"
                className="rounded-full  object-cover object-center"
              ></Image>
            </div>

            <Link href={"/"} className="text-xl font-semibold leading-none">
              <h4 className=" block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Nasir
              </h4>
            </Link>
          </div>

          <div
            onClick={() => setMenuOpen(!isMenuOpen)}
            className={`${isMenuOpen ? "hidden" : "block"}  lg:hidden`}
          >
            <button className="navbar-burger flex items-center justify-end text-white p-3">
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>open menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>

          {/* large screen Navbar options............... */}
          <div></div>
          <div className="hidden  flex-1  flex justify-center items-center  text-white lg:flex lg:items-center lg:w-auto lg:space-x-4 text-lg font-sans  font-semibold ">
            {navItems?.map((navItem, i) => (
              <div key={i}>
                <Link
                  onClick={() => setMenuOpen(false)}
                  href={navItem?.href}
                  className={`  hover:underline border-b-2 border-[#c0c2c7]
                                         ${
                                           pathname === navItem.href
                                             ? "text-teal-500 border-b-2 underline  border-[#c0c2c7] font-semibold "
                                             : `${
                                                 isMenuOpen
                                                   ? "lg:block p-4 text-lg font-sans font-semibold text-white hover:bg-blue-50  rounded"
                                                   : "font-sans text-white  "
                                               }  `
                                         }`}
                >
                  {navItem.title}
                </Link>
              </div>
            ))}
          </div>
          <div className="hidden lg:block  text-lg font-sans font-semibold">
            {signOption}
          </div>
        </nav>
        <div
          className={`navbar-menu  relative z-50  ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed bg-black top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto ">
            <div className="flex items-center mb-8">
              <div className="flex items-center gap-2  ml-3">
                <div className="rounded-full border-4 border-blue-gray-600">
                  <Image
                    src={""}
                    height={50}
                    width={50}
                    alt="pp"
                    className="rounded-full  object-cover object-center"
                  ></Image>
                </div>

                <Link href={"/"} className="text-xl font-semibold leading-none">
                  <h4 className=" block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    MD Nasir Uddin
                  </h4>
                </Link>
              </div>
              <Link
                href={"/"}
                className="mr-auto text-3xl text-white font-bold leading-none"
              ></Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="navbar-close"
              >
                <svg
                  className="h-6 w-6 text-white cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              {/* small screen navbar options........................................... */}
              <ul className=" text-base font-sans font-semibold ">
                {navItems?.map((navItem, i) => (
                  <li key={i}>
                    <Link
                      onClick={() => setMenuOpen(false)}
                      href={navItem?.href}
                      className={
                        pathname === ""
                          ? "text-teal-500 font-semibold p-4"
                          : `${
                              isMenuOpen
                                ? "block p-2 text-lg font-sans font-semibold text-white hover:bg-blue-50 hover:text-black rounded"
                                : "text-lg font-sans text-white hover:text-gray-500 "
                            }  `
                      }
                    >
                      {navItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6"> {signOption}</div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
