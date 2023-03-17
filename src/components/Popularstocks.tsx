import React, { useEffect, useState } from "react";
import "/src/styles/Popularstocks.scss";

const API_KEY = "cga2cuhr01qqlesgc7p0cga2cuhr01qqlesgc7pg";

function Popularstocks(props: any) {
  const [popularStocks, setPopularStocks] = useState<string[]>([]);

  useEffect(() => {
    fetch(`https://finnhub.io/api/v1/stock/popular?token=${API_KEY}&limit=5`)
      .then((response) => response.json())
      .then((data: any) => {
        const symbols = data.map((stock: any) => stock.displaySymbol);
        setPopularStocks(symbols);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="parentpopularstocks">
      <button className="btn btn1">
        <h1 className="popularstocktitle">{popularStocks[0]}</h1>
      </button>
      <button className="btn btn2">
        <h1 className="popularstocktitle">{popularStocks[1]}</h1>
      </button>
      <button className="btn btn3">
        <h1 className="popularstocktitle">{popularStocks[2]}</h1>
      </button>
      <button className="btn btn4">
        <h1 className="popularstocktitle">{popularStocks[3]}</h1>
      </button>
      <button className="btn btn5">
        <h1 className="popularstocktitle">{popularStocks[4]}</h1>
      </button>
    </div>
  );
}

export default Popularstocks;
