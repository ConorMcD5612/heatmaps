import { fetchCellData, fetchCellStats } from "@/app/lib/data";
import { CellData, HeatmapData } from "@/app/lib/definitions";
import Cell from "@/app/(cell)/_components/Cell";
import React, { Key } from "react";
import WeekStart from "./WeekStart";
import { CellStats } from "@/app/lib/definitions";
import FillerCells from "./FillerCells";
import WeekDays from "./WeekDays";

export default async function Cells({
  heatmapData,
  cellStats,
}: {
  heatmapData: HeatmapData;
  cellStats: CellStats;
}) {
  //filler cells and regular cells
  //fetch cells
  const cellData = await fetchCellData(heatmapData.heatmap_id);

  return (
    <>
      <WeekStart cellAmount={cellData.length} startDate={heatmapData.start_date as Date}/>
      <div
        className="w-full row-start-2 row-span-7 col-span-12 h-full "
      >
        
        <div className="grid grid-rows-7 grid-flow-col grid-cols-[repeat(12,calc(100%/12))] auto-cols-[calc(100%/12)] place-items-center h-full">
        <FillerCells startDate={heatmapData.start_date as Date} />
        {cellData.map((cell: CellData, index: Key) => (
          <Cell
            cellData={cell}
            key={index}
            cellStats={cellStats}
            heatmapData={heatmapData}
          />
        ))}
         </div>
      </div>
    </>
  );
}
