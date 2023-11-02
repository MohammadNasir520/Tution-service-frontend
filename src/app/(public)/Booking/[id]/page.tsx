"use client";

import DateTimePicker from "@/components/Form/DteTimePicker/DateTimePicker";
import ServiceDetailsCard from "@/components/ui/ServiceDetails/ServiceDetailsCard";
import { useCreateBookingMutation } from "@/redux/api/bookingApi/bookingApi";
import { useGetSingleServiceQuery } from "@/redux/api/serviceApi/serviceApi";
import { Button, message } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const Booking = ({ params }: any) => {
  const { data: service } = useGetSingleServiceQuery(params?.id);

  const [createBooking, { error }] = useCreateBookingMutation();
  console.log(error);
  const router = useRouter();
  const [bookingData, setBookingData] = useState({
    serviceId: params?.id,
    startTime: "",
    endTime: "",
  });

  const handleBooking = async () => {
    // @ts-ignore
    if (!bookingData.startTime) {
      message.error("startTime is required");
    }
    // @ts-ignore
    if (!bookingData.endTime) {
      message.error("end Time is required");
    }
    const res = await createBooking(bookingData);
    // @ts-ignore
    if (res?.data?.id) {
      message.success("booking successfull");
      router.push("/");
    }
    console.log("res", res);
    console.log("bookin");
  };
  console.log("bookingdata", bookingData);
  return (
    <div className="text-lg h-screen w-full flex  flex-col justify-center items-center">
      <ServiceDetailsCard params={params}></ServiceDetailsCard>
      <div className=" min-h-[100px] lg:min-w-[300px] justify-center bg-slate-30 flex flex-col ">
        <h1 className="">Select Your Time slot to Booking</h1>
        <DateTimePicker
          setBookingData={setBookingData}
          bookingData={bookingData}
        ></DateTimePicker>
        <Button
          onClick={() => handleBooking()}
          className="w-30 mt-3"
          type="primary"
        >
          Pay & conFirm
        </Button>
      </div>
    </div>
  );
};

export default Booking;
