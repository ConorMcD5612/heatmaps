import React from "react";
import { fetchHeatmapData } from "../../lib/data";
import Heatmap from "../../(heatmap)/_components/Heatmap";
import { HeatmapData } from "../../lib/definitions";
import CreateHeatmapBtn from "./CreateHeatmapBtn";


export default async function HeatmapContainer() {
  const heatmapData = await fetchHeatmapData();
  return (
    <div className="h-full">
      {heatmapData.map((data: HeatmapData, index: number) => (
        <Heatmap 
        key={index}
        heatmapData={data}
        />
      ))}
      <CreateHeatmapBtn />
    </div>
  );
}
