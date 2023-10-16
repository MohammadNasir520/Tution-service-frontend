"use client";

import Table from "@/components/ui/Table/Table";
import {
  useDeleteAdminMutation,
  useGetAllAdminQuery,
} from "@/redux/api/adminApi/adminApi";
import { Button, message } from "antd";

interface DataType {
  key: React.Key;
  name: string;
  email: string;
  contactNo: number;
  profileImg: string;
}

const Admin = () => {
  const { data } = useGetAllAdminQuery(undefined);
  console.log("admins", data?.data);
  const admins = data?.data;

  const [deleteAdmin, { error }] = useDeleteAdminMutation();

  const handleDelete = (id: string) => {
    deleteAdmin(id);
    if (error) {
      // @ts-ignore
      message.error(error?.data?.message);
    }
  };
  const columns = [
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
      title: "Action",
      render: function (data: any) {
        return (
          <div className="space-x-2">
            <Button onClick={() => console.log(data)}>edit</Button>
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
