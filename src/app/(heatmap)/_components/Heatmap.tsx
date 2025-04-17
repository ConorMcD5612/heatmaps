import React from "react";
import WeekDays from "./WeekDays";
import Cells from "./Cells";
import { HeatmapData } from "@/app/lib/definitions";
import { addCell } from "@/app/lib/actions";
import { fetchCellStats } from "@/app/lib/data";
import { hrMins } from "@/app/lib/utils";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";

export default async function Heatmap({
  heatmapData,
}: {
  heatmapData: HeatmapData;
}) {
  await addCell(heatmapData.heatmap_id, heatmapData.last_updated);
  const cellStats = await fetchCellStats(heatmapData.heatmap_id);
  const { hrs, mins } = hrMins(cellStats.total_time);
  return (
    <div>
      <div className="text-lg flex justify-between w-full place-items-center">
        <div className="flex gap-1 ">
          <div className="font-semibold">{`${heatmapData.heatmap_name.trim()}: `}</div>
          <div className="text-gray-500">{`${hrs}hrs ${mins}mins`}</div>
        </div>
        <div
          className="flex border gap-1 border-black p-1 place-items-center rounded"
          style={{ backgroundColor: heatmapData.color }}
        >
          <Link
            href={`/dashboard?optionsModal=y&heatmapID=${
              heatmapData.heatmap_id
            }&name=${heatmapData.heatmap_name}&color=${encodeURIComponent(
              heatmapData.color
            )}`}
          >
            <IoSettingsSharp size="16" stroke="black" />
          </Link>
        </div>
      </div>

      <div className="grid grid-rows-8 grid-cols-8 grid-flow-col mb-2 w-full h-[30vh] border border-black overflow-x-scroll">
        <WeekDays />        
        <Cells heatmapData={heatmapData} cellStats={cellStats} />
      </div>
    </div>
  );
}
