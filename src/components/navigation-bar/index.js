import React, { memo } from "react";
import { Link} from "react-router-dom";
import { Popover } from "antd";
import { NavigationBarWapper, PopoverContentWapper } from "./style";
import logoImg from "@/assets/images/logo-main.png";
import testProfile from "@/assets/images/test-profile.jpg";

export default memo(function NavigationBar(props) {

  const content = (
    <PopoverContentWapper>
      <button>
      <Link to="/home/info">个人信息</Link>
        </button>
      <button>
        <Link to="/">退出</Link>
      </button>
    </PopoverContentWapper>
  );
  return (
    <NavigationBarWapper >
      <Link to='/home' className="logo">
        <img src={logoImg} alt="" />
        <h1>乐学吧</h1>
      </Link>
      <div className="userInfo">
        <Popover content={content} title="" placement="bottom">
          <img src={testProfile} alt="" />
        </Popover>
      </div>
    </NavigationBarWapper>
  );
});
