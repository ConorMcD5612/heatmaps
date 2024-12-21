import React from "react";
import WeekDays from "./WeekDays";
import WeekStart from "./WeekStart";
import Cells from "./Cells";
import { HeatmapData } from "@/app/lib/definitions";

export default async function Heatmap({
  heatmapData,
  key,
}: {
  heatmapData: HeatmapData;
  key: number;
}) {
  return (
    <div className="flex  h-[30%] ">
      <WeekDays />
      <div className="flex flex-col w-[80%]">
        <WeekStart />
        <Cells />
      </div>
    </div>
  );
}
