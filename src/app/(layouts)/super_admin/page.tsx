"use client";

import ProfileDetails from "@/components/Profile/ProfileDetails";
import Profile from "@/components/Profile/ProfileDetails";
import { useGetAllUserQuery } from "@/redux/api/userApi/userApi";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";

const SuperAdmin = () => {
  return (
    <div className="w-full">
      <ProfileDetails></ProfileDetails>
    </div>
  );
};

export default SuperAdmin;
