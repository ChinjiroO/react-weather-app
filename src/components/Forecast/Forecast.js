import React from "react";
import styles from "./Forecast.module.css";
import Hourly from "./Hourly";

function Forecast(props) {
  const daily = props.daily;
  const hourly = props.hourly;
  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
  };

  return (
    <div className={styles.container}>
      {/* Hourly Forecast*/}
      <div className={styles.hourly}>
        <h4>Hourly Forecast</h4>
        <Hourly hourly={hourly} />
      </div>
      {/* Daily Forecast*/}
      <div className={styles.daily}>
        <h4>Daily Forecast</h4>
        <div>
          {daily.map((day, index) => (
            <div key={index} className={styles.dailyItems}>
              <h6>
                {new Date(day.dt * 1000).toLocaleDateString("en-US", options)}
              </h6>
              <div className={styles.dailyRight}>
                <div className={styles.dailyMiddle}>
                  <img
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt={day.weather[0].icon}
                    className={styles.weatherIcon}
                  />
                  <h6>
                    {Number(day.temp.morn).toFixed(0)} /{" "}
                    {Number(day.temp.night).toFixed(0)}°C
                  </h6>
                </div>
                <p className={styles.desc}>{day.weather[0].description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Forecast;
