import { CellStats, HeatmapType } from "@/app/lib/definitions";
import React from "react";
import { hrMins } from "@/app/lib/utils";

export const HeatmapTotal = ({
  cellStats,
  heatmapName,
  type,
  unit,
  color,
}: {
  cellStats: CellStats;
  heatmapName: string;
  type: HeatmapType;
  unit: string;
  color: string;
}) => {
  //for displaying total time

  const { hrs, mins } = hrMins(cellStats.total_time);

  //total_mins will represent count until I change name
  return (
    <div className="flex gap-1">
      <div className="font-semibold">{`${heatmapName.trim()}: `}</div>

      <div style={{ color: color }} className="text-lg font-bold">
        {type == "Time"
          ? `${hrs}hrs ${mins}mins`
          : `${cellStats.total_time}${unit}`}
      </div>
    </div>
  );
};
