"use client";

import FormSelectField from "@/components/Form/FormSelectField";
import Table from "@/components/ui/Table/Table";
import {
  useDeleteAdminMutation,
  useGetAllAdminQuery,
  useUpdateSingleAdminMutation,
} from "@/redux/api/adminApi/adminApi";
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
  const { data: admins } = useGetAllUserQuery(undefined);

  const [deleteUser, { error }] = useDeleteUserMutation();
  const [updateSingleAdmin, { isLoading }] = useUpdateSingleAdminMutation();

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
    console.log(value, id);
    const res = await updateSingleAdmin({ data: { role: value }, id });
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
        console.log(data);
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

  return <Table columns={columns} dataSource={admins}></Table>;
};

export default Admin;
