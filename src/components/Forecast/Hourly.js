import React from "react";
import styles from "./Hourly.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function Hourly(props) {
  const hourly = props.hourly;
  const options = { hour: "numeric" };

  const hr = hourly.map((h) => ({
    dt: new Date(h.dt * 1000).toLocaleTimeString("en-US", options),
    temp: h.temp,
  }));
  console.log(hr);

  return (
    <div className={styles.container}>
      <LineChart
        width={3000}
        height={300}
        data={hr}
        margin={{ top: 5, right: 30, left: -20, bottom: 5 }}
      >
        <Tooltip />
        <XAxis dataKey="dt" style={{ fontSize: "14px" }} />
        <YAxis
          style={{
            fontSize: "14px",
            fill: "rgba(var(--secondary-text-color))",
          }}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="temp" stroke="#eb6e4b" strokeWidth={2} />
      </LineChart>
    </div>
  );
}

export default Hourly;
