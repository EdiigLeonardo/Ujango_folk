import React from "react";

import MarketViewItemList from "../features/MarketPlace/components/MarketViewItemList";

import BaseLayout from "../layouts/BaseLayout";
import MarketplaceRightSidebar from "../features/MarketPlace/components/MarketplaceRightSidebar";

function Marketplace() {
  return (
    <BaseLayout right_sidebar={<MarketplaceRightSidebar />}>
      <MarketViewItemList />
    </BaseLayout>
  );
}

export default Marketplace;
