import React from "react";
import "./ShowAll.scss";
import img from "../../../../assets/Photos/Ediig.jpeg";
import img2 from "../../../../assets/Photos/jose.jpeg";
import img3 from "../../../../assets/Photos/myself.jpeg";
import img4 from "../../../../assets/Photos/profile.jpeg";

function ShowAll() {
  return (
    <div className="container-showAll">
      <div className="grid-show-all">
        <img src={img} />
        <img src={img2} />
        <img src={img4} />
        <img src={img} />
        <img src={img2} />
        <img src={img3} className="foto-grande" />
        <img src={img} />
        <img src={img2} />
        <img src={img3} className="foto-grande" />
        <img src={img} />
        <img src={img2} />
        <img src={img3} className="foto-grande" />
      </div>
    </div>
  );
}

export default ShowAll;
