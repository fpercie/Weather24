import React, { useEffect, useState } from "react";
import "/src/styles/Popularstocks.module.scss";

const API_KEY = "cga2cuhr01qqlesgc7p0cga2cuhr01qqlesgc7pg";

function Popularstocks(props: any) {
  return (
    <div className="parentpopularstocks">
      <button className="btn btn1">
        <h1 className="popularstocktitle"></h1>
      </button>
      <button className="btn btn2">
        <h1 className="popularstocktitle"></h1>
      </button>
      <button className="btn btn3">
        <h1 className="popularstocktitle"></h1>
      </button>
      <button className="btn btn4">
        <h1 className="popularstocktitle"></h1>
      </button>
      <button className="btn btn5">
        <h1 className="popularstocktitle"></h1>
      </button>
    </div>
  );
}

export default Popularstocks;
