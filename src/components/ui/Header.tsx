"use client";
import {
  Avatar,
  Button,
  Drawer,
  Dropdown,
  Layout,
  Menu,
  MenuProps,
  Row,
  Space,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeSidebar, showSideBar } from "@/redux/features/sideBarslice";
import { DrawerStyles } from "antd/es/drawer/DrawerPanel";
import Link from "next/link";
import { headerItems } from "@/constant/headerItems";
import { usePathname } from "next/navigation";
import { removeUserInfo } from "@/services/authServices";
import { authKey } from "@/constant/storage-key";
const { Header: AntHeader } = Layout;

const Header = () => {
  const dispatch = useAppDispatch();
  const sideBarStatus = useAppSelector((state) => state.sidebar.open);
  const role = "user";
  // const NavItems = headerItems(role);

  const NavItems = [
    {
      key: "1",
      label: (
        <Button type="primary" onClick={() => removeUserInfo(authKey)}>
          SignOut
        </Button>
      ),

      href: "/login",
    },
  ];

  const pathName = usePathname();

  const drawerStyles: DrawerStyles = {
    body: {
      background: "black",
      color: "white",
    },
  };

  return (
    <div>
      <AntHeader style={{ position: "sticky" }}>
        <Row justify="space-between" align="middle" className="h-full w-full ">
          {/* for sidbar open button */}
          <Space onClick={() => dispatch(showSideBar())}>
            <AiOutlineMenuUnfold
              className={`${
                sideBarStatus === true ? "hidden" : ""
              } w-10 h-8  text-white lg:hidden`}
            />
          </Space>

          <Menu
            className="lg:block hidden"
            disabledOverflow
            theme="dark"
            mode="horizontal"
            selectedKeys={[pathName]}
          >
            {NavItems?.map((item) => (
              <Menu.Item key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>

          {/* navbar drawer button
          <div className="lg:hidden" onClick={() => dispatch(showSideBar())}>
            <AiOutlineMenuFold
              className={`${
                sideBarStatus === true ? "hidden" : ""
              } w-10 h-8  text-white lg:hidden`}
            />
          </div> */}
        </Row>

        {/* drawer */}
        {/* <div className="lg:hidden">
          <Drawer
            title="Dashboard"
            placement="right"
            onClose={() => {
              dispatch(closeSidebar());
            }}
            open={sideBarStatus}
            styles={drawerStyles}
          >
            <Menu
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={headerItems(role)}
              className="h-full"
            />
          </Drawer>
        </div> */}
      </AntHeader>
    </div>
  );
};

export default Header;
