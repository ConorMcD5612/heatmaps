import { CellStats, HeatmapType } from "@/app/lib/definitions";
import React from "react";
import { hrMins } from "@/app/lib/utils";

export const HeatmapTotal = ({
  cellStats,
  heatmapName,
  type,
  unit
}: {
  cellStats: CellStats;
  heatmapName: string;
  type: HeatmapType;
  unit: string;
}) => {
  //for displaying total time

  const { hrs, mins } = hrMins(cellStats.total_time);

  //total_mins will represent count until I change name
  return (
    <div className="flex gap-1 ">
      <div className="font-semibold">{`${heatmapName.trim()}: `}</div>

      <div className="text-lime-400 font-bold text-lg">
        {type == "Time" ? `${hrs}hrs ${mins}mins` : `${cellStats.total_time}${unit}`}
      </div>
    </div>
  );
};
