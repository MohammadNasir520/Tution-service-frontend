import { Button } from "antd";

const role = "user";
export const headerItems = (role: string) => {
  const defaultItems = [
    {
      key: "1",
      label:
        role === "a" ? (
          <Button className="" type="primary">
            Logout
          </Button>
        ) : (
          <div
            className="space-x-2 flex flex-col
          "
          >
            <Button className="" type="primary">
              signIn
            </Button>
            <Button className="" type="primary" danger>
              signOut
            </Button>
          </div>
        ),
      href: "/s",
    },
  ];
  const publicHeaderItems = [
    { key: "1", label: "Home", href: "/" },
    { key: "2", label: "Services", href: "/service" },
    { key: "3", label: "blogs", href: "/blogs" },
    { key: "4", label: "About Us", href: "/about-us" },
    { key: "5", label: "Contact Us", href: "/contact-us" },
    { key: "6", label: "Contact Us", href: "/contact-us" },
    ...defaultItems,
  ];
  const adminHeaderItems = [
    { key: "1", label: "Home", href: "/" },
    { key: "2", label: "Services", href: "/" },
    { key: "3", label: "Doctors", href: "/" },
    { key: "4", label: "About Us", href: "/about-us" },
    { key: "5", label: "Contact Us", href: "/contact-us" },
  ];
  if (role === "admin") return adminHeaderItems;
  if (role === "super_admin") return adminHeaderItems;
  if (role === "admin") return adminHeaderItems;
  else {
    return publicHeaderItems;
  }
};
