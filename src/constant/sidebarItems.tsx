"use client";
import type { MenuProps } from "antd";

import Link from "next/link";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",

      children: [
        {
          label: <Link href={`/${role}`}>Edit Profile</Link>,
          key: `/${role}/edit`,
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
          label: <Link href={`/${role}/create`}>Create Admin</Link>,
          key: `/${role}/create`,
        },
        // {
        //   label: <Link href={`/${role}/admin`}>Edit Admin</Link>,
        //   key: `/${role}/admin`,
        // },
      ],
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: "Manage user",
      key: "manage-user",

      children: [
        {
          label: <Link href={`/${role}/user`}>Edit user</Link>,
          key: `/${role}/user`,
        },
        {
          label: <Link href={`/${role}/user`}>Create user</Link>,
          key: `/${role}/Create user`,
        },
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
