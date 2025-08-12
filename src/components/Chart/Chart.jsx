import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState({});

useEffect(() => {
  const fetchAPI = async () => {
    if (country && country !== "global") {
      const { data } = await axios.get(`${url}/historical/${country}?lastdays=all`);
      setDailyData(data.timeline); // disease.sh puts cases in `timeline` for countries
    } else {
      setDailyData(await fetchDailyData());
    }
  };

  fetchAPI();
}, [country]); // ✅ runs when country changes


  const lineChart = dailyData?.cases ? (
    <Line
      data={{
        labels: Object.keys(dailyData.cases).map((date) => date),
        datasets: [
          {
            data: Object.values(dailyData.cases),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: Object.values(dailyData.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = data.cases ? (
    <Bar
      key={country} //for changing the data (rerender)
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(255,0,0,0.5)",
            ],
            data: [data.cases, data.recovered, data.deaths],
          },
        ],
      }}
      options={{
        plugins: {
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        },
      }}
    />
  ) : null;
  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};
export default Chart;
