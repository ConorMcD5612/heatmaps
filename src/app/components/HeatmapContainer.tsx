import React from "react";
import { fetchHeatmapData } from "../lib/data";
import Heatmap from "./Heatmap";


export default async function HeatmapContainer() {
  const heatmapData = await fetchHeatmapData();
  return (
    <div>
      {heatmapData.map(({name, color, totalMins, type}, index) => (
        <Heatmap key={index} name={name} color={color} totalMins={totalMins} type={type} />
      ))}
    </div>
  );
}
