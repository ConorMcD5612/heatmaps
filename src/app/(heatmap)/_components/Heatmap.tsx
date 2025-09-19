
import React from "react";
import WeekDays from "./WeekDays";
import Cells from "./Cells";
import { HeatmapData, HeatmapParsed, CellData } from "@/app/lib/definitions";
import { addCell } from "@/app/lib/actions";
import { fetchCellStats } from "@/app/lib/data";
import Link from "next/link";
import { HeatmapTotal } from "./HeatmapTotal";
import { OptionsBtn } from "./OptionsBtn";
import { Calendar } from "./Calendar";
import { fetchCellData } from "@/app/lib/data";

export default async function Heatmap({
  heatmapData,
}: {
  heatmapData: HeatmapParsed;
}) {
  //check if heatmap cells are up to date, add cells to todays date if not
  await addCell(heatmapData.heatmap_id, heatmapData.last_updated);

  //for opacity calculation
  const cellStats = await fetchCellStats(heatmapData.heatmap_id);
  
  const cellData: CellData[] = await fetchCellData(heatmapData.heatmap_id);

  return (
    <div>
      <div className=""></div>
      <div className="text-lg flex justify-between w-full place-items-center">
        <HeatmapTotal
          cellStats={cellStats}
          heatmapName={heatmapData.heatmap_name}
          unit={heatmapData.unit}
          type={heatmapData.type}
          color={heatmapData.color}
        />
        <div className="flex gap-1 border-white p-1 place-items-center rounded">
          <OptionsBtn heatmapData={heatmapData} />
        </div>
      </div>


      {/*make this a component, then can useClient to make it scroll */ }
      <Calendar heatmapData={heatmapData} cellStats={cellStats} cellData={cellData} />
    </div>
  );
}
