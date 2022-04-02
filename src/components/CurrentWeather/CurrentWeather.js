import React from "react";
import styles from "./CurrentWeather.module.css";

function CurrentWeather(props) {
  return (
    <div className={styles.cards}>
      <div className="row">
        {/* Tempurature */}
        <div className="col">
          <div className={styles.tempurature}>
            <div className={styles.units}>
              <img
                src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
                alt="weather icons"
              />
              <h1 className={styles.text}>{props.temp}ºC</h1>
            </div>
            <p className={styles.feelsLike}>
              Feels like {props.feelsLike} ºC. {props.weather}.
            </p>
          </div>
        </div>
        {/* city */}
        <div className="col">
          <div className={styles.city}>
            <h3 className={styles.title}>Nakhon Ratchasima, TH</h3>
            <h5 className={styles.dateTime}>{props.dt}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CurrentWeather;
