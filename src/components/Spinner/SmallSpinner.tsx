import React from "react";
import { Space, Spin } from "antd";

const SmallSpinner: React.FC = () => (
  <Space
    direction="vertical"
    className="h-full w-full flex items-center justify-center min-h-[500px]"
  >
    <Spin tip="Loading" size="large">
      <div className="content" />
    </Spin>
  </Space>
);

export default SmallSpinner;
