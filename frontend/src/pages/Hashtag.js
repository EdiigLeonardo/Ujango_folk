import React from "react";
//import FeedRightSideBar from "../features/Feed/components/FeedRightSideBar";
import BaseLayout from "../layouts/BaseLayout";
import PostListsMenu from "../features/Post/components/PostListsMenu";
import { useLocation } from "react-router-dom";
import { useGetPosts } from "../features/Post/hooks/usePosts";

function Hashtag(props) {
  //const hashtag = props.hashtag;
  const location = useLocation();
  const hashtag = location.state.hashtag || "";
  const { isLoading, error, data } = useGetPosts("username");

  if (isLoading || error) return <div>Loading...</div>;

  //getInfoABoutThehashtag
  return (
    <BaseLayout>
      <h1>Hashtag</h1>
      <div>The clicked hashtag is {hashtag}</div>;
      <PostListsMenu posts={data} />
    </BaseLayout>
  );
}

export default Hashtag;
