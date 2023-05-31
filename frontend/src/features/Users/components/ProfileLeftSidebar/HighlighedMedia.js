import React from "react";
//import { useMatch } from "react-router-dom";

import styles from "./HighlighedMedia.module.scss";
import img from "../../../../assets/Photos/Ediig.jpeg";
import img2 from "../../../../assets/Photos/jose.jpeg";
import img4 from "../../../../assets/Photos/profile.jpeg";
import img3 from "../../../../assets/Photos/myself.jpeg";
import clsx from "clsx";

function HighlighedMedia() {
  const images = [
    img,
    img2,
    img4,
    img,
    img2,
    img3,
    img,
    img2,
    img3,
    img,
    img2,
    img3,
  ];

  return (
    <div className={clsx("card", styles.card_show_all)}>
      <h3>Media</h3>
      <a className={clsx("btn", styles.btn_show_all, "btn-outline-secondary")}>
        Show All
      </a>
      <div className={styles.grid_image_container}>
        {images.map((img, index) => {
          return <img key={index} src={img} alt="" />;
        })}
      </div>
    </div>
  );
}

export default HighlighedMedia;
