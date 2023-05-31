import React, {useRef, useState} from "react";
import {
  faCircleUser,
  faImage,
  faFaceSmile,
  faPoll,
  faEarth,
  faExclamationTriangle,
  faCalendar,
  faStopwatch,
  faT,
  faUsersViewfinder,
  faSortDesc,
  faSortAsc,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CreatePost.scss";
import Post from "./Post";

function CreatePost() {
  const [isTyping, setIstyping] = useState(false);
  let initialState = [
  ]
  const [post, setPost] = useState(initialState);
  const textAreaRef = useRef();

  const handlePost = (e)=>{
    //useRef
    let value = textAreaRef.current.value;
    const random1 = Math.floor(Math.random()*20);
    const random2 = Math.floor(Math.random()*10);
    const agora = new Date();
    const hora = agora.toLocaleTimeString().split(":").map((value, index)=>{
      return index === 0 ? value + "h" : ""});

    setPost([{
      img: "https://picsum.photos/1300/1200?random=" + random1,
      name: "José Congo",
      checked: true,
      username: "@Partido",
      time: hora,
      place: "California",
      description: value,
      images:  ["https://picsum.photos/1300/1200?random=" + random2,"https://picsum.photos/1300/1200?random=" + random1]
    },...post]);

    textAreaRef.current.value = "";
    setIstyping(false);
  }
  const handleChange = (e) => {
    let value = e.target.value;
    if(value.length > 0){
      setIstyping(true);
    }
  }

  return (
      <div className="newPosts">
        <div className="new-post">
          <div className="user mb-3 d-flex justify-content-between">
            <div className="d-flex">
              <FontAwesomeIcon icon={faCircleUser} />
              <select>
                <option defaultValue>Post to timeline</option>
              </select>
            </div>
            <div className="icon-view">
              <FontAwesomeIcon icon={faUsersViewfinder} />
            </div>
          </div>

          <div className="d-flex">
        <textarea placeholder="What's on your mind?"
                  id="textArea"
                  ref={textAreaRef}
                  onChange={(e) => {
                    handleChange(e);
                  }}
        >
        </textarea>

            <div className="btn-group d-flex flex-column">
              <FontAwesomeIcon icon={faSortAsc} />
              <FontAwesomeIcon icon={faSortDesc} />
            </div>
          </div>

          <div className="d-flex icons">
            <div className="image">
              <FontAwesomeIcon icon={faImage} />
            </div>
            <div className="emoji">
              <FontAwesomeIcon icon={faFaceSmile} />
            </div>
            <div className="poll">
              <FontAwesomeIcon icon={faPoll} />
            </div>
            <div className="earth">
              <FontAwesomeIcon icon={faEarth} />
            </div>
            <div className="triangle">
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </div>
            <div className="calendar">
              <FontAwesomeIcon icon={faCalendar} />
            </div>
            <div className="clock">
              <FontAwesomeIcon icon={faStopwatch} />
            </div>
            <div className="t">
              <FontAwesomeIcon icon={faT} />
            </div>
          </div>
          <div>
            { isTyping ? <button className="submit rounded-pill flex"
                                 onClick={()=>{handlePost()}}
            >Post</button> : ""}
          </div>
          <br/>

        </div>
        {post.map((values, index) => {
            return (
                <Post
                    img={values.img}
                    name={values.name}
                    username={values.username}
                    time={values.time}
                    place={values.place}
                    description={values.description}
                    images={values.images}
                />
            );
          })}
      </div>
  );
}

export default CreatePost;

