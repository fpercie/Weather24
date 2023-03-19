import React from "react";
import styles from "/src/styles/Search.module.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search(props: any) {
  return (
    <div className={styles.parent}>
      <input type="text" className={styles.input} />
      <button className={styles.searchbutton}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
      </button>
    </div>
  );
}

export default Search;
