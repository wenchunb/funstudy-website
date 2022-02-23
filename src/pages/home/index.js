import React, { memo} from "react";
import { Outlet } from "react-router-dom";

import { HomeWrapper } from "./style";
import NavigationBar from "@/components/navigation-bar";
export default memo(function Home() {

  return (
    <HomeWrapper>
      <NavigationBar  />
      <Outlet />
      {/* Outlet，像极了{this.props.children}  放这个就能根据useRouters配置home子路由展示对应的组件*/}
    </HomeWrapper>
  );
});
