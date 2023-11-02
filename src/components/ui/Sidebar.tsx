"use client";

import { Drawer, Layout, Menu } from "antd";
import { sidebarItems } from "@/constant/sidebarItems";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { closeSidebar } from "@/redux/features/sideBarslice";
import { DrawerStyles } from "antd/es/drawer/DrawerPanel";
import Link from "next/link";
import { getUserInfo } from "@/services/authServices";

const { Sider } = Layout;

const SideBar = () => {
  const { role } = getUserInfo() as any;

  const sidebarStatus = useAppSelector((state) => state.sidebar.open);

  const dispatch = useAppDispatch();

  const drawerStyles: DrawerStyles = {
    mask: {
      backdropFilter: "white",
    },
    content: {
      boxShadow: "-10px 0 10px #666",
    },
    header: {
      borderBottom: `1px solid white`,

      color: "white",
    },
    body: {
      background: "black",
      color: "white",
    },
    footer: {},
  };

  return (
    <>
      <Sider
        width={270}
        style={{ position: "sticky" }}
        className={`hidden lg:block  h-screen overflow-auto left-0 top-0 bottom-0`}
      >
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            {" "}
            <div
              style={{
                color: "white",
                fontSize: "2rem",
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: ".5rem",
                padding: "10px 0px",
              }}
            >
              Tuition Media
            </div>
          </Link>
          <div onClick={() => dispatch(closeSidebar())}>
            <AiOutlineArrowLeft className="h-5 w-5 text-white lg:hidden" />
          </div>
        </div>

        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={sidebarItems(role)}
        />
      </Sider>

      <div className="lg:hidden">
        <Drawer
          title="Dashboard"
          placement="left"
          onClose={() => {
            dispatch(closeSidebar());
          }}
          open={sidebarStatus}
          styles={drawerStyles}
        >
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={sidebarItems(role)}
            className="h-full"
          />
        </Drawer>
      </div>
    </>
  );
};

// export default dynamic(() => Promise.resolve(SideBar), { ssr: false });

export default SideBar;
