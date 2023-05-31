import React from "react";
//import FeedRightSideBar from "../features/Feed/components/FeedRightSideBar";
import BaseLayout from "../layouts/BaseLayout";
import PostListsMenu from "../features/Post/components/PostListsMenu";
import GroupDetail from "../features/Group/components/GroupDetail";
import { useGetPosts } from "../features/Post/hooks/usePosts";

function Groups() {
  const { isLoading, error, data } = useGetPosts("username");

  if (isLoading || error) return <div>Loading...</div>;
  return (
    <BaseLayout>
      <h1>Groups</h1>
      <GroupDetail />
      <PostListsMenu posts={data} />
    </BaseLayout>
  );
}

export default Groups;
