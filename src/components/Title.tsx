import React from "react";
import styles from "/src/styles/Title.module.scss";

const title = "Weather24";

function Title(props: any) {
  return (
    <div className={styles.parent}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default Title;
