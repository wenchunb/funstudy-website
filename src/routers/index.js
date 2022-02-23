import React from "react";
import { useRoutes, Navigate } from "react-router-dom";

import Login from "@/pages/login";
import Home from "@/pages/home";
import CourseDetail from "../pages/home/course-detail";
import Info from "../pages/home/info";
import Main from "../pages/home/main";
import UploadData from "@/pages/home/course-detail/upload-data"
import Data from "@/pages/home/course-detail/data"
import CheckComplete from "@/pages/home/course-detail/check-complete"
import CheckWork from "@/pages/home/course-detail/check-work"
import Job from "@/pages/home/course-detail/job"
// function RequireId(id,{children}) {
//   const params = useParams();
//   return params
// }
// 配置路由v6使用useRoutes
export const InitRouter = () => {
  // 暂时性获取是学生还是教师身份
  const identity = localStorage.getItem('identity')

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
        {
          path: "course-detail/:courseId",
          element:<CourseDetail />,
          children:[
            {
                index:true,
                element:(identity === 'teacher' ? <UploadData/> : <Data/>)
            },
            {
              path:"upload-data",
              element:<UploadData/>
            },
            {
              path:"data",
              element:<Data/>
            },
            {
              path:"check-complete",
              element:<CheckComplete/>
            },
            {
              path:"check-work",
              element:<CheckWork/>
            },
            {
              path:"job",
              element:<Job/>
            },
          ]
        },
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
