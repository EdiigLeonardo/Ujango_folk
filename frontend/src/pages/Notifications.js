import React from "react";
import FeedRightSideBar from "../features/Feed/components/FeedRightSideBar";
import BaseLayout from "../layouts/BaseLayout";
import PostListsMenu from "../features/Post/components/PostListsMenu";
import Notification from "../features/Notifications/Notification/Notification";
import ListOfNotifications from "../features/Notifications/NotificationsList";
import { useGetPosts } from "../features/Post/hooks/usePosts";

function Notifications() {
  const { isLoading, error, data } = useGetPosts("username");

  if (isLoading || error) return <div>Loading...</div>;
  return (
    <BaseLayout right_sidebar={<FeedRightSideBar />}>
      <h1>Notifications</h1>
      <ListOfNotifications></ListOfNotifications>
    </BaseLayout>
  );
}

export default Notifications;
