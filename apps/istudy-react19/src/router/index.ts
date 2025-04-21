import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { SettingFilled } from "@ant-design/icons";

// 扩展 meta 元数据信息接口
declare module "react-router-dom" {
  interface IndexRouteObject {
    meta?: {
      menu?: boolean;
      title?: string;
      icon?: React.ReactNode;
      auth?: boolean;
    };
  }
  interface NonIndexRouteObject {
    meta?: {
      menu?: boolean;
      title?: string;
      icon?: React.ReactNode;
      auth?: boolean;
    };
  }
}

const Home = lazy(() => import("@/views/Home/Home"));
const Sign = lazy(() => import("@/views/Sign/Sign"));
const Exception = lazy(() => import("@/views/Exception/Exception"));
const Login = lazy(() => import("@/views/Login/Login"));
const BeforeEach = lazy(() => import("@/components/BeforeEach/BeforeEach"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: React.createElement(BeforeEach, null, React.createElement(Home)),
    meta: {
      menu: true,
      title: "考勤管理",
      icon: React.createElement(SettingFilled),
      auth: true,
    },
    children: [
      {
        path: "sign",
        element: React.createElement(Sign),
        meta: {
          menu: true,
          title: "在线签到",
          icon: React.createElement(SettingFilled),
          auth: true,
        },
      },
      {
        path: "exception",
        element: React.createElement(Exception),
        meta: {
          menu: true,
          title: "异常考勤",
          icon: React.createElement(SettingFilled),
          auth: true,
        },
      },
    ],
  },
  {
    path: "/login",
    element: React.createElement(BeforeEach, null, React.createElement(Login)),
  },
];

const router = createBrowserRouter(routes);

export default router;
