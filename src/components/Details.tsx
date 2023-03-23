import React, { useEffect, useState } from "react";
import styles from "/src/styles/Details.module.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Details(props: any) {
  return props.trigger ? (
    <div className={styles.parent}>
      <div className={styles.child}>
        <div className={styles.closediv}>
          <button
            className={styles.closeButton}
            onClick={() => props.setTrigger(false)}
          >
            <FontAwesomeIcon icon={faTimes} className={styles.icon} />
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default Details;
