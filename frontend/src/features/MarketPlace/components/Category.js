import "./Category.scss";
import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
  return (
    <div className="category mt-3">
      <h3>Marketplace Categories</h3>
      <ul>
        <li>
          <span>Apparel</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
        <li>
          <span>Beauty</span> <FontAwesomeIcon icon={faChevronRight} />
        </li>
        <li>
          <span>Books</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
        <li>
          <span>T-shirts</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
      </ul>
    </div>
  );
}

export default Search;
