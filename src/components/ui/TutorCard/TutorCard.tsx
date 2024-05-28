import Image from "next/image";
import Link from "next/link";
import React from "react";

const TutorCard = () => {
  return (
    <div>
      <div className=" flex justify-center items-center flex-col">
        <div className="px-2 flex justify-center">
          <div className="relative flex w-full md:min-h-[200px] my-3  md:max-w-[18rem] lg:max-w-[20rem]  lg:min-h-[300px] flex-col rounded-lg bg-gray-100 border text-gray-700  ">
            <div className="relative    overflow-hidden  bg-blue-gray-500 bg-clip-border text-white  ">
              <div className="flex justify-center   h-[200px] w-full">
                <Image
                  src={"https://i.ibb.co/wJm2qJy/Nasir-Formal-Pic.jpg"}
                  width={200}
                  height={250}
                  alt="pic"
                  //   layout="responsive"
                ></Image>
              </div>
            </div>
            <div className="">
              <div className="my-2 flex flex-col items-center justify-center">
                <h5 className="block hover:text-blue-500   text-xl font-bold leading-snug tracking-normal text-black antialiased">
                  Name
                </h5>

                <h5 className="block  my-1   text-base font-semibold leading-snug tracking-normal text-black antialiased">
                  <span className="hover:text-blue-500">University</span>
                </h5>
              </div>
              <hr />
              <div className="px-2   hidden">
                <h4>Education</h4>
              </div>
              <div className="my-4 flex gap-2 items-center justify-start mx-5">
                <h5 className="flex  justify-center items-center gap-   text-base font-semibold leading-snug tracking-normal text-black antialiased">
                  <span className="hover:text-blue-500">Location</span>{" "}
                </h5>

                <div className="flex gap-1 cursor-pointer"></div>
              </div>
            </div>
            <div className="mx-5 flex justify-center items-center">
              <Link href={`/serviceDetails/`}>
                <button className="w-60 flex gap-2 justify-center items-center    font-semibold p-1   bg-white text-black hover:bg-blue-600 border border-blue-500 rounded hover:text-white mb-4">
                  Go For Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
