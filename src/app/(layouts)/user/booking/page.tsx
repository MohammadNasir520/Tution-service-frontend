"use client";

import SingleDateTimePicker from "@/components/Form/SingleDateTimePicker/SingleDateTimePicker";

import Table from "@/components/ui/Table/Table";
import {
  useDeleteBookingMutation,
  useGetAllBookingQuery,
  useUpdateSingleBookingMutation,
} from "@/redux/api/bookingApi/bookingApi";

import { Button, Select, message } from "antd";
import Image from "next/image";
import { useState } from "react";

const Admin = () => {
  const [bookingData, setBookingData] = useState({
    serviceId: "",
    field: "",
  });

  console.log(bookingData);

  const { data: bookings, error: allBookingError } =
    useGetAllBookingQuery(undefined);

  if (allBookingError) {
    console.log(allBookingError);
    // @ts-ignore
    message.error(allBookingError?.data?.message);
  }
  const [updateSingleBooking, { isLoading }] = useUpdateSingleBookingMutation();
  const [deleteBooking, { error }] = useDeleteBookingMutation();

  const handleUpdateBookingPendingStatus = async (
    value: string,
    id: string
  ) => {
    console.log(value, id);
    const res = await updateSingleBooking({ data: { status: value }, id });
    if (res) {
      message.success("status updated successfully");
    }
    if (error) {
      // @ts-ignore
      message.error(error?.data?.message);
    }
  };

  const handleDelete = async (id: string) => {
    const res = await deleteBooking(id);
    if (res) {
      message.success("deleted successfully");
    }
    if (error) {
      // @ts-ignore
      message.error(error?.data?.message);
    }
  };

  const SelectOptions = [
    { label: "pending", value: "pending" },
    { label: "accepted", value: "accepted" },
    { label: "rejected", value: "rejected" },
  ];

  const columns = [
    {
      title: "Services",
      render: function (data: any) {
        return (
          <>
            <Image
              width={60}
              height={60}
              src={data?.user?.profileImg}
              alt="pic"
            ></Image>
            <p className="text-center">{data?.service?.title}</p>
          </>
        );
      },
    },

    {
      title: "Service",
      render: function (data: any) {
        return (
          <>
            <p>{data.service.title}</p>
          </>
        );
      },
    },

    {
      title: "Price",
      render: function (data: any) {
        return (
          <>
            <p>{data.service.price} tk</p>
          </>
        );
      },
    },

    {
      title: "start Time & Month",
      render: function (data: any) {
        return (
          <>
            {/* <DateTimePicker
              bookingData={bookingData}
              setBookingData={setBookingData}
              startTime={data?.startTime}
              endTime={data?.endTime}
            ></DateTimePicker> */}
            <SingleDateTimePicker
              field={"startTime"}
              id={data?.id}
              defaultValue={data?.startTime}
            ></SingleDateTimePicker>
          </>
        );
      },
    },
    {
      title: "End Time & Month",
      render: function (data: any) {
        return (
          <>
            {/* <DateTimePicker
              bookingData={bookingData}
              setBookingData={setBookingData}
              startTime={data?.startTime}
              endTime={data?.endTime}
            ></DateTimePicker> */}
            <SingleDateTimePicker
              field={"endTime"}
              id={data?.id}
              defaultValue={data?.startTime}
            ></SingleDateTimePicker>
          </>
        );
      },
    },

    {
      title: "Booking status",
      render: function (data: any) {
        console.log(data);
        return <div className="">{data?.status}</div>;
      },
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <div className="">
            <Button
              onClick={() => handleDelete(data?.id)}
              type="primary"
              danger
            >
              Cancel
            </Button>
          </div>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={bookings}></Table>;
};

export default Admin;
