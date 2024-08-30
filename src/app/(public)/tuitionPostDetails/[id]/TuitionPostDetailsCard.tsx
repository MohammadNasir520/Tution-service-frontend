"use client";
import { EnumUserRole } from "@/constant/enums";
import { getUserInfo } from "@/services/authServices";
import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { MdLocationPin } from "react-icons/md";

const TuitionPostDetailsCard = ({ detailsData }: { detailsData: any }) => {
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
  } = detailsData;

  const { role } = getUserInfo() as any;

  return (
    <div className="min-h-screen">
      <div className="h-[350p]  lg:w-10/12 w-full  bg-slate-200 py-3 px-8 mt-7 space-y-4  mx-auto rounded-sm">
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-center">
            Tuition Needed For {medium} Name
          </h1>

          <div className="flex justify-center gap-5">
            <h1>Job Id:{jobId}</h1>
            <h1>Posted on {createdAt}</h1>
          </div>

          <div className="flex justify-center mt-4">
            <div className="">
              <p className=" flex items-center gap-2  font-normal text-lg ">
                <MdLocationPin className="w-6 h-6" />
                {location} , Bangladesh
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="space-y-4">
            <div>
              {" "}
              <h1>Medium</h1>
              <h1 className="text-xl font-normal">{medium}</h1>
            </div>
            <div>
              {" "}
              <h1>Preferred Days</h1>
              <h1 className="text-xl font-normal">{days} Days Per week</h1>
            </div>
            <div>
              {" "}
              <h1>Preferred Tutor Gender</h1>
              <h1 className="text-xl font-normal">{tutorGender}</h1>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              {" "}
              <h1>Class</h1>
              <h1 className="text-xl font-normal">{className}</h1>
            </div>
            <div>
              {" "}
              <h1>Subject </h1>
              <h1 className="text-xl font-normal">{subject}</h1>
            </div>
            <div>
              {" "}
              <h1>Number of Student </h1>
              <h1 className="text-xl font-normal">{numberOfStudent}</h1>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              {" "}
              <h1>Student Gender</h1>
              <h1 className="text-xl font-normal">{studentGender}</h1>
            </div>
            <div>
              {" "}
              <h1>Tutoring Time</h1>
              <h1 className="text-xl font-normal">
                {tutoringStartTime} Pm to {tutoringEndTime} pm
              </h1>
            </div>
            <div>
              {" "}
              <h1>Salary </h1>
              <h1 className="text-xl font-normal">{salary} Tk / Month</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-end my-6">
          {role == EnumUserRole.Admin || EnumUserRole.SuperAdmin ? (
            <Link href={`/admin/tuition-post/edit/${id}`}>
              <Button type="primary">Edit</Button>
            </Link>
          ) : (
            <Link href={`/login`}>
              <Button type="primary">Apply</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TuitionPostDetailsCard;
