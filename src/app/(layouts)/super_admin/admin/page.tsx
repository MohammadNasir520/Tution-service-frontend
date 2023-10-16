"use client";

import Table from "@/components/ui/Table/Table";
import { useGetAllAdminQuery } from "@/redux/api/adminApi/adminApi";

const Admin = () => {
  const { data } = useGetAllAdminQuery(undefined);
  console.log("admins", data);

  return <Table></Table>;
};

export default Admin;
