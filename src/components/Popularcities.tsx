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
  const [NewYorkTemp, setNewYorkTemp] = useState("");
  const [NewYorkIcon, setNewYorkIcon] = useState("");

  const [LondonTitle, setLondonTitle] = useState("");
  const [LondonCountry, setLondonCountry] = useState("");
  const [LondonTemp, setLondonTemp] = useState("");
  const [LondonIcon, setLondonIcon] = useState("");

  const [MadridTitle, setMadridTitle] = useState("");
  const [MadridCountry, setMadridCountry] = useState("");
  const [MadridTemp, setMadridTemp] = useState("");
  const [MadridIcon, setMadridIcon] = useState("");

  const [MunichTitle, setMunichTitle] = useState("");
  const [MunichCountry, setMunichCountry] = useState("");
  const [MunichTemp, setMunichTemp] = useState("");
  const [MunichIcon, setMunichIcon] = useState("");

  const [TokyoTitle, setTokyoTitle] = useState("");
  const [TokyoCountry, setTokyoCountry] = useState("");
  const [TokyoTemp, setTokyoTemp] = useState("");
  const [TokyoIcon, setTokyoIcon] = useState("");

  useEffect(() => {
    async function fetchTitles() {
      const weatherNewYork = await getWeather("New York");
      setNewYorkTitle(weatherNewYork.location.name);
      setNewYorkCountry(weatherNewYork.location.country);
      setNewYorkTemp(weatherNewYork.current.temp_c);
      setNewYorkIcon(weatherNewYork.current.condition.icon);

      const weatherLondon = await getWeather("London");
      setLondonTitle(weatherLondon.location.name);
      setLondonCountry(weatherLondon.location.country);
      setLondonTemp(weatherLondon.current.temp_c);
      setLondonIcon(weatherLondon.current.condition.icon);

      const weatherMadrid = await getWeather("Madrid");
      setMadridTitle(weatherMadrid.location.name);
      setMadridCountry(weatherMadrid.location.country);
      setMadridTemp(weatherMadrid.current.temp_c);
      setMadridIcon(weatherMadrid.current.condition.icon);

      const weatherMunich = await getWeather("Munich");
      setMunichTitle(weatherMunich.location.name);
      setMunichCountry(weatherMunich.location.country);
      setMunichTemp(weatherMunich.current.temp_c);
      setMunichIcon(weatherMunich.current.condition.icon);

      const weatherTokyo = await getWeather("Tokyo");
      setTokyoTitle(weatherTokyo.location.name);
      setTokyoCountry(weatherTokyo.location.country);
      setTokyoTemp(weatherTokyo.current.temp_c);
      setTokyoIcon(weatherTokyo.current.condition.icon);
    }
    fetchTitles();
  }, []);

  return (
    <div className={styles.parent}>
      <button className={styles.btn}>
        <h1 className={styles.popularcitytitle}>
          {MadridTitle}, {MadridCountry}
        </h1>
        <div className={styles.currenttempparent}>
          <p className={styles.currenttemp}>
            {Math.round(Number(MadridTemp))}°C
          </p>
          <img className={styles.currenttempicon} src={MadridIcon} />
        </div>
      </button>
      <button className={styles.btn}>
        <h1 className={styles.popularcitytitle}>
          {MunichTitle}, {MunichCountry}
        </h1>
        <div className={styles.currenttempparent}>
          <p className={styles.currenttemp}>
            {Math.round(Number(MunichTemp))}°C
          </p>
          <img className={styles.currenttempicon} src={MunichIcon} />
        </div>
      </button>
      <button className={styles.btn}>
        <h1 className={styles.popularcitytitle}>
          {TokyoTitle}, {TokyoCountry}
        </h1>
        <div className={styles.currenttempparent}>
          <p className={styles.currenttemp}>
            {Math.round(Number(TokyoTemp))}°C
          </p>
          <img className={styles.currenttempicon} src={TokyoIcon} />
        </div>
      </button>
      <button className={styles.btn}>
        <h1 className={styles.popularcitytitle}>
          {LondonTitle}, {LondonCountry}
        </h1>
        <div className={styles.currenttempparent}>
          <p className={styles.currenttemp}>
            {Math.round(Number(LondonTemp))}°C
          </p>
          <img className={styles.currenttempicon} src={LondonIcon} />
        </div>
      </button>
      <button className={styles.btn}>
        <h1 className={styles.popularcitytitle}>
          {NewYorkTitle}, {NewYorkCountry}
        </h1>
        <div className={styles.currenttempparent}>
          <p className={styles.currenttemp}>
            {Math.round(Number(NewYorkTemp))}°C
          </p>
          <img className={styles.currenttempicon} src={NewYorkIcon} />
        </div>
      </button>
    </div>
  );
}

export default Popularweather;
