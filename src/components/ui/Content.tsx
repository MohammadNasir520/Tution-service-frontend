import { Layout } from "antd";
import Header from "./Header";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <Header />
      </div>
      {children}
    </Content>
  );
};

export default Contents;
