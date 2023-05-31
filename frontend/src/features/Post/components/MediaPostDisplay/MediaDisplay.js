import React from "react";

function MediaDisplay({ mediaList = [] }) {
  return (
    <div className="photos mt-1">
      {mediaList.map((img, index) => (
        <img className="photo" key={index} src={img} />
      ))}
    </div>
  );
}

export default MediaDisplay;
