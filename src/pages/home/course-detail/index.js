import React, { memo, useEffect, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { CourseDetailWrapper } from "./style";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

export default memo(function CourseDetail() {
  //临时判断是学生还是老师
  const identity = localStorage.getItem("identity");
  // 获取路径
  const location = useLocation();
  const [selectKey, setselectKey] = useState(
    identity === "teacher" ? "upload-data" : "data"
  ); //设置选择的状态
  // console.log(selectKey )
  // 设置选择哪个路径
  useEffect(() => {
    // 找出最后的路径进行替换
    let pathName = location.pathname.replace(
      /\/home\/(course-detail)\/([\d])+\/(.+)/g,
      ($0, $1, $2, $3) => {
        return $3;
      }
    );
    //如果没找到会不会替换，会返回原路径包含course-detail，路径就设置为upload-data或data
    let isInital = pathName.split("/").some((item) => {
      return item === "course-detail";
    });
    if (isInital) {
      identity === "teacher" ? (pathName = "upload-data") : (pathName = "data");
    }
    setselectKey(pathName);
  }, [location.pathname, identity]);

  const navigate = useNavigate();
  const toBack = () => {
    //返回
    navigate('/home'); //返回上一页
  };
  return (
    <CourseDetailWrapper>
      <Layout style={{ height: "100%" }}>
        <Sider className="memu">
          <Button className="backButton" onClick={toBack}>
            <ArrowLeftOutlined />
            返回
          </Button>
          <Menu
            defaultSelectedKeys={selectKey}
            selectedKeys={selectKey}
            defaultOpenKeys={["section1", "section2"]}
            mode="inline"
          >
            <SubMenu key="section1" title="第一章图形">
              <Menu.ItemGroup key="unit" title="三角形">
                <Menu.Item key="data">
                  <Link to="data" onClick={() => setselectKey("data")}>
                    资料
                  </Link>
                </Menu.Item>
                <Menu.Item key="job">
                  <Link to="job" onClick={() => setselectKey("job")}>
                    小测及课后作业
                  </Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="section2" title="第一章图形">
              <Menu.ItemGroup key="unit" title="三角形">
                <Menu.Item key="upload-data">
                  <Link
                    to="upload-data"
                    onClick={() => setselectKey("upload-data")}
                  >
                    上传资料
                  </Link>
                </Menu.Item>
                <Menu.Item key="check-work">
                  <Link
                    to="check-work"
                    onClick={() => setselectKey("check-work")}
                  >
                    查看课后作业
                  </Link>
                </Menu.Item>
                <Menu.Item key="check-complete">
                  <Link
                    to="check-complete"
                    onClick={() => setselectKey("check-complete")}
                  >
                    查看测试情况
                  </Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </CourseDetailWrapper>
  );
});
