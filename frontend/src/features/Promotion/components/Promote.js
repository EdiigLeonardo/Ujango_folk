import React from "react";
import Item from "./Item";
import "./Promote.css";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePromoted } from "../hooks/usePrometed";

function Promote() {
  const { isLoading, error, data } = usePromoted("current uuser logged-in");

  if (isLoading || error) return <div>Loading...</div>;

  return (
    <div className="promote">
      <div className="d-flex justify-content-between align-items-start head">
        <h1 className="title">Promoted</h1>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
      <div>
        {data.map((promote) => {
          return (
            <Item
              key={promote.name}
              name={promote.name}
              description={promote.description}
              img={promote.img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Promote;
