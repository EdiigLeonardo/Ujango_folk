import React, { lazy } from "react";

const AuthRoutes = lazy(() => import("../features/Auth/routes/AuthRouters"));

export const publicRoutes = [
  {
    path: "/auth/*",
    element: <AuthRoutes />,
  },
];
