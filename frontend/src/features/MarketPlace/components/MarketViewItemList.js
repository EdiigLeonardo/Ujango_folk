import "./MarketViewItemList.scss";
import { useGetAllProducts } from "../hooks/useGetAllProducts";
import React from "react";
import MenuAsideMarketplace from "./MenuAsideMarketplace";
import Labels from "./Label";
import { faList, faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MarketItem from "./MarketItem";

function MarketViewItemList() {
  const [error, isloading, data] = useGetAllProducts("");

  //if (error | isloading) return <div>Loading...</div>;
  console.log(data);

  /*<Navibar />
      <div className="container marketplace-body">
        <div className="row">
         
          
            <MarketViewItemList />
       
          <div className="right col-md-3">
            
          </div>
        </div> */
  /* <aside className="aside col-md-2">
            <div className="aside-fixed">
              <h1 className="title">Marketplace</h1>
              <Labels />
              <MenuAsideMarketplace />
            </div>
          </aside> */
  /*
  
  <main className="main col-md-7">
            <div className="d-flex justify-content-between align-items-center market-label">
              <h2 className="main-title">Latest Listenings</h2>
              <div className="btns d-flex">
                <div className="btn-1">
                  <FontAwesomeIcon icon={faList} />
                </div>
                <div className="active">
                  <FontAwesomeIcon icon={faBorderAll} />
                </div>
              </div>
            </div>*/

  return (
    <div className="market">
      {data.map((obj) => (
        <MarketItem
          key={obj.id}
          src={obj.src}
          price={obj.price}
          title={obj.title}
          description={obj.description}
          place={obj.place}
          advertiser={obj.advertiser}
        />
      ))}
    </div>
  );
}

export default MarketViewItemList;
