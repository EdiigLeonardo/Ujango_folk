import React from "react";

import "./Post.scss";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Reactions from "./Reactions";
import MediaDisplay from "./MediaPostDisplay/MediaDisplay";
import PostHeader from "./PostHeader";

function Post(props) {
  return (
    <div className="post mb-3">
      {props.repostName ? (
        <div className="repost d-flex align-items-center">
          <FontAwesomeIcon icon={faRepeat} />
          <div>
            <h1>{props.repostName}</h1>
            <h2>Reposted</h2>
          </div>
        </div>
      ) : (
        ""
      )}
      <PostHeader
        img={props.img}
        name={props.name}
        username={props.username}
        time={props.time}
        place={props.place}
        checked={props.checked}
      />

      <div className="d-flex content flex-column">
        <p>{props.description}</p>
        {props.images.length ? <MediaDisplay mediaList={props.images} /> : ""}
      </div>
      <Reactions className="mb-4" />
    </div>
  );
}

export default Post;
