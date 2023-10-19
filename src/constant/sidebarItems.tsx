"use client";
import type { MenuProps } from "antd";

import Link from "next/link";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Manage Profile",
      key: "Manage Profile",

      children: [
        {
          label: <Link href={`/${role}`}>Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/editProfile`}>Edit Profile</Link>,
          key: `/${role}/Edit profile`,
        },
      ],
    },
  ];

  const super_adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: "Manage admin",
      key: "manage-admin",

      children: [
        {
          label: <Link href={`/${role}/admin`}>All Admin</Link>,
          key: `/${role}/admin`,
        },
        {
          label: <Link href={`/${role}/admin/create`}>Create Admin</Link>,
          key: `/${role}/admin/create`,
        },
      ],
    },
  ];

  // admin sidebar
  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: "Manage user",
      key: "manage-user",

      children: [
        {
          label: <Link href={`/${role}/user`}>All user</Link>,
          key: `/${role}/user`,
        },
        {
          label: <Link href={`/${role}/user/create`}>Create user</Link>,
          key: `/${role}/user/create`,
        },
      ],
    },
    {
      label: "Mange services",
      key: "Mange services",

      children: [
        {
          label: <Link href={`/admin/service`}>Services</Link>,
          key: `/admin/service`,
        },
        {
          label: <Link href={`/admin/service/create`}>Create services</Link>,
          key: `/admin/service/create`,
        },
      ],
    },
    {
      label: "Mange Bookings",
      key: "Mange Bookings",

      children: [
        {
          label: <Link href={`/admin/booking`}>Bookings</Link>,
          key: `/admin/booking`,
        },
        // {
        //   label: <Link href={`/admin/service/create`}>Create services</Link>,
        //   key: `/admin/service/create`,
        // },
      ],
    },
  ];
  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: "Manage booking",
      key: "manage-booking",

      children: [
        {
          label: <Link href={`/${role}/booking`}>Edit booking</Link>,
          key: `/${role}/booking`,
        },
        {
          label: <Link href={`/${role}/booking`}>Create booking</Link>,
          key: `/${role}/Create booking`,
        },
      ],
    },
  ];

  if (role === "super_admin") {
    return super_adminSidebarItems;
  } else if (role === "admin") {
    return adminSidebarItems;
  } else if (role === "user") {
    return userSidebarItems;
  } else {
    return defaultSidebarItems;
  }
};
