import React, { useEffect, useState } from "react";
import styles from "/src/styles/Details.module.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WEATHER_API_KEY = "f0a413b45f3448d7b70192646221012";

async function getweather(cityweather: string) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${cityweather}&aqi=no`
  );
  const data = await response.json();
  return data;
}

async function getForecast(cityweather: string, hour: any) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${cityweather}&hour=${hour}`
  );
  const data = await response.json();
  return data;
}

function Details(props: any) {
  const [Title, setTitle] = useState("");
  const [Temp, setTemp] = useState("");
  const [CurrentIcon, setCurrentIcon] = useState("");
  const [MaxTemp, setMaxTemp] = useState("");
  const [MinTemp, setMinTemp] = useState("");
  const [Temp3h, setTemp3h] = useState("");
  const [Icon3h, setIcon3h] = useState("");
  const [Temp6h, setTemp6h] = useState("");
  const [Icon6h, setIcon6h] = useState("");
  const [Temp9h, setTemp9h] = useState("");
  const [Icon9h, setIcon9h] = useState("");
  const [Temp12h, setTemp12h] = useState("");
  const [Icon12h, setIcon12h] = useState("");
  const [Description, setDescription] = useState("");

  const date = new Date();

  const forecastTime3h = new Date(date.getTime() + 3 * 60 * 60 * 1000);
  const forecast3h = forecastTime3h.getHours();
  const forecastHour3h = forecast3h + ":00";

  const forecastTime6h = new Date(date.getTime() + 6 * 60 * 60 * 1000);
  const forecast6h = forecastTime6h.getHours();
  const forecastHour6h = forecast6h + ":00";

  const forecastTime9h = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  const forecast9h = forecastTime9h.getHours();
  const forecastHour9h = forecast9h + ":00";

  const forecastTime12h = new Date(date.getTime() + 12 * 60 * 60 * 1000);
  const forecast12h = forecastTime12h.getHours();
  const forecastHour12h = forecast12h + ":00";

  const cityweather = props.city;
  useEffect(() => {
    async function displayweather() {
      const currentweather = await getweather(cityweather);

      setTitle(
        currentweather.location.name + ", " + currentweather.location.country
      );

      setTemp(Math.round(currentweather.current.temp_c).toString() + "°C");

      setCurrentIcon(currentweather.current.condition.icon);
    }

    async function displayforecast() {
      const forecastweather = await getForecast(cityweather, date);

      setMaxTemp(
        Math.round(forecastweather.forecast.forecastday[0].day.maxtemp_c) + "°C"
      );

      setMinTemp(
        Math.round(forecastweather.forecast.forecastday[0].day.mintemp_c) + "°C"
      );

      const hourforecast3h = await getForecast(cityweather, forecast3h);

      setTemp3h(
        Math.round(hourforecast3h.forecast.forecastday[0].hour[0].temp_c) + "°C"
      );

      setIcon3h(hourforecast3h.forecast.forecastday[0].hour[0].condition.icon);

      const hourforecast6h = await getForecast(cityweather, forecast6h);

      setTemp6h(
        Math.round(hourforecast6h.forecast.forecastday[0].hour[0].temp_c) + "°C"
      );

      setIcon6h(hourforecast6h.forecast.forecastday[0].hour[0].condition.icon);

      const hourforecast9h = await getForecast(cityweather, forecast9h);

      setTemp9h(
        Math.round(hourforecast9h.forecast.forecastday[0].hour[0].temp_c) + "°C"
      );

      setIcon9h(hourforecast9h.forecast.forecastday[0].hour[0].condition.icon);

      const hourforecast12h = await getForecast(cityweather, forecast12h);

      setTemp12h(
        Math.round(hourforecast12h.forecast.forecastday[0].hour[0].temp_c) +
          "°C"
      );

      setIcon12h(
        hourforecast12h.forecast.forecastday[0].hour[0].condition.icon
      );
    }

    if (cityweather) {
      displayweather();
      displayforecast();
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
        <div className={styles.titleparent}>
          <h1 className={styles.title}>{Title}</h1>
        </div>
        <div className={styles.aidescriptionparent}>
          <div className={styles.aitextparent}>
            <p className={styles.aidescription}>{Description}</p>
          </div>
        </div>
        <div className={styles.tempparent}>
          <p className={styles.currenttemp}>{Temp}</p>
          <img className={styles.CurrentIcon} src={CurrentIcon} />
        </div>
        <div className={styles.minandmaxtemp}>
          <p className={styles.minormaxtemp}>{MinTemp}</p>
          <div className={styles.minmaxtempconnection}></div>
          <p className={styles.minormaxtemp}>{MaxTemp}</p>
        </div>
        <div className={styles.hourforecast}>
          <div className={styles.forecasthour}>
            <div className={styles.parenthourinxhours}>
              <p className={styles.hourinxhours}>{forecastHour3h}</p>
            </div>
            <div className={styles.parenttempinxhours}>
              <p className={styles.tempinxhours}>{Temp3h}</p>
            </div>
            <div className={styles.parenticoninxhours}>
              <img className={styles.iconinxhours} src={Icon3h} />
            </div>
          </div>
          <div className={styles.forecasthour}>
            <div className={styles.parenthourinxhours}>
              <p className={styles.hourinxhours}>{forecastHour6h}</p>
            </div>
            <div className={styles.parenttempinxhours}>
              <p className={styles.tempinxhours}>{Temp6h}</p>
            </div>
            <div className={styles.parenticoninxhours}>
              <img className={styles.iconinxhours} src={Icon6h} />
            </div>
          </div>
          <div className={styles.forecasthour}>
            <div className={styles.parenthourinxhours}>
              <p className={styles.hourinxhours}>{forecastHour9h}</p>
            </div>
            <div className={styles.parenttempinxhours}>
              <p className={styles.tempinxhours}>{Temp9h}</p>
            </div>
            <div className={styles.parenticoninxhours}>
              <img className={styles.iconinxhours} src={Icon9h} />
            </div>
          </div>
          <div className={styles.forecasthour}>
            <div className={styles.parenthourinxhours}>
              <p className={styles.hourinxhours}>{forecastHour12h}</p>
            </div>
            <div className={styles.parenttempinxhours}>
              <p className={styles.tempinxhours}>{Temp12h}</p>
            </div>
            <div className={styles.parenticoninxhours}>
              <img className={styles.iconinxhours} src={Icon12h} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Details;
