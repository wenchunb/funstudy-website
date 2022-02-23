import React, { memo } from "react";
import { Table } from "antd";
import { TablesWrapper } from "./style";
export default memo(function Tables() {
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      align:'center'
    },
    {
      title: "评级",
      dataIndex: "grade",
      key: "grade",
      align:'center'
    },

  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      grade: "A",

    },
    {
      key: "2",
      name: "Jim Green",
      grade: "A",

    },
    {
      key: "3",
      name: "Joe Black",
      grade: "A",

    },
    {
      key: "4",
      name: "John Brown",
      grade: "A",

    },
    {
      key: "5",
      name: "Jim Green",
      grade: "A",

    },
    {
      key: "6",
      name: "Joe Black",
      grade: "A",

    },
    {
      key: "7",
      name: "John Brown",
      grade: "A",

    },
    {
      key: "8",
      name: "Jim Green",
      grade: "A",

    },
    {
      key: "9",
      name: "Joe Black",
      grade: "A",

    },
    {
      key: "10",
      name: "John Brown",
      grade: "A",

    },
    {
      key: "11",
      name: "Jim Green",
      grade: "A",

    },
    {
      key: "12",
      name: "Joe Black",
      grade: "A",

    },
  ];
  return (
    <TablesWrapper>
      <Table columns={columns} dataSource={data} className="table"pagination={{defaultPageSize:'9'}}/>
    </TablesWrapper>
  );
});
