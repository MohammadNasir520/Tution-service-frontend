"use client";
import { Layout } from "antd";
import Header from "./Header";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const gradientBackground = {
    minHeight: "100vh",
    width: "100%",
    background:
      "linear-gradient(rgb(15, 23, 42), rgb(88, 28, 135), rgb(15, 23, 42))",
    borderImage:
      "linear-gradient(to left bottom, rgb(49, 46, 129), rgb(129, 140, 248), rgb(49, 46, 129)) 1",
    borderImageSlice: 1,
  };

  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <Header></Header>
      <div>{children}</div>
    </Content>
  );
};

export default Contents;
