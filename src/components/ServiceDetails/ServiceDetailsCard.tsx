"use client";
import { useGetSingleServiceQuery } from "@/redux/api/serviceApi/serviceApi";
import Image from "next/image";
import { useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const ServiceDetailsCard = ({ params }: any) => {
  const [showModal, setShowModal] = useState(false);

  const { data: service } = useGetSingleServiceQuery(params?.id);
  console.log(service);

  return (
    <>
      <div className="w-full  lg:h-[350px] flex  justify-center mt-2 ">
        <div className="relative flex  flex-col w-full justify-center max-w-[48rem] md:flex-row rounded-sm bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 md:w-3/5  flex justify-center shrink-0 overflow-hidden rounded-sm rounded-r-none bg-white bg-clip-border text-gray-700">
            {/* <img src={data?.data?.image} alt="image" className="  max-w-full  " /> */}
            <Image
              src={service?.image}
              width={600}
              height={500}
              alt="pic"
            ></Image>
          </div>
          <div className="p-6 flex flex-col justify-center w-full">
            {/* service name */}
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {service?.title}
            </h4>

            <div className=" flex ">
              <h3 className="mb-1 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {service?.price}
              </h3>
              <TbCurrencyTaka className="w-6 h-6 " /> / month
            </div>
            <h4 className="mb-2 block font-sans text-base font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {service?.category}
            </h4>
          </div>
        </div>

        {/* ..........................modal....................... */}
      </div>
      <div className="min-h-[50px] bg-gray-100 text-center lg:w-1/2 mx-auto py-3">
        {
          <h4 className=" block font-sans text-base font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {service?.description}
          </h4>
        }
      </div>
    </>
  );
};

export default ServiceDetailsCard;
