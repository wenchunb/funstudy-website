import React, { memo, useState } from "react";

import { Upload, message } from "antd";
// import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
// import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { UploadProfileWrapper } from "./style";
import initProfile from "@/assets/images/init-profile.png";
export default memo(function UploadProfile() {
//   const [loading, setLoading] = useState(false);
  const [imageUrl, setImgUrl] = useState(initProfile);
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("你只能上传JPG/PNG 文件");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("文件必须小于 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }
  const handleChange = (info) => {
    // if (info.file.status === "uploading") {
    //   setLoading(true);
    //   return;
    // }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
      setImgUrl(imageUrl)
      );
      console.log(info)
    }
  }
  return (
    <UploadProfileWrapper>
      <Upload
        name="uploadProfile"
        listType="picture"
        className="avatar-uploader"
        showUploadList={false}
        action="http://localhost:3000/upload"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
      </Upload>
    </UploadProfileWrapper>
  );
});
