import React from "react";
import "/src/styles/Search.scss";

function Search(props: any) {
  return (
    <div className="parent">
      <input type="text" className="input" />
      <button className="searchbutton">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

export default Search;
