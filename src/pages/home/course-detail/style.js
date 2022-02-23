import styled from "styled-components";

export const CourseDetailWrapper = styled.div`
  /* overflow: hidden; */
  height: calc(100vh - 80px);
  .ant-layout-sider {
    height: "100%";
    background-color: #fff;
    border-radius: 2em !important;
    margin: 10px;
  }
  .title {
    height: 20px;
    background-color: #fff;
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
  }
  .ant-layout-content {
    background-color: #fff;
    margin: 10px 16px !important;
    border-radius:1em; 
    height: calc(100vh - 80px);
    padding: 10px 20px;
    overflow: scroll;
    ::-webkit-scrollbar {    
      /*隐藏滚轮*/
      display: none;
    }
  }
  .main {
    background-color: #fff;
  }
  .backButton {
    border: none;
    border-radius:1em;
    width:100%;
  }
`;
