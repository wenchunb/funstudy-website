import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Modal, Form, Input, Select,Cascader } from "antd";
import { MainModalWrapper } from "./style";
import {courseOptions} from "@/common/commonList"
export default memo(function MainModal(props) {
  const [confirmLoading, setConfirmLoading] = useState(false);

  let { visible, showModal, checkedOrAdd } = props;
  console.log(checkedOrAdd); //获取是添加还是认证窗口的变量
  const { Option } = Select;

  const children = useMemo(() => {
    //选项
    return [];
  }, []);
  const addOptions = useCallback((start, end, optionList) => {
    for (let i = start; i < end; i++) {
      optionList.push(<Option key={i}>{i + "班"}</Option>);
    }
  }, []);

  useEffect(() => {
    addOptions(1, 20, children);
  }, [addOptions, children]);

  
  function courseChange(value) {   // 课程改变事件
    console.log(value);
  }
  function classChange(value) {
    //改变班级选择框事件
    console.log(`Selected: ${value}`);
  }
  const handleOk = () => {
    //modal框确认事件
    setConfirmLoading(true);
    setTimeout(() => {
      showModal(false); //父组件负责控制模态框显示与隐藏的状态，模态框根据父组件传来的visible显示与隐藏，当点击关闭时模态框组件调用父组件传来的函数告诉父组件关闭，父组件设置状态为关闭，再传给子组件，子组件接收到visible再关闭
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    //modal框取消事件
    console.log("Clicked cancel button");
    showModal(false);
  };
  const onFinish = (values) => {
    //from表单提交成功事件
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    //from表单提交失败事件
    console.log("Failed:", errorInfo);
  };
  return (
    <MainModalWrapper>
      <Modal
        title={checkedOrAdd === "checked" ? "教师认定" : "创建课程"}
        visible={visible} //控制模态框显示与隐藏
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          name={checkedOrAdd}
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {checkedOrAdd === "checked" ? (
            <Form.Item
              label="姓名"
              name="name"
              rules={[
                {
                  required: true,
                  message: "请输入真实姓名",
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : (
            <Form.Item 
              label="课程"
              name="course"
              rules={[
                {
                  required:true,
                  message:"请输入课程名称"
                }
              ]}
            >
              <Cascader
                // defaultValue={["zhejiang", "hangzhou", "xihu"]}
                options={courseOptions}
                onChange={courseChange}
              />
            </Form.Item>
          )}

          {checkedOrAdd === "checked" ? (
            <Form.Item
              label="身份证"
              name="identityCard"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : (
            <Form.Item
              label="班级"
              name="className"
              rules={[
                {
                  required: true,
                  message: "请选择班级",
                },
              ]}
            >
              <Select
                mode="multiple"
                size="default"
                placeholder="点击选择，可多选"
                onChange={classChange}
                style={{ width: "100%" }}
              >
                {children}
              </Select>
            </Form.Item>
          )}
        </Form>
      </Modal>
    </MainModalWrapper>
  );
});
