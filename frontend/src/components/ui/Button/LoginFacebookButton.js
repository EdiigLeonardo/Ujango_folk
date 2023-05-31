import React from "react";
import Button from "./Button";
import classes from "./LoginFacebookButton.module.scss";
import clsx from "clsx";

function LoginFacebookButton({ handleClick }) {
  return (
    <Button
      title="Start with Facebook"
      icon={clsx("bi bi-facebook", classes.bi_facebook)}
      styles={{
        borderColor: "blue",
        color: "blue",
        backgroundColor: "inherit",
      }}
      handleClick={handleClick}
    />
  );
}

export default LoginFacebookButton;
