"use client";

import TuitionPostCard from "@/components/tuitionPost/TuitionPostCard";
import { useGetAllTuitionPostQuery } from "@/redux/api/tuitionPostApi/tuitionPostApi";
import React, { useState } from "react";

const TuitionPost = () => {
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  query["searchTerm"] = searchTerm;
  // query["studentGender"] = gender;
  // console.log(query);
  const { data: allTuitionPost, isLoading } = useGetAllTuitionPostQuery({
    ...query,
  });
  console.log(allTuitionPost);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen ">
      <h1
        className="lg:hidden flex justify-end"
        onClick={() => setIsOpen(!isOpen)}
      >
        Filter
      </h1>
      <div className="flex">
        <div
          className={`w-64 ${
            isOpen ? "block absolute top-0 left-0 bottom-0 z-50 " : "hidden"
          } lg:block sticky top-10 `}
        >
          <h1>Advance Filter</h1>
          <hr />
          <div className="flex flex-col-reverse ">
            <div className=" flex space-x-2 mt-2"></div>

            {/* search Input */}
            <form>
              <div className="relative flex h-10 w-full min-w-[200px] ">
                <input
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                  type="text"
                  name="searchText"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20   text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  required
                />

                <label className="   before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-800 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-slate-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Search by Job ID
                </label>
              </div>
              {/* <div className="relative flex h-10 w-full min-w-[200px] ">
                <input
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  type="text"
                  name="searchText"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20   text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  required
                />

                <label className="   before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-800 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-slate-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Search by searchTerm
                </label>
              </div> */}
            </form>
          </div>
        </div>
        <div className="flex-1 sticky top-0">
          <h1 className="text-center font-bold">
            Total: {allTuitionPost?.length}
          </h1>
          {allTuitionPost?.map((tuitionPost: any) => (
            <div key={tuitionPost.id}>
              <TuitionPostCard tuitionPost={tuitionPost} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TuitionPost;
