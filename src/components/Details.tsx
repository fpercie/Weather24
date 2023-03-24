import React, { useEffect, useState } from "react";
import styles from "/src/styles/Details.module.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const API_KEY = "f0a413b45f3448d7b70192646221012";

async function getweather(cityweather: any) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityweather}&aqi=no`
  );
  const data = await response.json();
  return data;
}

function Details(props: any) {
  const [Title, setTitle] = useState("");

  const cityweather = props.city;
  useEffect(() => {
    async function displayweather() {
      const currentweather = await getweather(cityweather);

      setTitle(
        currentweather.location.name + ", " + currentweather.location.country
      );
    }

    if (cityweather) {
      displayweather();
    }
  }, [cityweather]);

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
        <h1>{Title}</h1>
      </div>
    </div>
  ) : null;
}

export default Details;
