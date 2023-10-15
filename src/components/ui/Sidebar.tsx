"use client";

import { useState } from "react";
import { Drawer, Layout, Menu, Space } from "antd";
import { sidebarItems } from "@/constant/sidebarItems";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { closeSidebar } from "@/redux/features/sideBarslice";
import { DrawerClassNames, DrawerStyles } from "antd/es/drawer/DrawerPanel";

const { Sider } = Layout;

const SideBar = () => {
  const sidebarStatus = useAppSelector((state) => state.sidebar.open);
  console.log(sidebarStatus);
  const dispatch = useAppDispatch();
  const role = "super_admin";

  const drawerStyles: DrawerStyles = {
    mask: {
      backdropFilter: "white",
    },
    content: {
      boxShadow: "-10px 0 10px #666",
    },
    header: {
      borderBottom: `1px solid white`,
      // background: "black",
      color: "white",
    },
    body: {
      background: "black",
      color: "white",
    },
    footer: {
      // borderTop: `1px solid ${token.colorBorder}`,
    },
  };

  return (
    <>
      <Sider
        width={280}
        className={`hidden lg:block sticky h-screen overflow-auto left-0 top-0 bottom-0`}
      >
        <div className="flex items-center justify-between">
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
            Tuition-Media
          </div>
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

export default SideBar;
