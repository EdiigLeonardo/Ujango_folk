import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import Notification from './Notification/Notification';
import styles from "./ListOfNotifications.module.scss";
import clsx from "clsx";


//Tem de receber o nome da página
//

let arrayOfPhotos = [];
for(let i=0; i<=10; i++){
    arrayOfPhotos.push({
      name: "João",
      src:"https://picsum.photos/1300/1200?random="+i
    });
}

export default function ListOfNotifications() {
  return (
    <div className={styles.notifications}>
        {arrayOfPhotos.map((photo, index) => (
        <div key={index}>
            <Notification name={photo.name} 
              imgSrc={photo.src} 
              message="viu seu perfil" 
              btnValue="Veja mais notificações" 
              time="18h">
            </Notification>
        </div>
      ))}
    </div>
  )
}
