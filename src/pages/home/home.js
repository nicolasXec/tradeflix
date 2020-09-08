import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left"
  },
  {
    title: "call",
    width: 100,
    dataIndex: "age",
    key: "age",
    fixed: "left"
  },
  { title: "Column 1", dataIndex: "address", key: "1" },
  { title: "Column 2", dataIndex: "address", key: "2" },
  { title: "Column 3", dataIndex: "address", key: "3" },
  { title: "Column 4", dataIndex: "address", key: "4" },
  { title: "Column 5", dataIndex: "address", key: "5" },
  { title: "Column 6", dataIndex: "address", key: "6" },
  { title: "Column 7", dataIndex: "address", key: "7" },
  { title: "Column 8", dataIndex: "address", key: "8" },
  {
    title: "show",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a>chart</a>
  }
];

const data = [
  {
    key: "1",
    name: "Hdfc",
    age: "buy",
    address: "none"
  },
  {
    key: "2",
    name: "Tcs",
    age: "sell",
    address: "none"
  }
];

export default function Home() {
  return (
    <div>
      <h1>Top Stocks</h1>
      <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
    </div>
  );
}
