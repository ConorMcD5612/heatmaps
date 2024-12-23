import React from "react";
import WeekDays from "./WeekDays";
import WeekStart from "./WeekStart";
import Cells from "./Cells";
import { HeatmapData } from "@/app/lib/definitions";

export default async function Heatmap({
  heatmapData,
}: {
  heatmapData: HeatmapData;
}) {
  return (
    <div className="grid grid-rows-8 grid-cols-8 h-[30%] mb-2">
      <WeekStart />
      <WeekDays />
      <Cells heatmapData={heatmapData} />
    </div>
  );
}
