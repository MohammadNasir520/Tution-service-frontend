import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Header: AntHeader } = Layout;

const Header = () => {
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button type="text" danger>
          Logout
        </Button>
      ),
    },
  ];

  const name = "Nasir";
  return (
    <AntHeader className="bg-black ">
      <Row justify="end" align="middle" className="h-full">
        <p className="text-white">{name}</p>
        <Dropdown menu={{ items }}>
          <Space wrap size={16}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
