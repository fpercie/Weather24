import React, { useEffect, useState } from "react";
import styles from "/src/styles/Popularstocks.module.scss";

const API_KEY = "cga2cuhr01qqlesgc7p0cga2cuhr01qqlesgc7pg";

function Popularstocks(props: any) {
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
        <h1 className={styles.popularstocktitle}></h1>
      </button>
    </div>
  );
}

export default Popularstocks;
