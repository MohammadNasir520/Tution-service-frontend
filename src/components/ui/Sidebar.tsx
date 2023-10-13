"use client";

import { useState } from "react";
import { Drawer, Layout, Menu } from "antd";
import { sidebarItems } from "@/constant/sidebarItems";

const { Sider } = Layout;

const SideBar = () => {
  const role = "super_admin";

  return (
    <>
      <Sider
        width={250}
        className="hidden lg:block sticky h-screen overflow-auto left-0 top-0 bottom-0"
      >
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
          Tuition-service
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={sidebarItems(role)}
        />
      </Sider>
    </>
  );
};

export default SideBar;
