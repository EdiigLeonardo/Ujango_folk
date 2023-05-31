import React, { useEffect } from "react";
/*import { useAuth } from "../features/Auth/hooks/useAuth";*/
import { useNavigate } from "react-router-dom";
//import LoginUser from "../features/Auth/components/Login";
import { useSelector } from "react-redux";
import LoginLayout from "../layouts/LoginLayout";

const Login = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return <LoginLayout />;
};

export default Login;
