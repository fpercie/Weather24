import React from "react";
import styles from "/src/styles/Title.module.scss";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const title = "Stockcheck24";

function Title(props: any) {
  return (
    <div className={styles.parent}>
      <h1 className={styles.title}>{title}</h1>
      <FontAwesomeIcon icon={faArrowTrendUp} className={styles.icon} />
    </div>
  );
}

export default Title;
