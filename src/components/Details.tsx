import React, { useEffect, useState } from "react";
import styles from "/src/styles/Details.module.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WEATHER_API_KEY = "a76aca2cbf214ceb941193109221012";
const OPENAI_API_KEY = "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";

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
async function getAstronomy(cityweather: string, date: any) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/astronomy.json?key=${WEATHER_API_KEY}&q=${cityweather}&dt=${date}`
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
  const [Text, setText] = useState("");
  const [Text3h, setText3h] = useState("");
  const [Text6h, setText6h] = useState("");
  const [Text9h, setText9h] = useState("");
  const [Text12h, setText12h] = useState("");
  const [prompt, setprompt] = useState("");
  const [Feelslike, setFeelslike] = useState("");
  const [Humidity, setHumidity] = useState("");
  const [UV, setUV] = useState("");
  const [Wind, setWind] = useState("");
  const [Precip, setPrecip] = useState("");
  const [Sunrise, setSunrise] = useState("");
  const [Sunset, setSunset] = useState("");

  const [Description, setDescription] = useState("");

  const date = new Date();
  const currenthour = date.getHours() + ":00";

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

      setText(currentweather.current.condition.text);

      setFeelslike(
        Math.round(currentweather.current.feelslike_c).toString() + "°C"
      );

      setHumidity(currentweather.current.humidity + " %");

      setUV(currentweather.current.uv);

      setWind(Math.round(currentweather.current.wind_kph) + " kph");

      setPrecip(currentweather.current.precip_mm + " mm");
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

      setText3h(hourforecast3h.forecast.forecastday[0].hour[0].condition.text);

      setIcon3h(hourforecast3h.forecast.forecastday[0].hour[0].condition.icon);

      const hourforecast6h = await getForecast(cityweather, forecast6h);

      setTemp6h(
        Math.round(hourforecast6h.forecast.forecastday[0].hour[0].temp_c) + "°C"
      );

      setText6h(hourforecast6h.forecast.forecastday[0].hour[0].condition.text);

      setIcon6h(hourforecast6h.forecast.forecastday[0].hour[0].condition.icon);

      const hourforecast9h = await getForecast(cityweather, forecast9h);

      setTemp9h(
        Math.round(hourforecast9h.forecast.forecastday[0].hour[0].temp_c) + "°C"
      );

      setText9h(hourforecast9h.forecast.forecastday[0].hour[0].condition.text);

      setIcon9h(hourforecast9h.forecast.forecastday[0].hour[0].condition.icon);

      const hourforecast12h = await getForecast(cityweather, forecast12h);

      setTemp12h(
        Math.round(hourforecast12h.forecast.forecastday[0].hour[0].temp_c) +
          "°C"
      );

      setText12h(
        hourforecast12h.forecast.forecastday[0].hour[0].condition.text
      );

      setIcon12h(
        hourforecast12h.forecast.forecastday[0].hour[0].condition.icon
      );
    }

    async function displayAstronomy() {
      const currentDate = new Date().toISOString().slice(0, 10);
      const astroweather = await getAstronomy(cityweather, currentDate);

      setSunrise(astroweather.astronomy.astro.sunrise);

      setSunset(astroweather.astronomy.astro.sunset);
    }

    if (cityweather) {
      displayweather();
      displayforecast();
      displayAstronomy();
    }
  }, [cityweather]);

  useEffect(() => {
    if (cityweather) {
      const prompt = `Generate a friendly weather description for ${Title}, focusing on the current conditions and what people might want to do on a day like this. Use the following information:
      time: ${currenthour} (dont say,use it so you know the time and dont say things like "It's a great day to get out and explore the city, as the temperature will be rising throughout the day " even thoug its night)
      Current temperature: ${Temp}
      feelslike temp: ${Feelslike}(dont say)
      Weather condition: ${Text}
      humidity: ${Humidity} (dont say the %, say for example "ist dry" )
      uv: ${UV}
      wind: ${Wind} 
      precip: ${Precip}
      Max temperature for today: ${MaxTemp}
      Min temperature for today: ${MinTemp}
      At ${forecastHour3h}, the temperature will be ${Temp3h} with ${Text3h}
      At ${forecastHour6h}, the temperature will be ${Temp6h} with ${Text6h}
      At ${forecastHour9h}, the temperature will be ${Temp9h} with ${Text9h}
      At ${forecastHour12h}, the temperature will be ${Temp12h} with ${Text12h}
      Craft a description that highlights the positive aspects of the weather, such as whether it's a good day for outdoor activities, or if people should plan to stay indoors. Use your creativity to make the description engaging and appealing to readers.`;

      setprompt(prompt);
    }
  }, [
    cityweather,
    Title,
    currenthour,
    Temp,
    Feelslike,
    Text,
    MaxTemp,
    MinTemp,
    forecastHour3h,
    Temp3h,
    Text3h,
    forecastHour6h,
    Temp6h,
    Text6h,
    forecastHour9h,
    Temp9h,
    Text9h,
    forecastHour12h,
    Temp12h,
    Text12h,
  ]);

  useEffect(() => {
    async function callOpenAIAPI() {
      const APIBody = {
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0,
        max_tokens: 400,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      };

      await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + OPENAI_API_KEY,
        },
        body: JSON.stringify(APIBody),
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setDescription(data.choices[0].text.trim());
        });
    }

    if (prompt) {
      callOpenAIAPI();
    }
  }, [prompt]);

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
        <div className={styles.humidityuvwindprecipparent}>
          <div className={styles.humidityuvwindprecip}>
            <h1 className={styles.humidityuvwindpreciptitle}>
              Humidity: {Humidity}
            </h1>
          </div>
          <div className={styles.humidityuvwindprecip}>
            <h1 className={styles.humidityuvwindpreciptitle}>UV: {UV}</h1>
          </div>
          <div className={styles.humidityuvwindprecip}>
            <h1 className={styles.humidityuvwindpreciptitle}>Wind: {Wind}</h1>
          </div>
          <div className={styles.humidityuvwindprecip}>
            <h1 className={styles.humidityuvwindpreciptitle}>
              Precipitation: {Precip}
            </h1>
          </div>
        </div>
        <div className={styles.suriseandsunsetparent}>
          <div className={styles.suriseandsunset}>
            <h1 className={styles.sunrisesunsetchild}>Sunrise: {Sunrise}</h1>
          </div>
          <div className={styles.suriseandsunsetconector}></div>
          <div className={styles.suriseandsunset}>
            <h1 className={styles.sunrisesunsetchild}>Sunset: {Sunset}</h1>
          </div>
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
