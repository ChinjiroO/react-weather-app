import React, { useState, useEffect } from "react";
import styles from "./CurrentWeather.module.css";

function CurrentWeather() {
  let [lat, setLat] = useState("");
  let [lon, setLon] = useState("");
  let [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    function position(res) {
      setCurrentWeather(
        navigator.geolocation.getCurrentPosition((res) => {
          console.log(res.coords.latitude);
          var lat = res.coords.latitude;
          setLat(lat);
          var lon = res.coords.longitude;
          setLon(lon);
        })
      );
    }
    position();
  });

  return (
    <div className={styles.cards}>
      <div className="row">
        {/* Tempurature */}
        <div className="col">
          <div className={styles.tempurature}>
            <div className={styles.units}>
              <img
                src="http://openweathermap.org/img/wn/02d@2x.png"
                alt="weather icons"
              />
              <h1 className={styles.text}>30ºC</h1>
            </div>
            <p className={styles.feelsLike}>
              Feels like 26 ºC. Overcast clouds.
            </p>
          </div>
        </div>
        {/* city */}
        <div className="col">
          <div className={styles.city}>
            <h3 className={styles.title}>Nakhon Ratchasima, TH</h3>
            <h5 className={styles.dateTime}>Dec 15, 08:10pm</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CurrentWeather;
