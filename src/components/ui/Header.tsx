import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { showSideBar } from "@/redux/features/sideBarslice";

const { Header: AntHeader } = Layout;

const Header = () => {
  const dispatch = useAppDispatch();
  const sideBarStatus = useAppSelector((state) => state.sidebar.open);
  console.log(sideBarStatus);
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
      <Row justify="space-between" align="middle" className="h-full w-full ">
        <Space onClick={() => dispatch(showSideBar())}>
          <AiOutlineArrowRight
            className={`${
              sideBarStatus === true ? "hidden" : ""
            } w-10 h-8  text-white lg:hidden`}
          />
        </Space>
        <Space>
          <p className="text-white">{name}</p>
          <Dropdown menu={{ items }}>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </Dropdown>
        </Space>
      </Row>
    </AntHeader>
  );
};

export default Header;
