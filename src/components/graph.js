import React, { useState, useEffect } from "react";
import * as allApi from "../services/allApi.js";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

import { point } from "leaflet";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);
const WorldGraph = () => {
  const [loading, setLoading] = useState(true);
  const fetchgraphdata = async () => {
    const res = await allApi.getgraphdata();
    setData({
      labels: ["Cases", "Deaths", "Recovered", "New"],
      datasets: [
        {
          label: "Covid Chart",
          data: [res.cases, res.deaths, res.recovered, res.todayCases],
        },
      ],
    });
    setLoading(false);
  };
  const [data, setData] = useState({});
  useEffect(() => {
    fetchgraphdata();
  }, []);
  return (
    <div style={{ width: "1000px", height: "1000px" }}>
      {loading ? <p>Loading...</p> : <Line data={data}> world Graph</Line>}
    </div>
  );
};

export default WorldGraph;
