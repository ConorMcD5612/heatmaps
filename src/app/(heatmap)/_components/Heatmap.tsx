import React from "react";
import WeekDays from "./WeekDays";
import WeekStart from "./WeekStart";
import Cells from "./Cells";
import { HeatmapData } from "@/app/lib/definitions";
import { addCell } from "@/app/lib/actions";

export default async function Heatmap({
  heatmapData,
}: {
  heatmapData: HeatmapData;
}) {
  await addCell(heatmapData.heatmap_id, heatmapData.last_updated)
  return (
    <div className="grid grid-rows-8 grid-cols-8 h-[30%] mb-2">
      <WeekStart />
      <WeekDays />
      <Cells heatmapData={heatmapData} />
    </div>
  );
}
