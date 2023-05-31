import "./Labels.css";
import React from "react";
import Label from "../../MarketPlace/components/Label";
import NewPost from "../../features/Post/components/NewPost";

function Labels() {
  return (
    <div className="labels">
      <Label value="Dashboard" />
      <Label value="Saved" />
      <Label value="All Categories" />
    </div>
  );
}

export default Labels;
