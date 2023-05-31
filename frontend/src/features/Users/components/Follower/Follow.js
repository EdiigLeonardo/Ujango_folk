import React, { useState, useEffect } from "react";
import User from "./User";
import "./Follow.scss";
import * as FollowService from "../../../../services/Api";

function Follow({ title = "Who to follow" }) {
  const initialState = FollowService.getSuggestedPeopleToFollow();
  const [suggestedPeople, setSuggestedPeople] = useState(initialState);

  return (
    <div className="follow">
      <h1 className="title">{title}</h1>
      <div className="suggested-entity">
        {suggestedPeople.map((follow) => {
          return (
            <User
              key={follow.name}
              name={follow.name}
              username={follow.username}
              checked={follow.checked}
              img={follow.img}
            />
          );
        })}
      </div>
      <a href="#">Show more</a>
    </div>
  );
}

export default Follow;
