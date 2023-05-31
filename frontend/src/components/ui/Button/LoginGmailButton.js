import React from "react";
import Button from "./Button";
import clsx from "clsx";
import classes from "./LoginGmailButton.module.scss";

function LoginGmailButton({ handleClick }) {
  return (
    <Button
      title="Start with Google"
      icon={clsx("bi", "bi-google", classes.bi_google)}
      styles={{
        borderColor: "green",
        color: "green",
        backgroundColor: "white",
      }}
      handleClick={handleClick}
    />
  );
}

export default LoginGmailButton;
