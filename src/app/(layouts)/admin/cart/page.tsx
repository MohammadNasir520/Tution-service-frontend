"use client";

import Table from "@/components/ui/Table/Table";
import {
  useDeletecartMutation,
  useGetAllCartQuery,
} from "@/redux/api/cartApi/cartApi";

import { Button, message } from "antd";
import Image from "next/image";

const Cart = () => {
  const { data: cart } = useGetAllCartQuery(undefined);

  const [deletecart, { error }] = useDeletecartMutation();

  const handleDelete = async (id: string) => {
    message.loading("deleting");
    const res = await deletecart(id).unwrap();

    if (res?.id) {
      message.success("deleted successfully");
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
            <Image
              width={60}
              height={60}
              src={data?.service?.image}
              alt="pic"
            ></Image>
          </>
        );
      },
    },
    {
      title: "Service",
      render: function (data: any) {
        return (
          <>
            <p>{data?.service?.title}</p>
          </>
        );
      },
    },
    {
      title: "Price",
      render: function (data: any) {
        return (
          <>
            <p>{data?.service?.price}</p>
          </>
        );
      },
    },
    {
      title: "status",
      render: function (data: any) {
        return (
          <>
            <p>{data?.service?.status}</p>
          </>
        );
      },
    },

    {
      title: "Action",
      render: function (data: any) {
        return (
          <div className="space-x-2">
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

  return <Table columns={columns} dataSource={cart}></Table>;
};

export default Cart;
