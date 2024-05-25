"use client";

import { Button, Radio } from "antd";
import React from "react";
import { MdLocationPin } from "react-icons/md";

const TuitionPostCard = () => {
  return (
    <div className="h-[350px]  lg:w-10/12 w-full  bg-slate-200 py-3 px-8 mt-7 space-y-4  mx-auto rounded-sm">
      <div className="space-y-2">
        <div className="flex justify-between mt-2">
          <div className="">
            <p className=" flex items-center gap-2  font-normal text-lg ">
              <MdLocationPin className="w-8 h-8" />
              Dinajpur , Bangladesh
            </p>
          </div>
          <div>
            <Radio.Button value="default">Job Id:123842</Radio.Button>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Tuition Post Title</h1>
        </div>
        <div className="flex  gap-5">
          <Button type="primary">Home Tutoring </Button>
          <Button type="primary">4 Hours ago</Button>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="space-y-4">
          <div>
            {" "}
            <h1>Medium</h1>
            <h1 className="text-xl font-normal">Medium Name</h1>
          </div>
          <div>
            {" "}
            <h1>Preferred Days</h1>
            <h1 className="text-xl font-normal">7 Days Per week</h1>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            {" "}
            <h1>Class</h1>
            <h1 className="text-xl font-normal">Class Name</h1>
          </div>
          <div>
            {" "}
            <h1>Subject </h1>
            <h1 className="text-xl font-normal">Subject Name</h1>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            {" "}
            <h1>Preferred tutor</h1>
            <h1 className="text-xl font-normal">Preferred tutor Name</h1>
          </div>
          <div>
            {" "}
            <h1>Salary </h1>
            <h1 className="text-xl font-normal">1000 Tk</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-6">
        <div>Date and Time</div>
        <div>
          <Button type="primary">View Details</Button>
        </div>
      </div>
    </div>
  );
};

export default TuitionPostCard;
