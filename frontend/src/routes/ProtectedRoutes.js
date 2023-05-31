import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "../components/app/Spinner";

const Home = lazy(() => import("../pages/Home"));
const Marketplace = lazy(() => import("../pages/Marketplace"));
const Profile = lazy(() => import("../pages/Profile"));
const Hashtag = lazy(() => import("../pages/Hashtag"));
const Messages = lazy(() => import("../pages/Messages"));
const Groups = lazy(() => import("../pages/Groups"));
const Live = lazy(() => import("../pages/Live"));
const Explore = lazy(() => import("../pages/Explore"));
const Notifications = lazy(() => import("../pages/Notifications"));
const NotFound = lazy(() => import("../pages/NotFound"));

const Root = () => {
  //  <MainLayout>
  return (
    <Suspense fallback={<Spinner />}>
      <Outlet />
    </Suspense>
  );
};

export const protectedRoutes = [
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/feed", element: <Home /> },
      { path: "/hashtag", element: <Hashtag /> },
      { path: "/marketplace", element: <Marketplace /> },
      { path: "/profile", element: <Profile /> },
      { path: "/message", element: <Messages /> },
      { path: "/live", element: <Live /> },
      { path: "/explore", element: <Explore /> },
      { path: "/notification", element: <Notifications /> },
      { path: "/groups", element: <Groups /> },
      { path: "*", element: <NotFound /> },
      //{ path: "*", element: <NotFound /> },
      //{ path: "/discussions/*", element: <DiscussionsRoutes /> },
    ],
  },
];
