"use client";

import DateTimePicker from "@/components/Form/DteTimePicker/DateTimePicker";
import FormSelectField from "@/components/Form/FormSelectField";
import SingleDateTimePicker from "@/components/Form/SingleDateTimePicker/SingleDateTimePicker";

import Table from "@/components/ui/Table/Table";
import { useUpdateSingleAdminMutation } from "@/redux/api/adminApi/adminApi";
import {
  useDeleteBookingMutation,
  useGetAllBookingQuery,
  useUpdateSingleBookingMutation,
} from "@/redux/api/bookingApi/bookingApi";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "@/redux/api/userApi/userApi";
import { Button, Select, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Admin = () => {
  const [bookingData, setBookingData] = useState({
    serviceId: "",
    field: "",
  });

  const { data: bookings, isLoading } = useGetAllBookingQuery(undefined);
  const [updateSingleBooking] = useUpdateSingleBookingMutation();
  const [deleteBooking, { error }] = useDeleteBookingMutation();

  const handleUpdateBookingPendingStatus = async (
    value: string,
    id: string
  ) => {
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
      title: "User ",
      render: function (data: any) {
        return (
          <>
            <Image
              width={60}
              height={60}
              src={data?.user?.profileImg}
              alt="pic"
            ></Image>
            <p className="text-center">{data.user.name}</p>
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
      title: "Manage status",
      render: function (data: any) {
        return (
          <div className="">
            <Select
              onChange={(value) =>
                handleUpdateBookingPendingStatus(value, data?.id)
              }
              defaultValue={data?.status}
              style={{ width: 120 }}
              loading={isLoading}
              options={SelectOptions}
            />
          </div>
        );
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
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Table columns={columns} dataSource={bookings} loading={isLoading}></Table>
  );
};

export default Admin;
