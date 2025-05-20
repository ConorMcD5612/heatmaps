import { CellStats, HeatmapType } from "@/app/lib/definitions";
import React from "react";
import { hrMins } from "@/app/lib/utils";

export const HeatmapTotal = ({
  cellStats,
  heatmapName,
  type,
}: {
  cellStats: CellStats;
  heatmapName: string;
  type: HeatmapType;
}) => {
  //for displaying total time

  const { hrs, mins } = hrMins(cellStats.total_time);

  //total_mins will represent count until I change name

  return (
    <div className="flex gap-1 ">
      <div className="font-semibold">{`${heatmapName.trim()}: `}</div>

      <div className="text-gray-500">
        {type == "Time" ? `${hrs}hrs ${mins}mins` : cellStats.total_time}
      </div>
    </div>
  );
};
