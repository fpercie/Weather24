import React, { useEffect, useState } from "react";
import styles from "/src/styles/Popularstocks.module.scss";

const API_KEY = "yUOn9GKpWCY7EbAGg_7KfZgrRV2BvjZk";

const date = new Date().toISOString().slice(0, 10);

async function fetchPopularStocks(stock: string) {
  const response = await fetch(
    `https://api.polygon.io/v3/reference/tickers/${stock}?date=${date}&apiKey=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

function Popularstocks() {
  const [appleTitle, setAppleTitle] = useState(null);

  useEffect(() => {
    async function fetchTitles() {
      const appleResponse = await fetchPopularStocks("AAPL");
      setAppleTitle(appleResponse.name);
    }
    fetchTitles();
  }, []);

  return (
    <div className={styles.parent}>
      <button className={styles.btn}>
        <h1 className={styles.popularstocktitle}></h1>
      </button>
      <button className={styles.btn}>
        <h1 className={styles.popularstocktitle}></h1>
      </button>
      <button className={styles.btn}>
        <h1 className={styles.popularstocktitle}></h1>
      </button>
      <button className={styles.btn}>
        <h1 className={styles.popularstocktitle}></h1>
      </button>
      <button className={styles.btn}>
        <h1 className={styles.popularstocktitle}>{appleTitle}</h1>
      </button>
    </div>
  );
}

export default Popularstocks;
