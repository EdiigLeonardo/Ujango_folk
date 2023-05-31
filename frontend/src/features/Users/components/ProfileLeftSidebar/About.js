import clsx from "clsx";
import React from "react";
//import { useMatch } from "react-router-dom";

import styles from "./About.module.scss";
function About() {
  return (
    <div className={clsx("card", styles.about)}>
      <h3>About</h3>
      <p>
        Once you start noticing things, you don&apost stop noticing them. boris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        <br />
        Youtube: <a href="#">https://www.youtube.com</a>
        <br />
        Twitter: <a href="#">https://twitter.com/</a>
      </p>
      <hr className={styles.member_since_separator} />
      <div className={styles.member_since}>
        <i className="bi bi-geo-alt mi-3"></i>
        <span className="me-4">Lisbon, Portugal</span>
        <i className="bi bi-calendar-date-fill mi-3"></i>
        <span>Member Since 2015</span>
      </div>
    </div>
  );
}

export default About;
