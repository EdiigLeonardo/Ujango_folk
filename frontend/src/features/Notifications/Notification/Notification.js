import React from 'react'
import styles from "./Notification.module.scss";
import clsx from "clsx";

const img = "https://picsum.photos/1300/1200?random=2";
const name = "Edig Leonardo"

const Notification = ({ name, imgSrc, icon, message, btnValue, time}) => {
    return (
      <div className={styles.notification}>
        <div className={styles.leftSide}>

          {imgSrc ? <div className={styles.image}>
                  <img src={imgSrc} alt="imagem de perfil" className={styles.imgSc}></img>
              </div> : ""}

          <div className={styles.notificationInfo}>

            <div className={styles.notificationText}>
              <div className={styles.name}>
                {name}
              </div>
              {icon ? 
                <div className={styles.icon}>
                  <i className={icon}></i>
                </div> : "" }
            
              <div className={styles.message}>
                {message}
              </div>
            </div>

            <div className={styles.btnDiv}>
              <button className={clsx(styles.btn, styles.btnClose)}>{btnValue}</button>
          </div>

          </div>
        </div>


        <div className={styles.rightSide}>
          <div className={styles.time}>
              {time}
            </div>
        </div>
        
      </div>
    );
  };
  
  export default Notification;
