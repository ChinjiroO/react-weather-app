import React, { useEffect, useState } from "react";
import {
  CurrentWeather as CurrentWeathers,
  Forecast as Forecasts,
} from "../../components";
import styles from "./MainPage.module.css";

const MainPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  // Fetch Openweathermap
  useEffect(() => {
    fetch(
      "http://api.openweathermap.org/data/2.5/onecall?lat=15&lon=102.1667&units=metric&appid=699f100baf9c29a74c5b7e4a654ac114"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Set Loading...
  if (loading) {
    return "Loading...";
  }

  console.log(data);

  return (
    <div className={styles.containers}>
      <h1>Weather forecast</h1>
      {/* Card */}
      <CurrentWeathers
        temp={loading === false ? data.current.temp : "..."}
        feelsLike={loading === false ? data.current.feels_like : "..."}
        weather={
          loading === false ? data.current.weather[0].description : "..."
        }
      />
      <Forecasts />
    </div>
  );
};

export default MainPage;
