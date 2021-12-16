import React, { useEffect, useState } from "react";
import {
  CurrentWeather as CurrentWeathers,
  Forecast as Forecasts,
} from "../../components";
import styles from "./MainPage.module.css";
// import { BiSearchAlt } from "react-icons/bi";

const MainPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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
  if (loading) {
    return "Loading...";
  }
  console.log(data);

  return (
    <div className={styles.containers}>
      <h1>Weather forecast</h1>
      {/* Card */}
      <CurrentWeathers />
      <Forecasts />
    </div>
  );
};

export default MainPage;
