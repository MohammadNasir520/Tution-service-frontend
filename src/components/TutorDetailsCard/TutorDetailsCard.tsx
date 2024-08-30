import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const TutorDetailsCard = () => {
  return (
    <div className=" grid grid-cols-12 gap-4 my-4">
      <div className="col-span-3 border h-[500px] ">
        <div className="flex justify-center">
          <Image
            src={"/images (2).jpeg"}
            width={200}
            height={200}
            alt="tutorImage"
            className=" rounded-full p-3"
          ></Image>
        </div>
        <div>
          <div className="flex justify-center  ">
            <div>
              <h1>Nasir Ahsan</h1>
              <div className="flex gap-2">
                <div className="flex gap-1">
                  <FaStar className={"text-yellow-400"} />
                  <h1>5.00</h1>
                </div>
                (5 reviews)
              </div>
              <div>Total views: 78</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6 border">b</div>
      <div className="col-span-3 border">c</div>
    </div>
  );
};

export default TutorDetailsCard;
