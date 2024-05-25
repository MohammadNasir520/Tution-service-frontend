import { Button, Radio } from "antd";
import Link from "next/link";
import React from "react";
import { MdLocationPin } from "react-icons/md";

const TuitionPostDetails = ({ params }: { params: { id: string } }) => {
  return (
    <div className="min-h-screen">
      <div className="h-[350p]  lg:w-10/12 w-full  bg-slate-200 py-3 px-8 mt-7 space-y-4  mx-auto rounded-sm">
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-center">
            Tuition Needed For Medium Name
          </h1>

          <div className="flex justify-center gap-5">
            <h1>Job Id:123842</h1>
            <h1>Posted on Date and Time</h1>
          </div>

          <div className="flex justify-center mt-4">
            <div className="">
              <p className=" flex items-center gap-2  font-normal text-lg ">
                <MdLocationPin className="w-6 h-6" />
                Dinajpur , Bangladesh
              </p>
            </div>
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
            <div>
              {" "}
              <h1>Preferred Tutor Gender</h1>
              <h1 className="text-xl font-normal">Any Gender</h1>
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
            <div>
              {" "}
              <h1>Number of Student </h1>
              <h1 className="text-xl font-normal">01</h1>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              {" "}
              <h1>Student Gender</h1>
              <h1 className="text-xl font-normal">Male</h1>
            </div>
            <div>
              {" "}
              <h1>Tutoring Time</h1>
              <h1 className="text-xl font-normal">04:00 Pm to 05:00pm</h1>
            </div>
            <div>
              {" "}
              <h1>Salary </h1>
              <h1 className="text-xl font-normal">10000 Tk / Month</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-end my-6">
          <Link href={`/login`}>
            <Button type="primary">Apply</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TuitionPostDetails;
