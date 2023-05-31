import React from "react";
import Search from "./Search";
import Category from "./Category";

function MarketplaceRightSidebar() {
  return (
    <div className="d-flex flex-column gap-4">
      <Search />
      <Category />
    </div>
  );
}

export default MarketplaceRightSidebar;
