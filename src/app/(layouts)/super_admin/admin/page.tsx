"use client";

import { useGetAllAdminQuery } from "@/redux/api/adminApi/adminApi";

const Admin = () => {
  const { data } = useGetAllAdminQuery(undefined);
  console.log("admins", data);

  return <div>manage admin Admin of super admin</div>;
};

export default Admin;
