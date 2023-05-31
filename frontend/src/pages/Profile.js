import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ProfileLayout from "../layouts/ProfileLayout";

import PostListsMenu from "../features/Post/components/PostListsMenu";
import { useGetPosts } from "../features/Post/hooks/usePosts";

function Profile() {
  //username name can come from anywhere
  const location = useLocation();
  const navigate = useNavigate();
  //navigate(-1)
  const username = location.state?.username ?? "@elit";

  const { isLoading, error, data } = useGetPosts(username);

  if (isLoading) return <div>Loadind profile ...</div>;
  if (error) return <div>Oh no an error occur</div>;
  /*
  //console.log(detail_data);
  //console.log(timeline_data);*/

  /*
  const useGetProfileDetail(username);
  //const { isLoading, error, data } = useQuery("activities", () =>
  //fetch("activities").then((res) => res.json())
  //);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;*/
  //çgetProfileInfo
  //let isProfile = false;

  return (
    <ProfileLayout>
      <PostListsMenu posts={data} />
    </ProfileLayout>
  );
}

export default Profile;
