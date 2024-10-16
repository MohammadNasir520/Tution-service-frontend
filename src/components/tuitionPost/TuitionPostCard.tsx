"use client";

import { EnumUserRole } from "@/constant/enums";
import { getUserInfo } from "@/services/authServices";
import { Button, Radio } from "antd";
import Link from "next/link";
import React from "react";
import { MdLocationPin } from "react-icons/md";

const TuitionPostCard = ({ tuitionPost }: { tuitionPost: any }) => {
  const {
    id,
    medium,
    jobId,
    location,
    createdAt,
    salary,
    tuitionType,
    numberOfStudent,
    tutorGender,
    tutoringStartTime,
    tutoringEndTime,

    subject,
    days,
    studentGender,
    className,
  } = tuitionPost;

  const { role } = getUserInfo() as any;
  return (
    <div className="h-[350px]  lg:w-10/12 w-full  bg-slate-200 py-3 px-8 mt-7 space-y-4  mx-auto rounded-sm">
      <div className="space-y-2">
        <div className="flex justify-between mt-2">
          <div className="">
            <p className=" flex items-center gap-2  font-normal text-lg ">
              <MdLocationPin className="w-8 h-8" />
              {location}, Bangladesh
            </p>
          </div>
          <div>
            <Radio.Button value="default">Job Id:{jobId}</Radio.Button>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">
            Tutor Needed For {medium} Medium
          </h1>
        </div>
        <div className="flex  gap-5 z-0">
          <div className="border border-white">{tuitionType} Tutoring </div>
          {/* <Button type="primary">4 Hours ago</Button> */}
        </div>
      </div>

      <div className="flex justify-between">
        <div className="space-y-4">
          <div>
            
            <h1>Medium</h1>
            <h1 className="text-xl font-normal">{medium}</h1>
          </div>
          <div>
            
            <h1>Preferred Days</h1>
            <h1 className="text-xl font-normal">{days} Days Per week</h1>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            
            <h1>Class</h1>
            <h1 className="text-xl font-normal">{className}</h1>
          </div>
          <div>
            
            <h1>Subject </h1>
            <h1 className="text-xl font-normal">{subject}</h1>
          </div>
        </div>
        <div className="space-y-4">
          {/* <div>
            
            <h1>Preferred tutor</h1>
            <h1 className="text-xl font-normal">Preferred tutor Name</h1>
          </div> */}
          <div>
            
            <h1>Salary </h1>
            <h1 className="text-xl font-normal">{salary} Tk/Month</h1>
          </div>
          <div>
            
            <h1>Tutor Gender </h1>
            <h1 className="text-xl font-normal">{tutorGender}</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-6">
        <div>{createdAt}</div>
        <Link
          href={`/${
            role == EnumUserRole.Admin
              ? "admin/tuition-post/details"
              : "tuitionPostDetails"
          }/${id}`}
        >
          <Button type="primary">View Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default TuitionPostCard;
