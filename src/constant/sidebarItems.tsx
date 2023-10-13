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
      ],
    },
  ];

  if (role === "super_admin") return adminSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
