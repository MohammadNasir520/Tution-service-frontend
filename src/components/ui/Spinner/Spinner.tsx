import React from "react";
import { Alert, Space, Spin } from "antd";

const Spinner: React.FC = () => (
  <Space
    direction="vertical"
    className="h-screen w-full flex items-center justify-center "
  >
    <Spin tip="Loading" size="large">
      <div className="content" />
    </Spin>
  </Space>
);

export default Spinner;
