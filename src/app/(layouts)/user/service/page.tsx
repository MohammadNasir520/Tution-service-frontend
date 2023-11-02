"use client";
import Table from "@/components/ui/Table/Table";
import { categoryOptions, statusOptions } from "@/constant/options";
import {
  useDeleteServiceMutation,
  useGetAllServiceQuery,
  useUpdateSingleServiceMutation,
} from "@/redux/api/serviceApi/serviceApi";
import { Button, Select, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface DataType {
  key: React.Key;
  name: string;
  email: string;
  contactNo: number;
  profileImg: string;
}

const Admin = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);

  const { data: data } = useGetAllServiceQuery({ ...query });
  const ServiceData = data?.data;
  const meta = data?.meta;

  query["size"] = size;
  query["page"] = page;

  const [deleteService, { error }] = useDeleteServiceMutation();
  const [updateSingleService, { isLoading }] = useUpdateSingleServiceMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteService(id);

    if (res) {
      message.success("deleted successfully");
    }
    if (error) {
      // @ts-ignore
      message.error(error?.data?.message);
    }
  };
  const handleUpdateCategory = async (value: string, id: string) => {
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
    const res = await updateSingleService({ data: { status: value }, id });
    if (res) {
      message.success("status updated successfully");
    }
    if (error) {
      // @ts-ignore
      message.error(error?.data?.message);
    }
  };

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

    {
      title: "Manage Category",
      render: function (data: any) {
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

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  return (
    <Table
      columns={columns}
      dataSource={ServiceData}
      showPagination={true}
      totalPages={meta?.total}
      onPaginationChange={onPaginationChange}
      showSizeChanger={true}
    ></Table>
  );
};

export default Admin;
