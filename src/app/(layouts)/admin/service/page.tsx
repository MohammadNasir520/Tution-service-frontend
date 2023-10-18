"use client";

import Table from "@/components/ui/Table/Table";
import { categoryOptions, statusOptions } from "@/constant/options";
import { useUpdateSingleAdminMutation } from "@/redux/api/adminApi/adminApi";
import {
  useGetAllServiceQuery,
  useGetSingleServiceQuery,
  useUpdateSingleServiceMutation,
} from "@/redux/api/serviceApi/serviceApi";
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
  const { data: data } = useGetAllServiceQuery({});
  const ServiceData = data?.data;
  const meta = data?.meta;
  // console.log(data);
  const [deleteUser, { error }] = useDeleteUserMutation();
  const [updateSingleService, { isLoading }] = useUpdateSingleServiceMutation();

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
  const handleUpdateCategory = async (value: string, id: string) => {
    console.log(value, id);
    const res = await updateSingleService({ data: { category: value }, id });
    if (res) {
      message.success("Category updated successfully");
    }
    if (error) {
      // @ts-ignore
      message.error(error?.data?.message);
    }
  };
  const handleUpdateStatus = async (value: string, id: string) => {
    console.log(value, id);
    const res = await updateSingleService({ data: { status: value }, id });
    if (res) {
      message.success("status updated successfully");
    }
    if (error) {
      // @ts-ignore
      message.error(error?.data?.message);
    }
  };

  const SelectOptions = [
    { label: "admin", value: "admin" },
    { label: "user", value: "user" },
  ];

  const columns = [
    {
      title: "Image",
      render: function (data: any) {
        return (
          <>
            <Image width={60} height={60} src={data.image} alt="pic"></Image>
          </>
        );
      },
    },
    {
      title: "title",
      dataIndex: "title",
    },
    {
      title: "price",
      dataIndex: "price",
    },
    // {
    //   title: "description",
    //   dataIndex: "description",
    // },
    {
      title: "Manage Category",
      render: function (data: any) {
        console.log(data);
        return (
          <div className="">
            <Select
              onChange={(value) => handleUpdateCategory(value, data?.id)}
              defaultValue={data?.category}
              style={{ width: 120 }}
              loading={isLoading}
              options={categoryOptions}
            />
          </div>
        );
      },
    },
    {
      title: "Manage status",
      render: function (data: any) {
        console.log(data);
        return (
          <div className="">
            <Select
              onChange={(value) => handleUpdateStatus(value, data?.id)}
              defaultValue={data?.status}
              style={{ width: 120 }}
              loading={isLoading}
              options={statusOptions}
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
            <Link href={`/admin/service/edit/${data.id}`}>
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

  return <Table columns={columns} dataSource={ServiceData}></Table>;
};

export default Admin;
