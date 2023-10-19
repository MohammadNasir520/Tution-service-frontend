"use client";

import FormSelectField from "@/components/Form/FormSelectField";
import Table from "@/components/ui/Table/Table";
import { useUpdateSingleAdminMutation } from "@/redux/api/adminApi/adminApi";
import {
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

interface DataType {
  key: React.Key;
  name: string;
  email: string;
  contactNo: number;
  profileImg: string;
}

const Admin = () => {
  const { data: bookings } = useGetAllBookingQuery(undefined);

  const [deleteUser, { error }] = useDeleteUserMutation();
  const [updateSingleBooking, { isLoading }] = useUpdateSingleBookingMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteUser(id);
    if (res) {
      message.success("deleted successfully");
    }
    if (error) {
      // @ts-ignore
      message.error(error?.data?.message);
    }
  };
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

  // pending;
  // accepted;
  // rejected;

  const SelectOptions = [
    { label: "pending", value: "pending" },
    { label: "accepted", value: "accepted" },
    { label: "rejected", value: "rejected" },
  ];

  const columns = [
    {
      title: "User Pic",
      render: function (data: any) {
        return (
          <>
            <Image
              width={60}
              height={60}
              src={data?.user?.profileImg}
              alt="pic"
            ></Image>
          </>
        );
      },
    },
    {
      title: "user",
      render: function (data: any) {
        return (
          <>
            <p>{data.user.name}</p>
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
      title: "Contact No",
      dataIndex: "contactNo",
    },
    {
      title: "Manage status",
      render: function (data: any) {
        console.log(data);
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
          <div className="space-x-2">
            <Link href={`/admin/user/edit/${data.id}`}>
              <Button onClick={() => console.log(data)}>edit</Button>
            </Link>
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

  const tableData: DataType[] = [
    {
      key: "1",
      name: "John",
      email: "Brown",
      contactNo: 32,
      profileImg: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "John",
      email: "Brown",
      contactNo: 32,
      profileImg: "New York No. 1 Lake Park",
    },
    {
      key: "3",
      name: "John",
      email: "Brown",
      contactNo: 32,
      profileImg: "New York No. 1 Lake Park",
    },
  ];

  return <Table columns={columns} dataSource={bookings}></Table>;
};

export default Admin;
