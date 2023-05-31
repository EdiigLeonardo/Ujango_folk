import "./Search.scss";
import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
  return (
    <div className="search">
      <h3>Search</h3>
      <div className="search-form rounded-pill">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="Search Marketplace" />
      </div>
      <div className="filters">
        <h4>Filters</h4>
        <div className="filter d-flex">
          <label>Sortby</label>
          <select className="rounded-pill">
            <option>Newest</option>
            <option>Oldest</option>
            <option>Price Asc</option>
            <option>Price Desc</option>
          </select>
        </div>
        <div className="filter d-flex">
          <label>Category</label>
          <select className="rounded-pill">
            <option>Apparel</option>
            <option>Beauty</option>
            <option>Books</option>
            <option>Camping & Hiking</option>
          </select>
        </div>
        <div className="filter d-flex">
          <label>Price</label>
          <div className="d-flex">
            <input type="text" placeholder="Min" className="rounded-pill" />{" "}
            <span>to</span>
            <input type="text" placeholder="Max" className="rounded-pill" />
          </div>
        </div>
        <div className="more">
          <button className="rounded-pill">More Filters</button>
          <hr />
        </div>
        <button className="submit rounded-pill">Submit</button>
      </div>
    </div>
  );
}

export default Search;
