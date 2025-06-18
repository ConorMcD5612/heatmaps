import React from "react";
import WeekDays from "./WeekDays";
import Cells from "./Cells";
import { HeatmapData, HeatmapParsed } from "@/app/lib/definitions";
import { addCell } from "@/app/lib/actions";
import { fetchCellStats } from "@/app/lib/data";
import Link from "next/link";
import { HeatmapTotal } from "./HeatmapTotal";
import { OptionsBtn } from "./OptionsBtn";

export default async function Heatmap({
  heatmapData,
}: {
  heatmapData: HeatmapParsed;
}) {

  //check if heatmap cells are up to date, add cells to todays date if not
  await addCell(heatmapData.heatmap_id, heatmapData.last_updated);

  //for opacity calculation
  const cellStats = await fetchCellStats(heatmapData.heatmap_id);

  return (
    <div>
      <div className="text-lg flex justify-between w-full place-items-center">
      <HeatmapTotal cellStats={cellStats} heatmapName={heatmapData.heatmap_name} unit={heatmapData.unit} type={heatmapData.type}/>
        <div
          className="flex border gap-1 border-black p-1 place-items-center rounded"
          style={{ backgroundColor: heatmapData.color }}
        >
          <OptionsBtn heatmapData={heatmapData}/>
        </div>
      </div>

      <div className="grid grid-rows-8 grid-cols-8 grid-flow-col mb-2 w-full h-[30vh] border border-black overflow-x-scroll">
        <WeekDays />        
        <Cells heatmapData={heatmapData} cellStats={cellStats} />
      </div>
    </div>
  );
}
