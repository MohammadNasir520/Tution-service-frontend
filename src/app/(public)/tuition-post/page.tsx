"use client";

import FormSelectField from "@/components/Form/FormSelectField";
import TuitionPostCard from "@/components/tuitionPost/TuitionPostCard";
import { useGetAllTuitionPostQuery } from "@/redux/api/tuitionPostApi/tuitionPostApi";
import { Checkbox, DatePicker, Radio, Select } from "antd";

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

  const onChange = (checkedValues: boolean) => {
    console.log("checked = ", checkedValues);
  };

  const options = [
    { label: "All", value: "all" },
    { label: "Home", value: "Home" },
    { label: "Online", value: "Online" },
  ];

  const districtsOptions = [{ label: "Sirajgonj", value: "sirajgonj" }];

  return (
    <div className="min-h-screen ">
    {
      isOpen ===false &&  <div className="lg:hidden   w-10 h-10 p-5 flex justify-center items-center border border-black rounded-full ">
      <h1
        className=" flex justify-end"
        onClick={() => setIsOpen(!isOpen)}
        // onBlur={() => setIsOpen(!isOpen)}
      >
        Filter
      </h1>
    </div>
    }
      <div className="flex relative">
       
        {/* left side bar column */}
        <div
          className={`h-[70vh] w-64 lg:block lg:sticky  lg:top-16 bg-white  ${
            isOpen ? "fixed   left-0 top-15 h-[100vh] " : "hidden"
          } `}
        >
           <div onClick={()=>setIsOpen(false)} className="text-2xl text-red-500 md:hidden">
          X
        </div>
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
              <div className="">
                <h1>Search By Date</h1>
                <DatePicker
                //  onChange={onChange}
                />
              </div>
              <div className="">
                <h1>Tuition Type</h1>
                <Radio.Group
                  // onChange={onChange}
                  options={options}
                  defaultValue={["all"]}
                  optionType="button"
                />
              </div>
              <div className="">
                <h1>Tutor Preferance</h1>
                <Radio.Group
                  // onChange={onChange}
                  options={options}
                  defaultValue={["all"]}
                  optionType="button"
                />
              </div>
              <div>
                <h1>Select district</h1>
                <Select
                  defaultValue="lucy"
                  style={{ width: 200 }}
                  // onChange={handleChange}
                  options={districtsOptions}
                />
              </div>
              <div>
                <h1>Select Medium</h1>

                <Select
                  defaultValue="lucy"
                  style={{ width: 200 }}
                  // onChange={handleChange}
                  options={districtsOptions}
                />
              </div>
              <div>
                <h1>Select Class</h1>
                <Select
                  defaultValue="lucy"
                  style={{ width: 200 }}
                  // onChange={handleChange}
                  options={districtsOptions}
                />
              </div>
            </form>
          </div>
        </div>

        {/* Tuition Posts in right */}
        <div className="lg:flex-1 ">
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
