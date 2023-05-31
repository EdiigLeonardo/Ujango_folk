import React from "react";
import FeedRightSideBar from "../features/Feed/components/FeedRightSideBar";
import BaseLayout from "./BaseLayout";

function HomeLayout({ children }) {
  return (
    <BaseLayout right_sidebar={<FeedRightSideBar />}>{children}</BaseLayout>
  );
}

export default HomeLayout;
