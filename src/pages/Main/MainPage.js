import React from "react";
import {
  CurrentWeather as CurrentWeathers,
  Forecast as Forecasts,
} from "../../components";
import styles from "./MainPage.module.css";
// import { BiSearchAlt } from "react-icons/bi";

const MainPage = () => {
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
