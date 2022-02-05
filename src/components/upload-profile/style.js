import styled from "styled-components";

export const UploadProfileWrapper = styled.div`
  .avatar-uploader {
      cursor: pointer;
    img {
      max-width: 100px !important;
      height: 100px !important;
      border-radius: 50%;
    }
    //控制antd上传图片的样式
    .ant-upload-select {
        position: relative;
        border-radius: 50%;
        overflow: hidden;
      ::before {  
        content: "编辑头像";
        font-size: 10px;
        color: #fff;
        text-align: center;
        position: absolute;
        bottom: 0;
        width: 100px;
        height: 20px;
        background: rgba(0,0,0,.5);
      }
    }
  }
`;
