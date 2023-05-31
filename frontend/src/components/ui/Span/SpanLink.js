import React from "react";
import { useNavigate } from "react-router-dom";

function SpanLink({ word }) {
  const type = word[0];

  const navigate = useNavigate();

  const handleSpanClick = () => {
    if (type === "@")
      //navigate(`/profile/${word.substr(1)}`, { state: { username: word } });
      navigate("/profile", { state: { username: word } });
    if (type === "#")
      navigate(`/hashtag/${word.substr(1)}`, { state: { hashtag: word } });
  };

  return (
    <span
      style={{
        color: "var(--dark-orange)",
        cursor: "pointer",
        textDecoration: "none",
        display: "inline",
        fontWeight: "bold",
      }}
      onClick={handleSpanClick}
    >
      {" " + word + " "}
    </span>
  );
}

export default SpanLink;
