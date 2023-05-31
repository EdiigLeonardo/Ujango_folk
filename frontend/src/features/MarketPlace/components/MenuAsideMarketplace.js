import "./MenuAsideMarketplace.scss";
import React from "react";
import {
  faHouse,
  faBell,
  faTags,
  faShoppingBag,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";
import MenuAsideItem from "../../../components/app/MenuAsideItem";

function MenuAsideMarketplace() {
  return (
    <>
      <h3 className="subtitle pt-2">Menu</h3>
      <nav className="d-flex align-items-center navigation">
        <ul className="d-flex flex-column">
          <MenuAsideItem fa={faHouse} title="Explore" />
          <MenuAsideItem fa={faBell} title="Notifications" count="17" />
          <MenuAsideItem fa={faInbox} title="Inbox" />
          <MenuAsideItem fa={faShoppingBag} title="Purchase" />
          <MenuAsideItem fa={faTags} title="Sales" />
        </ul>
      </nav>
    </>
  );
}

export default MenuAsideMarketplace;
