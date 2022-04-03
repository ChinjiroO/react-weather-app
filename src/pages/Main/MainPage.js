import React, { useEffect, useState } from "react";
import { CurrentWeather, Forecast } from "../../components";
import styles from "./MainPage.module.css";

const MainPage = () => {
  const [data, setData] = useState(null);
  const [daily, setDaily] = useState([]);
  const [hourly, setHourly] = useState([]);
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
        `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          setData(data);
          setDaily(data.daily);
          setHourly(data.hourly);
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
        temp={data?.current.temp}
        feelsLike={data?.current.feels_like}
        weather={data?.current.weather[0].description}
        dt={new Date(data?.current.dt * 1000).toLocaleString("en-US", {
          weekday: "short",
          month: "short",
          day: "2-digit",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        })}
        icon={data?.current.weather[0].icon}
      />
      <Forecast daily={daily} hourly={hourly} />
    </div>
  );
};

export default MainPage;
