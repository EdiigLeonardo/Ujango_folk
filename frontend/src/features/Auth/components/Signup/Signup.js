import "./Signup.css";
import React from "react";
import rocketImg from "./rocket.png";
import SignupForm from "./SignupForm";
import Footer from "../../../../layouts/Footer";

function Signup() {
  return (
    <>
      <div className="container mt-3 p-5">
        <div className="row">
          <div className="col-md-7 my-auto">
            <img className="img-fluid w-100" src={rocketImg} alt="" />
          </div>
          <div className="col-md-5">
            <SignupForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
