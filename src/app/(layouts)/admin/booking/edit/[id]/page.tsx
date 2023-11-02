"use client";

import DateTimePicker from "@/components/Form/DteTimePicker/DateTimePicker";
import FormDatePicker from "@/components/Form/FormDatePicker";

import {
  useCreateBookingMutation,
  useGetSingleBookingQuery,
  useUpdateSingleBookingMutation,
} from "@/redux/api/bookingApi/bookingApi";
import { useGetSingleServiceQuery } from "@/redux/api/serviceApi/serviceApi";
import { Button, message } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const Booking = ({ params }: any) => {
  const { data: booking } = useGetSingleBookingQuery(params?.id);

  const [updateSingleBooking, { error }] = useUpdateSingleBookingMutation();

  const router = useRouter();
  const [bookingData, setBookingData] = useState({
    serviceId: params?.id,
    startTime: booking?.startTime,
    endTime: booking?.endTime,
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
    const res = await updateSingleBooking({
      data: bookingData,
      id: params?.id,
    });
    // @ts-ignore
    if (res?.data?.id) {
      message.success("booking successfull");
      router.push("/admin/booking");
    }
  };

  return (
    <div className="text-lg  lg:min-h-[500px] w-full flex  flex-col justify-center items-center">
      <div className=" min-h-[100px] lg:min-w-[300px] justify-center bg-slate-30 flex flex-col ">
        <h1 className="">Select Your Time slot to Booking</h1>
        <DateTimePicker
          bookingData={bookingData}
          setBookingData={setBookingData}
          startTime={booking?.startTime}
          endTime={booking?.endTime}
        ></DateTimePicker>

        <Button
          onClick={() => handleBooking()}
          className="w-30 mt-3"
          type="primary"
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default Booking;
