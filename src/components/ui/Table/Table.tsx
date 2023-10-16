"use client";
import React from "react";
import { Space, Table as AntdTable, Tag } from "antd";

interface DataType {
  key: React.Key;
  name: string;
  email: string;
  contactNo: number;
  profileImg: string;
}

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Contact No",
    dataIndex: "contactNo",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John",
    email: "Brown",
    contactNo: 32,
    profileImg: "New York No. 1 Lake Park",
  },
];

const Table = () => <AntdTable dataSource={data} columns={columns}></AntdTable>;

export default Table;
