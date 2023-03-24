import React, { useState } from "react";
import styles from "/src/styles/Search.module.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Details from "./Details";

function Search(props: any) {
  const [showPopup, setShowPopup] = useState(false);
  const [city, setcity] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcity(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setShowPopup(true);
    }
  };

  return (
    <div className={styles.parent}>
      <input
        type="text"
        className={styles.input}
        value={city}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className={styles.searchbutton}
        onClick={() => setShowPopup(true)}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
      </button>
      <Details
        trigger={showPopup}
        setTrigger={setShowPopup}
        city={city}
        setcity={setcity}
      />
    </div>
  );
}

export default Search;
