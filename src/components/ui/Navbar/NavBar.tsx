"use client";

import Link from "next/link";

import { useState } from "react";

import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";
import { getUserInfo, removeUserInfo } from "@/services/authServices";
import { authKey } from "@/constant/storage-key";
import dynamic from "next/dynamic";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { role } = getUserInfo() as any;

  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Available-services",
      href: "/services",
    },
    {
      title: "Upcoming-services",
      href: "/upcoming-services",
    },
    {
      title: "latestUpdate",
      href: "/#latestUpdate",
    },

    {
      title: "DashBoard",
      href: `/profile`,
    },
  ];

  const handleSignOut = () => {
    removeUserInfo(authKey);
    // router.push("/login");
    router.push(`/login`);
  };

  const signOption = (
    <div className=" lg:flex">
      {role ? (
        <div
          onClick={() => handleSignOut()}
          className={`cursor-pointer ${
            isMenuOpen
              ? "block px-1 py-1 mb-2 leading-loose text-center text-white  bg-blue-600 hover:bg-blue-700  rounded-xl  text-base   font-semibold"
              : "hidden lg:inline-block py-1 px-1 bg-blue-500 hover:bg-blue-600  text-white font-semibold rounded-sm transition duration-200 "
          }`}
        >
          SignOut
        </div>
      ) : (
        <>
          <Link
            href={"/login"}
            onClick={() => removeUserInfo(authKey)}
            className={`${
              isMenuOpen
                ? "block px-1 py-1 mb-2 leading-loose text-center text-white  bg-blue-600 hover:bg-blue-700  rounded-xl  text-base   font-semibold"
                : "     hidden lg:inline-block py-1 px-1 bg-blue-500 hover:bg-blue-600  text-white font-semibold rounded-sm transition duration-200 "
            }`}
          >
            login
          </Link>
          <Link
            href={"/signup"}
            onClick={() => removeUserInfo(authKey)}
            className={`${
              isMenuOpen
                ? "block mx-3  px-1 py-1 mb-2 leading-loose text-center text-white  bg-blue-600 hover:bg-blue-700  rounded-xl  text-base   font-semibold"
                : "     mx-3 hidden lg:inline-block py-1 px-1 bg-blue-500 hover:bg-blue-600  text-white font-semibold rounded-sm transition duration-200 "
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
          <div>
            <Link href={"/"} className="text-xl font-semibold leading-none">
              <h4 className=" block   text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Tuition Media
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
          <div className="hidden  flex-1  flex justify-center items-center  text-white lg:flex lg:items-center lg:w-auto lg:space-x-4 text-lg    font-semibold ">
            {navItems?.map((navItem, i) => (
              <div key={i}>
                <Link
                  onClick={() => setMenuOpen(false)}
                  href={navItem?.href}
                  className={`  hover:border-b-2 border-[#c0c2c7]
                                         ${
                                           pathname === navItem.href
                                             ? "text-teal-500 border-b-2   border-[#c0c2c7] font-semibold "
                                             : `${
                                                 isMenuOpen
                                                   ? "lg:block p-4 text-lg   font-semibold text-white hover:bg-blue-50  rounded"
                                                   : "  text-white  "
                                               }  `
                                         }`}
                >
                  {navItem.title}
                </Link>
              </div>
            ))}
          </div>
          <div className="hidden lg:block  text-lg   font-semibold">
            {signOption}
          </div>
          {/* <div className="flex items-center gap-2  ml-3">
            <div className="rounded-full border-2 border-blue-gray-600">
              <Image
                src={"/"}
                height={40}
                width={40}
                alt="pp"
                className="rounded-full  object-cover object-center"
              ></Image>
            </div>
          </div> */}
        </nav>

        {/* small screen................................ */}
        <div
          className={`navbar-menu  relative z-50  ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed bg-black top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto ">
            <div className="flex items-center mb-8">
              <div className="flex items-center gap-2  ml-3">
                <div className="rounded-full border-2 border-blue-gray-600">
                  <Image
                    src={""}
                    height={30}
                    width={30}
                    alt="pp"
                    className="rounded-full  object-cover object-center"
                  ></Image>
                </div>

                <Link href={"/"} className="text-xl font-semibold leading-none">
                  <h4 className=" block   text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Tuition Media
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
              <ul className=" text-base   font-semibold ">
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
                                ? "block p-2 text-lg   font-semibold text-white hover:bg-blue-50 hover:text-black rounded"
                                : "text-lg   text-white hover:text-gray-500 "
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
// export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
