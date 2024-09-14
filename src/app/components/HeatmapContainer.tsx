import React from "react";
import { fetchHeatmapData } from "../lib/data";
import Heatmap from "./Heatmap";
import { HeatmapData } from "../lib/definitions";
import CreateHeatmap from "./CreateHeatmap";


export default async function HeatmapContainer() {
  const heatmapData = await fetchHeatmapData();
  return (
    <div className="h-full">
      {heatmapData.map((data: any, index: number) => (
        <Heatmap 
        key={index}
        name={data.heatmap_name}
        color={data.color}
        totalMins={data.total_mins} 
        type={data.type}
        startDate={data.start_date} 
        heatmapID={data.heatmap_id}
        />
      ))}
      <CreateHeatmap />
    </div>
  );
}
