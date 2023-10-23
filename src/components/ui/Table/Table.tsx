"use client";
import React from "react";
import { Table as AntdTable } from "antd";
import "./table.css";

type TableProps = {
  loading?: boolean;
  columns: any;
  dataSource: any;
  pageSize?: number;
  totalPages?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
  showPagination?: boolean;
};

const Table = ({
  columns,
  dataSource,
  loading,
  pageSize,
  totalPages,
  showPagination,
  onPaginationChange,
  onTableChange,
  showSizeChanger,
}: TableProps) => {
  const paginationConfig = showPagination
    ? {
        pageSize: pageSize,
        total: totalPages,
        pageSizeOptions: [2, 3, 5, 10, 15],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;

  return (
    <AntdTable
      loading={loading}
      dataSource={dataSource}
      columns={columns}
      pagination={paginationConfig}
      onChange={onTableChange}
    ></AntdTable>
  );
};

export default Table;
