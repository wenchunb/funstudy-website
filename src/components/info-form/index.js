import React, { memo, useCallback, useState } from "react";
import { Form, Input, Radio, Button } from "antd";
import UploadProfile from "@/components/upload-profile";
import { InfoFormWrapper } from "./style";
export default memo(function InfoForm() {
  const [genderValue, setGenderValue] = useState(0); //性别选择的值
  console.log(genderValue);
  const onChange = useCallback((e) => {
    console.log("radio checked", e.target.value);
    setGenderValue(e.target.value);
  }, []);
  const onFinish = (values) => {
    console.log(values);
  };
  const onFinishFailed = (errInfo) => {
    console.log(errInfo);
  };
  return (
    <InfoFormWrapper>
      <Form
        name="userInfo"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 6, offset: 1 }}
        initialValues={{ gender: genderValue }}
      >
        <Form.Item label="头像" name="profile">
          <UploadProfile />
        </Form.Item>
        <Form.Item
          label="昵称"
          name="username"
          rules={[{ required: true, message: "请输入昵称" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="手机号" name="phone">
          <Input />
        </Form.Item>
        <Form.Item
          label="真实姓名"
          name="name"
          rules={[{ required: true, message: "请输入姓名" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="性别" name="gender">
          <Radio.Group onChange={onChange} value={genderValue}>
            <Radio value={0}>男</Radio>
            <Radio value={1}>女</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="学校"
          name="school"
          rules={[{ required: true, message: "请输入学校名称" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="身份类型" name="identity">
          <Input disabled />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 5,
          }}
        >
          <Button type="primary" htmlType="submit">
            修改
          </Button>
        </Form.Item>
      </Form>
    </InfoFormWrapper>
  );
});
