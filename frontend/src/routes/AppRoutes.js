import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";

//import Landing from "../pages/Landing";

import { useAuth } from "../hooks/Auth";

import { protectedRoutes } from "./ProtectedRoutes";
import { publicRoutes } from "./PublicRoutes";
const Login = lazy(() => import("../pages/Login"));

const AppRoutes = () => {
  const auth = useAuth();

  const commonRoutes = [{ path: "/", element: <Login /> }];

  const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};

export default AppRoutes;
