"use client";
import { useGetSinglelatestUpdateQuery } from "@/redux/api/latestUpdateApi/latestUpdateApi";
import Image from "next/image";

import React from "react";
import SmallSpinner from "../Spinner/SmallSpinner";
import Link from "next/link";

const LatestUpdateDetailsCard = ({ params }: any) => {
  const id = params?.id;

  const { data: latestUpdate, isLoading } = useGetSinglelatestUpdateQuery(id);

  if (isLoading) {
    return (
      <div className="h-screen">
        <SmallSpinner></SmallSpinner>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="px-2 ">
          <div className="relative flex w-full  lg:w-[45rem] flex-col rounded-lg bg-gray-50 bg-clip-border text-gray-700 shadow-lg border">
            <div className="relative    overflow-hidden rounded bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <div className="flex justify-center  rounded h-[350px] w-full">
                <Image
                  src={latestUpdate?.image}
                  width={320}
                  height={400}
                  alt="pic"
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div className="">
              <div className="my-4 flex flex-col gap-2 px-3 items-center justify-center">
                <h5 className="block  text-xl font-bold leading-snug  text-black antialiased">
                  {latestUpdate?.title}
                </h5>
                <h5 className="block  text-base font-normal leading-relaxed  text-black antialiased text-justify">
                  {latestUpdate?.text}
                </h5>
                <Link href={`/#latestUpdate`}>
                  <p className="text-blue-600 mt-7">Back </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdateDetailsCard;
