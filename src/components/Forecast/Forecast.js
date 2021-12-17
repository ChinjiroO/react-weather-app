import React, { useState } from "react";
import styles from "./Forecast.module.css";

const mockDaily = [
  {
    date: "Thu, Dec 16",
    icon: "http://openweathermap.org/img/wn/02d@2x.png",
    day_temp: "29",
    night_temp: "26",
    feels_like: "clear sky",
  },
  {
    date: "Fri, Dec 17",
    icon: "http://openweathermap.org/img/wn/02d@2x.png",
    day_temp: "30",
    night_temp: "20",
    feels_like: "broken clouds",
  },
  {
    date: "Sat, Dec 18",
    icon: "http://openweathermap.org/img/wn/02d@2x.png",
    day_temp: "32",
    night_temp: "21",
    feels_like: "broken clouds",
  },
];

function Forecast() {
  // const [active, setActive] = useState("HourlyForecast");
  // console.log(active);

  return (
    <div className={styles.container}>
      {/* Hourly Forecasr*/}
      <div className={styles.hourly}>
        <h4>Hourly Forecast</h4>
      </div>
      {/* Daily Forecasr*/}
      <div className={styles.daily}>
        <h4>Daily Forecast</h4>
        <div>
          <ul>
            {mockDaily.map((daily, index) => (
              <li key={index}>
                <div>
                  <span>{daily.date}</span>
                  <img src={daily.icon} alt="weather icons" />
                  <span>
                    {daily.day_temp} / {daily.night_temp}ºC{" "}
                  </span>
                  <span>{daily.feels_like}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
