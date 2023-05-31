import React from "react";
import Post from "./Post";
import "./PostListsMenu.scss";

function PostListsMenu(props) {
  const { posts = [] } = props;

  if (!posts) {
    return <div>No posts found</div>;
  }

  return (
    <div className="post-lists">
      {posts.map((post) => {
        return (
          <Post
            img={post.img}
            name={post.name}
            username={post.username}
            time={post.time}
            place={post.place}
            description={post.description}
            images={post.images}
          />
        );
      })}
    </div>
  );
}

export default PostListsMenu;
