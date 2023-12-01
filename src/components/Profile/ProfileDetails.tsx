"use client";
import { useGetSingleAdminQuery } from "@/redux/api/adminApi/adminApi";
import { getUserInfo } from "@/services/authServices";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { FaUserCheck } from "react-icons/fa6";
import SmallSpinner from "../ui/Spinner/SmallSpinner";
import { useGetProfileQuery } from "@/redux/api/profleApi/profileApi";

const ProfileDetails = () => {
  const { userId } = getUserInfo() as any;
  console.log(userId);
  const { data, isLoading } = useGetProfileQuery(userId);
  console.log(data);

  const { role } = getUserInfo() as any;

  if (isLoading) {
    return <SmallSpinner></SmallSpinner>;
  }

  return (
    <div>
      <div className="h-full ">
        <div>
          <section className=" background-radial-gradient mb-4  md:p-8 ">
            <div className="py-3 pr-3 text-center  lg:text-left">
              <div className="w-100 sm:max-w-2xl md:max-w-3xl lg:max-w-full xl:max-w-full">
                <div className="md:grid items-center  lg:grid-cols-11">
                  {/* column 1 */}
                  <div className="  mb-2 lg:mb-0 flex justify-start col-span-5  ">
                    <div className="">
                      <div className="relative flex justify-center  ">
                        {/* image */}
                        <Image
                          src={data?.profileImg}
                          width={300}
                          height={200}
                          layout="responsive"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  {/* column 2 */}
                  <div className="mt-12 lg:mt-0 col-span-5 ">
                    <h1 className="mt-0 mb-3 text-xl md:text-xl lg:text-4xl text-black font-bold tracking-tight  ">
                      {data?.name}
                    </h1>
                    <div className="flex items-center mt-0 mb-2 text-xl text-black font-bold tracking-tight md:text-xl xl:text-2xl ">
                      <AiOutlineMail className="w-10 h-6" />{" "}
                      <h1 className="mb-1">{data?.email}</h1>
                    </div>
                    <div className="flex items-center mt-0 mb-1 text-xl text-black font-bold tracking-tight md:text-xl xl:text-2xl ">
                      <FiPhoneCall className="w-10 h-w-10" />
                      <h1 className="mb-1">{data?.contactNo}</h1>
                    </div>
                    <div className="flex items-center mt-0 mb-1 text-base text-black font-normal tracking-tight md:text-xl xl:text-xl ">
                      <FaUserCheck className="w-10 h-w-10" />
                      <h1 className="mb-1">{data?.role}</h1>
                    </div>

                    <div className="">
                      <Link href={`/${role}/editProfile`}>
                        <button className="w-36   font-bold p-1   bg-white mb-4">
                          EDIT
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
