import React, { useState, useEffect } from "react";
import CreatePost from "../features/Post/components/CreatePost";
import PostListsMenu from "../features/Post/components/PostListsMenu";
import HomeLayout from "../layouts/HomeLayout";

import { useGetPosts } from "../features/Post/hooks/usePosts";

function Home() {
  const { isLoading, error, data } = useGetPosts("username");

  if (isLoading || error) return <div>Loading...</div>;
  //const [posts, setPosts] = useState(data);
  const username = "johnbell";

  return (
    <HomeLayout>
      <div className="d-flex flex-column gap-3">
        <CreatePost />
        <PostListsMenu posts={data} />
      </div>
    </HomeLayout>
  );
}

export default Home;
