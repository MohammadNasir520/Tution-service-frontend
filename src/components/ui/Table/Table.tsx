"use client";
import React from "react";
import { Table as AntdTable } from "antd";

type TableProps = {
  loading?: boolean;
  columns: any;
  dataSource: any;
};

const Table = ({ columns, dataSource }: TableProps) => {
  return <AntdTable dataSource={dataSource} columns={columns}></AntdTable>;
};

export default Table;
