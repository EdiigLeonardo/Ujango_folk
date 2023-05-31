import React from "react";
import "./Timeline.scss";
import "../../../../layouts/Header/Header.scss";
import Post from "../../../Post/components/Post";
import img from "../../../../assets/Photos/Ediig.jpeg";
import img2 from "../../../../assets/Photos/jose.jpeg";

function Timeline() {
  return (
    <div className="timeline">
      <div className="main-aside-menu">
        <div className="post-lists">
          <Post
            img={img}
            name="Ediig Melchiior"
            time="9h"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            images={[img, img]}
          />
          <Post
            img={img}
            repostName=""
            name="Ediig Melchiior"
            time="9h"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            images={[img2]}
          />

          <Post
            img={img}
            name="Ediig Melchiior"
            time="9h"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            images={[img]}
          />
        </div>
      </div>
    </div>
  );
}

export default Timeline;
