"use client";

import Table from "@/components/ui/Table/Table";

import {
  useDeleteUserMutation,
  useGetAllUserQuery,
  useUpdateSingleUserMutation,
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
  const { data: admins, isLoading } = useGetAllUserQuery(undefined);
  const [deleteUser, { error }] = useDeleteUserMutation();
  const [updateSingleUser] = useUpdateSingleUserMutation();

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
  const handleUpdateRole = async (value: string, id: string) => {
    const res = await updateSingleUser({ data: { role: value }, id });
    if (res) {
      message.success("role updated successfully");
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
            <Image
              width={60}
              height={60}
              src={data.profileImg}
              alt="pic"
            ></Image>
          </>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Contact No",
      dataIndex: "contactNo",
    },
    {
      title: "Manage Role",
      render: function (data: any) {
        return (
          <div className="">
            <Select
              onChange={(value) => handleUpdateRole(value, data?.id)}
              defaultValue={data.role}
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
              <Button>edit</Button>
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

  return (
    <Table columns={columns} dataSource={admins} loading={isLoading}></Table>
  );
};

export default Admin;
