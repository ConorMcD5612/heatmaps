import React from "react";
import { fetchHeatmapData } from "../lib/data";
import Heatmap from "./Heatmap";


export default async function HeatmapContainer() {
  const heatmapData = await fetchHeatmapData();
  return (
    <div className="flex-col">
      {heatmapData.map((data, index) => (
        <Heatmap 
        key={index}
        name={data.heatmap_name}
        color={data.color}
        totalMins={data.total_mins} 
        type={data.type} />
      ))}
    </div>
  );
}
