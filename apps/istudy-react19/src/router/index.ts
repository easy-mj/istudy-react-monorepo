import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

const Home = lazy(() => import("../views/Home/Home"));
const Sign = lazy(() => import("../views/Sign/Sign"));
const Exception = lazy(() => import("../views/Exception/Exception"));
const Login = lazy(() => import("../views/Login/Login"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: React.createElement(Home),
    children: [
      {
        path: "sign",
        element: React.createElement(Sign),
      },
      {
        path: "exception",
        element: React.createElement(Exception),
      },
    ],
  },
  {
    path: "/login",
    element: React.createElement(Login),
  },
];

const router = createBrowserRouter(routes);

export default router;
