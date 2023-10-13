"use client";

import { useGetAllUserQuery } from "@/redux/api/userApi/userApi";
import React from "react";

const SuperAdmin = () => {
  const { data, isLoading } = useGetAllUserQuery(undefined);
  console.log(data);
  return <div>super admin page</div>;
};

export default SuperAdmin;
