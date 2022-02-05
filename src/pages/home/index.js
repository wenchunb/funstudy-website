import React, { memo, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { HomeWrapper } from "./style";
import NavigationBar from "@/components/navigation-bar";
export default memo(function Home() {
  const [isFixed, setIsFixed] = useState("relative");
  useEffect(() => {
    const scroll = () => {
      if (window.scrollY >= 30) {
        setIsFixed("fixed");
      } else {
        setIsFixed("relative");
      }
    }
    window.addEventListener("scroll",scroll );
    return () => {
      window.removeEventListener('scroll',scroll)
    }
  });

  return (
    <HomeWrapper>
      <NavigationBar isFixed={isFixed} />
      <Outlet />
      {/* Outlet，像极了{this.props.children}  放这个就能根据useRouters配置home子路由展示对应的组件*/}
    </HomeWrapper>
  );
});
