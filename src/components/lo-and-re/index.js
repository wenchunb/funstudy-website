import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import {
  UserOutlined,
  LockOutlined,
  HomeOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { LoAndReWrapper } from "./style";
export const LoAndRe = memo(({ changeTrigger }) => {
  const [loOrRe, setLoOrRe] = useState(0);
  const [title, setTitle] = useState(0);
  const [tips, setTips] = useState(0);
  const [schoolInp, setSchoolInp] = useState("");
  const [btnMsg, setBtnMsg] = useState("注册");
  const initRule = useMemo((props) => {
    return [
      {
        required: true,
        message: "请输入密码",
      },
      {
        max: 50,
        message: "最长20位",
      },
      {
        min: 6,
        message: "最短6位",
      },
      {
        pattern: /^[A-Za-z\d_]+$/,
        message: "只能包含字母数字下划线",
      },
    ]
  },[]);
  const [passWordRule, setpassWordRules] = useState(initRule);
  const formRef = useRef();
  const navigate = useNavigate()
  const changeState = useCallback(() => {
    loOrRe === 0 ? setLoOrRe(1) : setLoOrRe(0);
      changeTrigger()
      formRef.current.resetFields();
  },[loOrRe,changeTrigger])
  
  const toHome = useCallback(() => {
    navigate('/home',{replace:true});
  },[navigate])
  useEffect(() => {
    if (!loOrRe) {
      setTitle(<div className="title">注册你的即时账户</div>);
      setTips(
        <div className="tips">
          已有账户？
          <button onClick={changeState}>
            前去登录
            <RightCircleOutlined />
          </button>
        </div>
      );
      setSchoolInp("1");
      setBtnMsg("注册");
      setpassWordRules(initRule);
    } else {
      setTitle(<div className="title">登录你的即时账户</div>);
      setTips(
        <div className="tips">
          没有账户？
          <button onClick={changeState}>
            免费注册
            <RightCircleOutlined />
          </button>
        </div>
      );
      setSchoolInp("0");
      setBtnMsg("登录");
      setpassWordRules([
        {
          required: true,
          message: "请输入密码",
        },
      ]);
    }
  }, [loOrRe, initRule,changeState]);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <LoAndReWrapper>
      {title}
      {tips}
      <Form
        name="login"
        className="login-form"
        ref={formRef}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "请输入用户名",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名"
            size="large"
          />
        </Form.Item>
        <Form.Item name="password" rules={passWordRule}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="schoolName"
          style={{ opacity: schoolInp }}
          rules={[
            {
              required: true,
              message: "请输入学校名称",
            },
          ]}
        >
          <Input
            prefix={<HomeOutlined className="site-form-item-icon" />}
            type="text"
            placeholder="学校名称"
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick = {toHome}
          >
            {btnMsg}
          </Button>
        </Form.Item>
      </Form>
    </LoAndReWrapper>
  );
});
