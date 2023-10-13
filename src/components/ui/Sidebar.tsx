"use client";

import { useState } from "react";
import { Layout, Menu, Space } from "antd";
import { sidebarItems } from "@/constant/sidebarItems";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { closeSidebar } from "@/redux/features/sideBarslice";

const { Sider } = Layout;

const SideBar = () => {
  const sidebarStatus = useAppSelector((state) => state.sidebar.open);
  console.log(sidebarStatus);
  const dispatch = useAppDispatch();
  const role = "super_admin";

  return (
    <>
      <Sider
        width={280}
        className={`${
          sidebarStatus === true ? "block" : "hidden"
        }  lg:block sticky h-screen overflow-auto left-0 top-0 bottom-0`}
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
            Tuition-service
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
    </>
  );
};

export default SideBar;
