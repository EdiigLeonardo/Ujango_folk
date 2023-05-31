import React, { useState } from "react";
import Item from "./Item";
import * as TrendService from "../../../../services/Api";
import "./Trend.css";

function Trend() {
  const initialState = TrendService.getTrends();
  const [trends, setTrends] = useState(initialState);
  return (
    <div className="trend">
      <h1>Trendings</h1>
      <ul>
        {trends.map((trend, index) => {
          return (
            <Item
              key={index}
              title={trend.title}
              country={trend.country}
              nb_posts={trend.nb_posts}
            />
          );
        })}
      </ul>
      <a href="#">Show more</a>
    </div>
  );
}

export default Trend;
