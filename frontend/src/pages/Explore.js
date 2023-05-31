import React from "react";
//import FeedRightSideBar from "../features/Feed/components/FeedRightSideBar";
import BaseLayout from "../layouts/BaseLayout";
import PostListsMenu from "../features/Post/components/PostListsMenu";
import FeedRightSideBar from "../features/Feed/components/FeedRightSideBar";
import { useGetPosts } from "../features/Post/hooks/usePosts";

function Explore() {
  const { isLoading, error, data } = useGetPosts("username");

  if (isLoading || error) return <div>Loading...</div>;

  return (
    <BaseLayout right_sidebar={<FeedRightSideBar />}>
      <h1>Explore</h1>
      <PostListsMenu posts={data} />
    </BaseLayout>
  );
}

export default Explore;
