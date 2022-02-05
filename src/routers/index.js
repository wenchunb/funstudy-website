import React from "react";
import { useRoutes, Navigate } from "react-router-dom";

import Login from "@/pages/login";
import Home from "@/pages/home";
import CourseDetail from "../pages/course-detail";
import Info from "../pages/info";
import Main from "../pages/main";
// 配置路由v6使用useRoutes
export const InitRouter = () => {
  const routers = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "home",

      element: <Home />,
      children: [
        { index: true, element: <Main /> }, //此时没有path，用index代替，此时匹配父组件home的时候默认往下展示到main子路由组件
        { path: "course-detail", element: <CourseDetail /> },
        { path: "info", element: <Info /> },
      ],
    },

    {
      path: "*",
      // Navigate重定向
      element: <Navigate to="/home" />,
    },
  ]);
  return routers;
};
