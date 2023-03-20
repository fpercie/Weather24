import React, { useEffect, useState } from "react";
import styles from "/src/styles/Popularcities.module.scss";

const API_KEY = "f0a413b45f3448d7b70192646221012";

async function getWeather(city: string) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
  );
  const data = await response.json();
  return data;
}

function Popularweather() {
  const [NewYorkTitle, setNewYorkTitle] = useState("");
  const [NewYorkCountry, setNewYorkCountry] = useState("");
  const [LondonTitle, setLondonTitle] = useState("");
  const [LondonCountry, setLondonCountry] = useState("");
  const [MadridTitle, setMadridTitle] = useState("");
  const [MadridCountry, setMadridCountry] = useState("");
  const [MunichTitle, setMunichTitle] = useState("");
  const [MunichCountry, setMunichCountry] = useState("");
  const [TokyoTitle, setTokyoTitle] = useState("");
  const [TokyoCountry, setTokyoCountry] = useState("");

  useEffect(() => {
    async function fetchTitles() {
      const weatherNewYork = await getWeather("New York");
      setNewYorkTitle(weatherNewYork.location.name);
      setNewYorkCountry(weatherNewYork.location.country);

      const weatherLondon = await getWeather("London");
      setLondonTitle(weatherLondon.location.name);
      setLondonCountry(weatherLondon.location.country);

      const weatherMadrid = await getWeather("Madrid");
      setMadridTitle(weatherMadrid.location.name);
      setMadridCountry(weatherMadrid.location.country);

      const weatherMunich = await getWeather("Munich");
      setMunichTitle(weatherMunich.location.name);
      setMunichCountry(weatherMunich.location.country);

      const weatherTokyo = await getWeather("Tokyo");
      setTokyoTitle(weatherTokyo.location.name);
      setTokyoCountry(weatherTokyo.location.country);
    }
    fetchTitles();
  }, []);

  return (
    <div className={styles.parent}>
      <button className={styles.btn}>
        <h1 className={styles.popularcitytitle}>
          {MadridTitle}, {MadridCountry}
        </h1>
      </button>
      <button className={styles.btn}>
        <h1 className={styles.popularcitytitle}>
          {MunichTitle}, {MunichCountry}
        </h1>
      </button>
      <button className={styles.btn}>
        <h1 className={styles.popularcitytitle}>
          {TokyoTitle}, {TokyoCountry}
        </h1>
      </button>
      <button className={styles.btn}>
        <h1 className={styles.popularcitytitle}>
          {LondonTitle}, {LondonCountry}
        </h1>
      </button>
      <button className={styles.btn}>
        <h1 className={styles.popularcitytitle}>
          {NewYorkTitle}, {NewYorkCountry}
        </h1>
      </button>
    </div>
  );
}

export default Popularweather;
