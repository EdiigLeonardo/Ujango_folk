import styles from "./Navibar.module.scss";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import MenuItem from "../components/app/MenuItem";
import MenuIcon from "../components/app/MenuIcon";
import {
  faHouse,
  faGlobe,
  faTags,
  faUserGroup,
  faSignal,
  faBell,
  faComments,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import url from "../assets/myself.jpeg";
import clsx from "clsx";

function Navibar() {
  return (
    <nav className={clsx("d-flex align-items-center", styles.navbar)}>
      <ul className="d-flex justify-content-center ">
        <NavLink
          exact="true"
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/"
        >
          <MenuItem fa={faHouse} title="Home" />
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/explore"
        >
          <MenuItem fa={faGlobe} title="Explore" />
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/marketplace"
        >
          <MenuItem fa={faTags} title="Marketplace" />
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/groups"
        >
          <MenuItem fa={faUserGroup} title="Groups" />
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/live"
        >
          <MenuItem fa={faSignal} title="Live" />
        </NavLink>
      </ul>

      <div className={styles.separator}></div>
      <ul className={clsx("d-flex align-items-center", styles.second_nav)}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/notification"
        >
          <MenuIcon fa={faBell} count="17" />
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/message"
        >
          <MenuIcon fa={faComments} />
        </NavLink>
      </ul>
      <div className={styles.separator}></div>
      <Link to="/profile">
        <MenuIcon fa={faPerson} img={url} />
      </Link>
    </nav>
  );
}

export default Navibar;
