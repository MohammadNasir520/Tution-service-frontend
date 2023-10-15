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
          key: `/${role}/profile`,
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
          label: <Link href={`/${role}/admin`}>Edit Admin</Link>,
          key: `/${role}/admin`,
        },
        {
          label: <Link href={`/${role}/admin`}>Create Admin</Link>,
          key: `/${role}/Create Admin`,
        },
      ],
    },
  ];
  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: "Manage admin",
      key: "manage-admin",

      children: [
        {
          label: <Link href={`/${role}/admin`}>Edit Admin</Link>,
          key: `/${role}/admin`,
        },
        {
          label: <Link href={`/${role}/admin`}>Create Admin</Link>,
          key: `/${role}/Create Admin`,
        },
      ],
    },
  ];
  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: "Manage admin",
      key: "manage-admin",

      children: [
        {
          label: <Link href={`/${role}/admin`}>Edit Admin</Link>,
          key: `/${role}/admin`,
        },
        {
          label: <Link href={`/${role}/admin`}>Create Admin</Link>,
          key: `/${role}/Create Admin`,
        },
      ],
    },
  ];

  if (role === "super_admin") return super_adminSidebarItems;
  else if (role === "admin") return adminSidebarItems;
  else if (role === "user") return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
