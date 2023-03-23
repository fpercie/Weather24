import React, { useState } from "react";
import styles from "/src/styles/Search.module.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Details from "./Details";

function Search(props: any) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className={styles.parent}>
      <input type="text" className={styles.input} />
      <button
        className={styles.searchbutton}
        onClick={() => setShowPopup(true)}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
      </button>
      <Details trigger={showPopup} setTrigger={setShowPopup} />
    </div>
  );
}

export default Search;
