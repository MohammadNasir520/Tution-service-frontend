"use client";

import { useGetAllUserQuery } from "@/redux/api/userApi/userApi";
import { closeSidebar, showSideBar } from "@/redux/features/sideBarslice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";

const SuperAdmin = () => {
  const { data, isLoading } = useGetAllUserQuery(undefined);
  console.log(data);
  const sideBarStatus = useAppSelector((state) => state.sidebar?.open);
  console.log(sideBarStatus);
  const dispatch = useAppDispatch();

  return <div>super admin page</div>;
};

export default SuperAdmin;
