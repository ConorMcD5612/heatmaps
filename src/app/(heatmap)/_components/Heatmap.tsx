import React from "react";
import WeekDays from "./WeekDays";
import WeekStart from "./WeekStart";
import Cells from "./Cells";

export default async function Heatmap({
  name,
  color,
  totalMins,
  type,
  startDate,
  heatmapID,
}: {
  name: string;
  color: string;
  totalMins: number;
  type: "time" | "count";
  startDate: Date;
  heatmapID: number;
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