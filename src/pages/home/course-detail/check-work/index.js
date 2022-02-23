import React, { memo, useEffect, useState } from "react";
import { Alert, List, Button, Input } from "antd";
import { CheckWorkWrapper } from "./style";

export default memo(function CheckWork() {
  const [easyData, setEasyData] = useState([]); //放简单题目的数据
  const [middleData, setMiddleData] = useState([]); //放中等题目的数据
  const [complxData, setComplxData] = useState([]); //放复杂题目的数据
  const [verifyId, setVerifyId] = useState(0); //放修改的id
  const [inputValue, setInputValue] = useState(""); //放修改的id
  // let btnInnerText = '修改' //设置按钮的innerText
  useEffect(() => {
    //模拟获取到easydata数据
    const easyRes = {
      courseId: "tjMath",
      unitId: 1,
      data: [
        { id: "easy1", content: "单元测试1.1" },
        { id: "easy2", content: "单元测试1.1" },
        { id: "easy3", content: "单元测试1.2" },
        { id: "easy4", content: "单元测试1.3" },
        { id: "easy5", content: "单元测试1.4" },
      ],
    };
    const middleRes = {
      courseId: "tjMath",
      unitId: 1,
      data: [
        { id: "middle1", content: "单元测试1.1" },
        { id: "middle2", content: "单元测试1.1" },
        { id: "middle3", content: "单元测试1.2" },
        { id: "middle4", content: "单元测试1.3" },
        { id: "middle5", content: "单元测试1.4" },
      ],
    };
    const complexRes = {
      courseId: "tjMath",
      unitId: 1,
      data: [
        { id: "complex1", content: "单元测试1.1" },
        { id: "complex2", content: "单元测试1.1" },
        { id: "complex3", content: "单元测试1.2" },
        { id: "complex4", content: "单元测试1.3" },
        { id: "complex5", content: "单元测试1.4" },
      ],
    };
    setEasyData(easyRes.data);
    setMiddleData(middleRes.data);
    setComplxData(complexRes.data);
  }, []);
  // 单击每一行的button的事件
  const change = (e, id) => {
    setVerifyId(id);
    setInputValue("");
    if (e.target.innerText === "确 定") {
      //点确定的时候虽然也设置inputValue为空，但是不会马上变为空，是异步执行的,所以能取到值，去到值后给服务器，然后刷新页面就行
      console.log(id, inputValue);
      setVerifyId(0);
    }
  };

  let inputTimeoutId;
  const changeInput = (e) => {
    //改变输入框事件
    clearTimeout(inputTimeoutId);
    inputTimeoutId = setTimeout(() => {
      setInputValue(e.target.value);
    }, 500);
  };
  return (
    <CheckWorkWrapper>
      <Alert message="课后作业将在下面中随机选取三项" type="info" showIcon />
      <div className="easyGroup">
        <h2>简单</h2>
        <List
          dataSource={easyData}
          footer={<div></div>}
          renderItem={(item) => (
            <List.Item className="list" key={item.id}>
              {verifyId === item.id ? (
                <Input
                  placeholder={item.content}
                  style={{ width: 200 }}
                  onChange={changeInput}
                />
              ) : (
                item.content
              )}
              <Button
                type="primary"
                shape="round"
                onClick={(e) => change(e, item.id)}
              >
                {verifyId === item.id ? "确定" : "修改"}
              </Button>
            </List.Item>
          )}
        />
      </div>
      <div className="middleGroup">
        <h2>中等</h2>
        <List
          dataSource={middleData}
          footer={<div></div>}
          renderItem={(item) => (
            <List.Item className="list" key={item.id}>
              {verifyId === item.id ? (
                <Input
                  placeholder={item.content}
                  style={{ width: 200 }}
                  onChange={changeInput}
                />
              ) : (
                item.content
              )}
              <Button
                type="primary"
                shape="round"
                onClick={(e) => change(e, item.id)}
              >
                {verifyId === item.id ? "确定" : "修改"}
              </Button>
            </List.Item>
          )}
        />
      </div>
      <div className="complxGroup">
        <h2>复杂</h2>
        <List
          dataSource={complxData}
          footer={<div></div>}
          renderItem={(item) => (
            <List.Item className="list" key={item.id}>
              {verifyId === item.id ? (
                <Input
                  placeholder={item.content}
                  style={{ width: 200 }}
                  onChange={changeInput}
                />
              ) : (
                item.content
              )}
              <Button
                type="primary"
                shape="round"
                onClick={(e) => change(e, item.id)}
              >
                {verifyId === item.id ? "确定" : "修改"}
              </Button>
            </List.Item>
          )}
        />
      </div>
    </CheckWorkWrapper>
  );
});
