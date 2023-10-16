import { Button } from "antd";

const role = "user";
export const headerItems = (role: string) => {
  const defaultItems = [
    {
      key: "1",
      label: "login",

      href: "/s",
    },
  ];
  const publicHeaderItems = [
    { key: "1", label: "Home", href: "/" },
    { key: "2", label: "Services", href: "/service" },
    { key: "3", label: "blogs", href: "/blogs" },
    { key: "4", label: "About Us", href: "/about-us" },

    ...defaultItems,
  ];
  const adminHeaderItems = [
    { key: "1", label: "Home", href: "/" },
    { key: "2", label: "Services", href: "/" },
    { key: "3", label: "Doctors", href: "/" },
    { key: "4", label: "About Us", href: "/about-us" },
  ];
  if (role === "admin") return adminHeaderItems;
  if (role === "super_admin") return adminHeaderItems;
  if (role === "admin") return adminHeaderItems;
  else {
    return publicHeaderItems;
  }
};
