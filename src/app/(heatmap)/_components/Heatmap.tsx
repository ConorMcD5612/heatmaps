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
    <div className="flex p-[2px] bg-black gap-[2px] flex-col h-[30%] mb-2">
      <WeekStart />
      <div className="flex w-full h-full gap-[2px]">
          <WeekDays />
          <Cells heatmapData={heatmapData} />
      </div>
    </div>
  );
}
