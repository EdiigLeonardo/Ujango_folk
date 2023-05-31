import React from "react";
import styles from "./Footer.module.scss";
import clsx from "clsx";

const Footer = ({ className = "" }) => {
  return (
    <footer className={clsx(styles.footer, className)}>
      <ul className="d-flex flex-row  justify-content-center text-center">
        <li className="list-group-item">Sobre</li>
        <li className="list-group-item">Central de Ajuda</li>
        <li className="list-group-item">Termos de Serviço</li>
        <li className="list-group-item">Política de Privacidade</li>
        <li className="list-group-item">Política de cookies</li>
        <li className="list-group-item">Acessibilidade</li>
        <li className="list-group-item">Informações de anúncios</li>
        <li className="list-group-item">Blog</li>
        <li className="list-group-item">Status</li>
        <li className="list-group-item">Car</li>
      </ul>
    </footer>
  );
};

export default Footer;
