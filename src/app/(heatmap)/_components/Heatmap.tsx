import React from "react";
import WeekDays from "./WeekDays";
import WeekStart from "./WeekStart";
import Cells from "./Cells";
import { HeatmapData } from "@/app/lib/definitions";
import { addCell } from "@/app/lib/actions";
import { fetchCellStats } from "@/app/lib/data";
import { hrMins } from "@/app/lib/utils";
import { IoSettingsSharp } from "react-icons/io5";

export default async function Heatmap({
  heatmapData,
}: {
  heatmapData: HeatmapData;
}) {
  await addCell(heatmapData.heatmap_id, heatmapData.last_updated);
  const cellStats = await fetchCellStats(heatmapData.heatmap_id);
  const { hrs, mins } = hrMins(cellStats.total_time);
  return (
    <>
      <div className="text-lg flex justify-between w-full place-items-center">
        <div className="flex gap-1 ">
          <div className="font-semibold">{`${heatmapData.heatmap_name.trim()}: `}</div>
          <div className="text-gray-500">{`${hrs}hrs ${mins}mins`}</div>
        </div>
        <div className="flex border gap-1 border-black p-1 place-items-center rounded bg-green-500">
          <IoSettingsSharp size="16" stroke="black" />
        </div>
      </div>
      <div className="grid grid-rows-8 grid-cols-8 h-[30%] mb-2 overflow-visible">
        <WeekDays />
        <Cells heatmapData={heatmapData} cellStats={cellStats} />
      </div>
    </>
  );
}
