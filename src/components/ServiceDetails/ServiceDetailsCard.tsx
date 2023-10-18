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
      <div className="w-full  lg:h-[300px] flex  justify-center mt-6 ">
        <div className="relative flex  flex-col w-full justify-center max-w-[48rem] md:flex-row rounded-sm bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 md:w-3/5  flex justify-center shrink-0 overflow-hidden rounded-sm rounded-r-none bg-white bg-clip-border text-gray-700">
            {/* <img src={data?.data?.image} alt="image" className="  max-w-full  " /> */}
            <Image
              src={service?.image}
              width={600}
              height={400}
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

            <div className="flex">
              <a className="inline-block" href="#">
                <button
                  className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Booking
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* ..........................modal....................... */}

        <div>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto lg:w-5/12">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-1  rounded-t">
                      <h3 className="text-lg font-semibold mx-3">
                        Want to Delete service?
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}

                    <div className="px-4 py-3">
                      <h1>After deleting, the service will not be undone</h1>
                    </div>

                    {/*footer*/}
                    <div className="flex items-center justify-end  rounded-b">
                      <button
                        onClick={() => setShowModal(false)}
                        className=" text-green-600 active:bg-emerald-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        close
                      </button>
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
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
