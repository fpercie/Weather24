import React from "react";
import "/src/styles/Title.scss";

const title = "Stockcheck24";

function Title(props: any) {
  return (
    <div className="parent">
      <div className="child">
        <h1 className="title">{title}</h1>
        <div className="icon">
          <i className="fa-solid fa-arrow-trend-up"></i>
        </div>
      </div>
    </div>
  );
}

export default Title;
