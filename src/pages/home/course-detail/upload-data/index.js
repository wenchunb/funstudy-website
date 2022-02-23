import React, { memo } from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { UploadDataWrapper } from "./style";

export default memo(function UploadData() {
  const { Dragger } = Upload;

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <UploadDataWrapper>
      <h1>上传本单元资料</h1>
      <div className="uploadFile">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            单击或拖动文件到此区域上传
          </p>
          <p className="ant-upload-hint">
          支持单个或批量上传,只支持上传pdf,word,jpg,png格式
          </p>
        </Dragger>
      </div>
    </UploadDataWrapper>
  );
});
