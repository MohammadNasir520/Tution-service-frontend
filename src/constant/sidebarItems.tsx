"use client";
import type { MenuProps } from "antd";

import Link from "next/link";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "My Profile",
      key: "My Profile",

      children: [
        {
          label: <Link href={`/${role}`}>View Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/editProfile`}>Edit Profile</Link>,
          key: `/${role}/Edit profile`,
        },
      ],
    },
  ];
  // user sidebar
  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: "My bookings",
      key: "My bookings",

      children: [
        {
          label: <Link href={`/${role}/booking`}>Handle booking</Link>,
          key: `/${role}/booking`,
        },
      ],
    },
    {
      label: <Link href={`/${role}/cart`}>Handle Cart</Link>,
      key: `/${role}/cart`,
    },
  ];

  // parents sidebar

  const parentsSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: "Tuition",
      key: "Tuition",

      children: [
        {
          label: <Link href={`/parents/post-tuition`}>Post Tuition</Link>,
          key: `/parents/post-tuition`,
        },
        {
          label: (
            <Link href={`/parents/manage-tuition-posts`}>
              Manage Tuition Posts
            </Link>
          ),
          key: `/parents/manage-tuition-posts`,
        },
      ],
    },
    {
      label: <Link href={`/${role}/cart`}>Handle Cart</Link>,
      key: `/${role}/cart`,
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
          label: <Link href={`/admin/user`}>All user</Link>,
          key: `/admin/user`,
        },
        {
          label: <Link href={`/admin/user/create`}>Create user</Link>,
          key: `/admin/user/create`,
        },
      ],
    },
    {
      label: "Mange  TuitionPost",
      key: "Mange  TuitionPost",

      children: [
        {
          label: <Link href={`/admin/tuition-post`}> TuitionPost</Link>,
          key: `/admin/tuition-post`,
        },
        {
          label: (
            <Link href={`/admin/tuition-post/create`}>Create tuitionPost</Link>
          ),
          key: `/admin/tuition-post/create`,
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
      ],
    },
    {
      label: <Link href={`/${role}/cart`}>Manage Cart</Link>,
      key: `/${role}/cart`,
    },
  ];
  // super admin sidebar
  const super_adminSidebarItems: MenuProps["items"] = [
    ...adminSidebarItems,

    {
      label: "Manage admin",
      key: "manage-admin",

      children: [
        {
          label: <Link href={`/super_admin/admin`}>All Admin</Link>,
          key: `/super_admin/admin`,
        },
        {
          label: <Link href={`/super_admin/admin/create`}>Create Admin</Link>,
          key: `/super_admin/admin/create`,
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
  } else if (role === "parents") {
    return parentsSidebarItems;
  } else {
    return defaultSidebarItems;
  }
};
