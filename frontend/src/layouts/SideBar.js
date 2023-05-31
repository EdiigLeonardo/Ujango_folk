import React from "react";
import styles from "./SideBar.module.scss";
import clsx from "clsx";
import {
  faTags,
  faAreaChart,
  faArrowUp,
  faHouse,
  faBell,
  faComments,
  faUserGroup,
  faList,
  faGlobe,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import MenuAsideItem from "../components/app/MenuAsideItem";
import WriteAPostButton from "../components/ui/Button/WriteAPostButton";
import { NavLink, Link } from "react-router-dom";

function SideBar({ className = "" }) {
  return (
    <div className={clsx(styles.aside, className)}>
      <WriteAPostButton />
      <>
        <h3 className={clsx(styles.subtitle)}>Menu</h3>
        <nav className={clsx(styles.navigation, "d-flex align-items-center")}>
          <ul className="d-flex flex-column">
            <NavLink
              exact="true"
              className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
              to="/"
            >
                <MenuAsideItem fa={faHouse} title="Home" />
            </NavLink>
            <NavLink
              exact="true"
              className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
              to="/notification"
            >
                <MenuAsideItem fa={faBell} title="Notifications" count="16+" />
            </NavLink>
            <NavLink
              exact="true"
              className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
              to="/marketplace"
            >
                <MenuAsideItem fa={faTags} title="Marketplace" />
            </NavLink>

            <NavLink
              exact="true"
              className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
              to="/chats"
            >
                  <MenuAsideItem fa={faComments} title="Chats" />
            </NavLink>

            <NavLink
              exact="true"
              className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
              to="/groups"
            >
                <MenuAsideItem fa={faUserGroup} title="Groups" />
            </NavLink>

            <NavLink
              exact="true"
              className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
              to="/feed"
            >
                <MenuAsideItem fa={faList} title="Feeds" />
            </NavLink>
            <NavLink
              exact="true"
              className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
              to="/explore"
            >
                <MenuAsideItem fa={faGlobe} title="Explore" />
            </NavLink>
            <NavLink
              exact="true"
              className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
              to="/feed"
            >
                <MenuAsideItem fa={faGlobe} title="Pro Feed" />
            </NavLink>
            <MenuAsideItem fa={faEllipsis} title="More" />
          </ul>
        </nav>
      </>
      <h3 className={clsx(styles.subtitle)}>Explore</h3>
      <nav className={clsx(styles.navigation, "d-flex align-items-center ")}>
        <ul className="d-flex flex-column">
          <MenuAsideItem fa={faTags} title="Shope" count="18" />
          <MenuAsideItem fa={faAreaChart} title="Trends" />
          <MenuAsideItem fa={faArrowUp} title="UjangoPro" />
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
