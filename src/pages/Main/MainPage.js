import React, { useEffect, useState } from "react";
import { CurrentWeather, Forecast } from "../../components";
import styles from "./MainPage.module.css";

const MainPage = () => {
  const apiKey = "699f100baf9c29a74c5b7e4a654ac114";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  // Get current position
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((res) => {
      setLat(res.coords.latitude);
      setLon(res.coords.longitude);
    });
  }, []);

  // Fetch Openweathermap
  useEffect(() => {
    if (lat && lon) {
      fetch(
        `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [lat, lon]);

  // Set Loading...
  if (loading) {
    return "Loading...";
  }

  return (
    <div className={styles.containers}>
      <h1>Weather forecast</h1>
      {/* Card */}
      <CurrentWeather
        temp={data !== null ? data.current.temp : "..."}
        feelsLike={data !== null ? data.current.feels_like : "..."}
        weather={data !== null ? data.current.weather[0].description : "..."}
        dt={data !== null ? Date(data.current.dt.toLocaleString()) : "..."}
      />
      <Forecast />
    </div>
  );
};

export default MainPage;
