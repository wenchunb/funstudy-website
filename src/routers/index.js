import React from "react";
import {
  useRoutes,
} from "react-router-dom";

import Login from '@/pages/login';
// 配置路由v6使用useRoutes
export const InitRouter = () => {
    const routers = useRoutes([
        {path:'/',element:<Login/>}
    ])
    return routers
}