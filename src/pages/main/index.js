import React, { memo,useCallback, useState } from "react";
import { Button } from "antd";
import { VerifiedOutlined } from "@ant-design/icons";

import { UserINfoWrapper, ClassContentWrapper } from "./style";
import MainModal from '@/components/main-modal';
import profile from "@/assets/images/test-profile.jpg";
import testClass from "@/assets/images/test-class.jpg";
export default memo(function Main() {
  const [visible, setVisible] = useState(false);
  const [checkedOrAdd,setCheckedOrAdd] = useState('')
  const showModal = useCallback((isShow = true ,ckOrAd) => {
    if(isShow) {
      setVisible(true);
      setCheckedOrAdd(ckOrAd)
    }else {
      setVisible(false);
      setCheckedOrAdd('')
    }
  },[]);
  return (
    <>
      <UserINfoWrapper>
        <div className="userInfo">
          <img src={profile} alt="" />
          <div className="info">
            <h1>
              隔壁小明隔壁小明隔壁小明隔壁小明隔壁小明隔壁小明隔壁小明隔壁小明隔壁小明隔壁小明隔壁小明隔壁小明隔壁小明
            </h1>
            <span>学生</span>
            <span>1809班</span>
          </div>
        </div>
        <Button
          type="primary"
          shape="round"
          className="teacherChecked"
          icon={<VerifiedOutlined />}
          onClick={()=> {showModal(true,'checked')}}
        >
          教师认定
        </Button>
      </UserINfoWrapper>
      <ClassContentWrapper>
        <div className="header">
          <h2>课程</h2>
          <Button className="addClass" onClick={()=> {showModal(true,'add')}}>创建课程</Button>
        </div>

        <div className="container">
          <ul>
            <li>
              <img src={testClass} alt="" />
              <h2 className="title">新技术专题</h2>
              <div className="info">
                <span className="teacher">张海军</span>
                <span className="class">
                  班级:&nbsp;
                  <span>1809</span>
                </span>
              </div>
            </li>
            <li>
              <img src={testClass} alt="" />
              <h2 className="title">新技术专题</h2>
              <div className="info">
                <span className="teacher">张海军</span>
                <span className="class">
                  班级
                  <span>1809</span>
                </span>
              </div>
            </li>
            <li>
              <img src={testClass} alt="" />
              <h2 className="title">新技术专题</h2>
              <div className="info">
                <span className="teacher">张海军</span>
                <span className="class">
                  班级
                  <span>1809</span>
                </span>
              </div>
            </li>
            <li>
              <img src={testClass} alt="" />
              <h2 className="title">新技术专题</h2>
              <div className="info">
                <span className="teacher">张海军</span>
                <span className="class">
                  班级
                  <span>1809</span>
                </span>
              </div>
            </li>
            <li>
              <img src={testClass} alt="" />
              <h2 className="title">新技术专题</h2>
              <div className="info">
                <span className="teacher">张海军</span>
                <span className="class">
                  班级
                  <span>1809</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </ClassContentWrapper>

      {/* 教师认定，添加课程模态框 */}
      <MainModal visible={visible} showModal = {showModal} checkedOrAdd = {checkedOrAdd}/>
      </>
  );
});
