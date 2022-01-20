import React from "react";
import {
  useRoutes,
  Navigate
} from "react-router-dom";

import Login from '@/pages/login';
// 配置路由v6使用useRoutes
export const InitRouter = () => {
    const routers = useRoutes([
        {
            path:'/',
            exact:true,
            element:<Login/>
        },
        {
            path:'*',
            // Navigate重定向
            element:<Navigate to='/' />
        }
    ])
    return routers
}