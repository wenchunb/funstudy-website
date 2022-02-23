import React, { memo, useState, useEffect, useCallback } from "react";
import {
  Tabs,
  List,
  Radio,
  Checkbox,
  Row,
  Col,
  Button,
  Tag,
  message,
  Alert,
} from "antd";
import {
  JobWrapper,
  RadioWrapper,
  CheckBoxWrapper,
  ResultWrapper,
} from "./style";

export default memo(function Job() {
  //题目集
  const [question, setQusetion] = useState([]);
  //控制是否展示结果
  const [showResult, setShowResult] = useState(false);
  //控制是否能选
  const [isSelectDisabled, setIsSelectDisabled] = useState(false);
  //装题目数据
  const [testData, setTestData] = useState({});
  let checkId = ""; //存放多选列表的id

  //模拟用户的id
  let userId = "afafqe3413412411";
  // 初始化提交的数据
  let submitList = {
    courseId: testData.courseId,
    id: testData.id,
    userId,
    data: [],
  };
  // 模拟课后作业数据
  const taskData = {
    courseId: "tjMath",
    id: 1,
    data: [
      { id: 1, content: "课后练习1.1" },
      { id: 2, content: "课后练习1.2" },
      { id: 3, content: "课后练习1.3" },
    ],
  };
  //提交的数据
  const initQuestionData = useCallback((testData) => {
    //初始化题目列表
    const questionData = testData.data;
    questionData.forEach((item, index) => {
      setQusetion((preQusetion) => {
        index += 1;
        item = {
          ...item,
          index,
        };
        return [...preQusetion, item];
      });
    });
  }, []);
  const initJobShow = useCallback(() => {
    //1.发送请求拿到数据，拿到数据后更新题目数据
    const reqData = {
      courseId: "tjMath", //课程id
      id: 1, //单元id
      data: [
        {
          testId: "r1",
          type: "radio",
          title: "一加一等于",
          options: {
            A: 1,
            B: 2,
            C: 3,
            D: 4,
          },
          result: "B",
          stuSelResult: "C",
          correct: false,
        },
        {
          testId: "c1",
          type: "checks",
          title: "一加一不等于",
          options: {
            A: 1,
            B: 2,
            C: 3,
            D: 4,
          },
          result: ["A", "B"],
          stuSelResult: ["A", "B"],
          correct: true,
        },
        {
          testId: "r2",
          type: "radio",
          title: "一加一等于",
          options: {
            A: 1,
            B: 2,
            C: 3,
            D: 4,
          },
          result: "B",
          stuSelResult: "B",
          correct: true,
        },
        {
          testId: "c2",
          type: "checks",
          title: "一加一不等于",
          options: {
            A: 1,
            B: 2,
            C: 3,
            D: 4,
          },
          result: ["B", "C"],
          stuSelResult: ["B", "C", "D"],
          correct: true,
        },
        {
          testId: "c3",
          type: "checks",
          title: "一加一不等于",
          options: {
            A: 1,
            B: 2,
            C: 3,
            D: 4,
          },
          result: ["A", "C", "D"],
          stuSelResult: ["A", "C", "D"],
          correct: false,
        },
      ],
    };
    //更新题目数据
    initQuestionData(reqData);
    // 把数据放到状态中
    setTestData(reqData);
    /*
      1.判断是否有学生选择的答案
      2.有的话就选择学生选过的答案，而且不能修改，
      3.有的话对比学生的答案和正确的答案，正确的就展示学生学生S的答案，选择正确，绿色框，选择错误就展示学生的答案，然后写正确的答案是...、
      4.没有的话就展示没有选过的空白选项，不展示是否正确提示框
    */
    if (reqData.data[0].stuSelResult !== "") {
      setIsSelectDisabled(true);
      setShowResult(true);
    }
  }, [initQuestionData]);

  // 设置默认展示选哪个
  const setDefaultValue = (testId) => {
    const value = testData.data.find((item) => {
      return item.testId === testId;
    });
    return value.stuSelResult;
  };

  const { TabPane } = Tabs;
  console.log(question);
  //更改菜单栏
  const changeTab = (key) => {
    console.log(key);
  };
  //判断是不是新添加的数据
  const isNewData = (key, value) => {
    value = key.value || value;
    key = key.name || key;
    const hasIdIndex = submitList.data.findIndex((item) => {
      return item.testId === key;
    });
    if (hasIdIndex === -1) {
      submitList.data = [
        ...submitList.data,
        {
          testId: key,
          stuSelResult: value,
        },
      ];
    } else {
      submitList.data[hasIdIndex].stuSelResult = value;
    }
  };
  //选中单选列表的事件
  const onRadioChange = (key) => {
    const selectRadio = key.target;
    isNewData(selectRadio);
    console.log(submitList);
  };
  //选中多选的事件
  const onCheckeChange = (key) => {
    checkId = key.target.name;
  };
  //选中多选列表的事件
  const onCheckesChange = (checkValues) => {
    isNewData(checkId, checkValues);
    console.log(submitList);
  };
  //获取单选列表
  const getRadioList = (data) => {
    const list = [];
    for (let k in data) {
      list.push(
        <Col span={8} key={"radio" + data[k]}>
          <RadioWrapper optionName={k}>
            <Radio value={k} disabled={isSelectDisabled}>
              {data[k]}
            </Radio>
          </RadioWrapper>
        </Col>
      );
    }
    return [...list];
  };
  //获取多选列表
  const getCheckList = (data) => {
    const list = [];
    for (let k in data) {
      list.push(
        <Col span={6} key={"check" + data[k]}>
          <CheckBoxWrapper optionName={k}>
            <Checkbox
              value={k}
              onChange={onCheckeChange}
              disabled={isSelectDisabled}
            >
              {data[k]}
            </Checkbox>
          </CheckBoxWrapper>
        </Col>
      );
    }
    return [...list];
  };

  const submitResult = () => {
    /*
      1.发送请求提交数据
      2.设置不能选择，重新渲染页面
    */
    // console.log(testData);
    if (submitList.data.length < testData.data.length) {
      message.warning("还有题目没有选完");
      return;
    }
    // 发送请求,把submitList的数据发送给后台
    // 设置不能选择
    setIsSelectDisabled(true);
  };

  // 初始化页面数据
  useEffect(() => {
    // 函数里有设置状态，未了不一直重新渲染，要放到useEffect中
    initJobShow();
  }, [initJobShow]);

  return (
    <JobWrapper>
      <Tabs defaultActiveKey="1" onChange={changeTab}>
        <TabPane tab="小测" key="1">
          <List
            itemLayout="vertical"
            footer={
              isSelectDisabled ? (
                ""
              ) : (
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  onClick={submitResult}
                >
                  提交
                </Button>
              )
            }
            dataSource={question}
            renderItem={(item) => (
              <List.Item>
                <div className="title">
                  <span className="index"> {item.index} </span>
                  {item.type === "radio" ? (
                    <Tag color="blue"> 单选 </Tag>
                  ) : (
                    <Tag color="geekblue"> 多选 </Tag>
                  )}
                  {item.title}
                </div>
                {item.type === "radio" ? (
                  // name识别单独哪个题目
                  <Radio.Group
                    onChange={onRadioChange}
                    name={item.testId}
                    defaultValue={
                      isSelectDisabled ? () => setDefaultValue(item.testId) : ""
                    }
                  >
                    {getRadioList(item.options)}
                  </Radio.Group>
                ) : (
                  <Checkbox.Group
                    style={{
                      width: "100%",
                    }}
                    name={item.testId}
                    onChange={onCheckesChange}
                    defaultValue={
                      isSelectDisabled ? () => setDefaultValue(item.testId) : ""
                    }
                  >
                    <Row> {getCheckList(item.options)} </Row>
                  </Checkbox.Group>
                )}
                <ResultWrapper
                  showResult={showResult}
                  bgColor={
                    typeof item.result === "string"
                      ? item.result === item.stuSelResult
                        ? "green"
                        : `red`
                      : item.result.toString() === item.stuSelResult.toString()
                      ? "green"
                      : "red"
                  }
                >
                  <span className="tips"> 正确答案是: </span>
                  <span className="answer"> {item.result} </span>
                  <span className="stuAnswer">
                    {typeof item.result === "string"
                      ? item.result === item.stuSelResult
                        ? "选择正确"
                        : `您选错为${item.stuSelResult}`
                      : item.result.toString() === item.stuSelResult.toString()
                      ? "选择正确"
                      : `您选错为${item.stuSelResult.toString()}`}
                  </span>
                </ResultWrapper>
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab="课后作业" key="2">
          {taskData.data.map((item, index) => {
            return (
              <div key={item.id} className="taskItem">
                <span>{index + 1}</span>
                <h2>{item.content}</h2>
              </div>
            );
          })}
          <Alert
            message="注意"
            description="作业完成后请及时交给科任老师哦"
            type="warning"
            showIcon
            className="alert"
          />
        </TabPane>
      </Tabs>
    </JobWrapper>
  );
});
