"use client";

import ServiceCard from "@/components/ui/ServiceCard/ServiceCard";
import SmallSpinner from "@/components/ui/Spinner/SmallSpinner";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi/serviceApi";
import { Pagination } from "antd";
import { useState } from "react";

const AvailableServices = () => {
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  console.log(query);
  query["searchTerm"] = searchTerm;

  const { data, isLoading } = useGetAllServiceQuery({
    ...query,
    status: "available",
  });

  const services = data?.data;
  const meta = data?.meta;

  const HandleSubmit = (event: any) => {
    event.preventDefault();
  };

  if (isLoading) {
    return <SmallSpinner></SmallSpinner>;
  }
  return (
    <div className="w-full">
      {/* search and filter start */}
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col md:flex-row w-full justify-center ">
          <div className=" mt-3 mb-8 flex   ">
            <div className="flex flex-col-reverse ">
              <div className=" flex space-x-2 mt-2"></div>

              {/* search Input */}
              <form onSubmit={HandleSubmit}>
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
                  <button
                    className="   !absolute   right-1 top-1 z-10 select-none rounded bg-gray-900 py-2 px-4 text-center align-middle  text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none cursor-pointer !important"
                    type="submit"
                  >
                    search
                  </button>
                  <label className="   before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-800 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-slate-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Search services
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="ml-3 flex justify-center ">
            <div>
              {searchTerm ? (
                <button
                  onClick={() => {
                    setSearchTerm("");
                  }}
                  className="middle none center bg-green-800  px-4 py-2 mt-4   text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  clear search
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>

      {/* serch and filter end */}

      {/* services */}
      <div>
        {services?.length == 0 ? (
          <div className="lg:h-screen grid place-items-center   font-semibold text-xl w-full">
            <h1> No services Found </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  mx-5 place-items-center mt-3">
            {services?.map((service: any) => (
              <ServiceCard key="" service={service}></ServiceCard>
            ))}
          </div>
        )}
      </div>
      {/* <Pagination
        showQuickJumper
        defaultCurrent={2}
        total={500}
        onChange={(page, number) =>
          
        }
      /> */}
    </div>
  );
};

export default AvailableServices;
