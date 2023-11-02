"use client";

import Table from "@/components/ui/Table/Table";
import {
  useDeleteAdminMutation,
  useGetAllAdminQuery,
  useUpdateSingleAdminMutation,
} from "@/redux/api/adminApi/adminApi";
import { Button, Select, message } from "antd";
import Image from "next/image";
import Link from "next/link";

const Admin = () => {
  const { data: admins, isLoading } = useGetAllAdminQuery(undefined);

  const [deleteAdmin, { error }] = useDeleteAdminMutation();
  const [updateSingleAdmin] = useUpdateSingleAdminMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteAdmin(id);
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
        // console.log(data);
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
            <Link href={`/super_admin/admin/edit/${data.id}`}>
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

  return (
    <Table columns={columns} dataSource={admins} loading={isLoading}></Table>
  );
};

export default Admin;
