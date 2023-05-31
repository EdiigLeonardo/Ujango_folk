import React from "react";
import styles from "./LoginLayout.module.scss";
import LoginPopup from "../features/Auth/components/Login/LoginPopup";
import LoginBanner from "../features/Auth/components/Login/LoginBanner";
//import img from "../assets/ujancoIcon.jpeg";
import Footer from "./Footer";

function LoginLayout() {
  return (
    <div className={styles.login}>
      <main className="d-flex justify-content-around">
        <LoginBanner />
        <LoginPopup />
      </main>
      <Footer className={styles.footer} />
    </div>
  );
}
export default LoginLayout;
