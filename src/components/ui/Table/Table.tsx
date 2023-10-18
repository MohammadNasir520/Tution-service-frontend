"use client";
import React from "react";
import { Table as AntdTable } from "antd";
import "./table.css";

type TableProps = {
  loading?: boolean;
  columns: any;
  dataSource: any;
};

const Table = ({ columns, dataSource }: TableProps) => {
  const tableStyle = {
    background: "transparent", // Set the background to transparent
  };

  return (
    <AntdTable
      style={tableStyle}
      dataSource={dataSource}
      columns={columns}
      className="bg-transparent"
    ></AntdTable>
  );
};

export default Table;
