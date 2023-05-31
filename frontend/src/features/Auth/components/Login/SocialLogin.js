import React from "react";
import LoginFacebookButton from "../../../../components/ui/Button/LoginFacebookButton";
import LoginGmailButton from "../../../../components/ui/Button/LoginGmailButton";

//import { auth, signInWithEmailAndPassword } from "./firebase";
//import { useAuthState } from "react-firebase-hooks/auth";

import { Link, useNavigate } from "react-router-dom";

function SocialLogin() {
  const navigate = useNavigate();
  const handleClickGoogle = () => {
    try {
      //signInWithGoogle;
      navigate("/", { state: { loggedin: true } });
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickFacebook = () => {
    try {
      signinWithFacebook;
      navigate("/", { state: { loggedin: true } });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <LoginFacebookButton handleClick={handleClickFacebook} />
      <LoginGmailButton handleClick={handleClickGoogle} />
    </div>
  );
}

export default SocialLogin;
