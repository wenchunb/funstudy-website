import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, Form, Input, Button } from "antd";
import { RollbackOutlined } from "@ant-design/icons";

import InfoForm from "@/components/info-form";
import { InfoWrapper, FormWrapper } from "./style";

const { TabPane } = Tabs;
export default memo(function Info() {
  const [isDisabled, setDisabled] = useState(true);

  const navigate = useNavigate();
  const toBack = () => {
    //返回
    navigate(-1); //返回上一页
  };
  const backOperations = (
    <Button className="backButton" onClick={toBack}>
      <RollbackOutlined />
      返回
    </Button>
  );

  // 设置认定信息的是否能修改的状态
  const onFinish = (values) => {
    setDisabled(true);
  };
  const onFinishFailed = (errInfo) => {
    console.log(errInfo);
  };
  const changeInfo = () => {
    setDisabled(false);
  };
  return (
    <InfoWrapper>
      <Tabs defaultActiveKey="1" tabBarExtraContent={backOperations}>
        <TabPane tab="资料设置" key="1">
          <InfoForm />
        </TabPane>
        <TabPane tab="教师认定信息" key="2">
          <FormWrapper>
            <Form
              name="checkedInfo"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 6, offset: 1 }}
            >
              <Form.Item
                label="姓名"
                name="name"
                rules={[{ required: true, message: "请输入姓名" }]}
              >
                <Input disabled={isDisabled} />
              </Form.Item>
              <Form.Item
                label="身份证"
                name="identityCard"
                rules={[{ required: true, message: "请输入身份证号码" }]}
              >
                <Input disabled={isDisabled} />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 4,
                  span: 5,
                }}
              >
                <Button
                  type="primary"
                  onClick={changeInfo}
                  htmlType="button"
                  disabled={!isDisabled}
                >
                  修改
                </Button>
                <Button
                  type="primary"
                  onClick={changeInfo}
                  htmlType="submit"
                  disabled={isDisabled}
                >
                  提交
                </Button>
              </Form.Item>
            </Form>
          </FormWrapper>
        </TabPane>
      </Tabs>
    </InfoWrapper>
  );
});
