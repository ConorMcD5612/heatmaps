import React from "react";
import WeekDays from "./WeekDays";
import WeekStart from "./WeekStart";
import Cells from "./Cells";
import { HeatmapData } from "@/app/lib/definitions";
import { addCell } from "@/app/lib/actions";
import { fetchCellStats } from "@/app/lib/data";
import { hrMins } from "@/app/lib/utils";

export default async function Heatmap({
  heatmapData,
}: {
  heatmapData: HeatmapData;
}) {
  await addCell(heatmapData.heatmap_id, heatmapData.last_updated)
  const cellStats = await fetchCellStats(heatmapData.heatmap_id)
  const {hrs, mins} = hrMins(cellStats.total_time)
  return (
    <>
    <div>
      {`${heatmapData.heatmap_name.trim()}: ${hrs}hrs ${mins}mins`} 
    </div>
    <div className="grid grid-rows-8 grid-cols-8 h-[30%] mb-2 overflow-visible">
      <WeekDays />
      <Cells heatmapData={heatmapData} cellStats={cellStats} />
    </div>
    </>
  );
}

