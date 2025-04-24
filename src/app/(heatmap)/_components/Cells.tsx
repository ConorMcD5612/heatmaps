import { fetchCellData, fetchCellStats } from "@/app/lib/data";
import { CellData, CellDataParsed, HeatmapData } from "@/app/lib/definitions";
import Cell from "@/app/(cell)/_components/Cell";
import React, { Key } from "react";
import WeekStart from "./WeekStart";
import { CellStats } from "@/app/lib/definitions";
import FillerCells from "./FillerCells";
import WeekDays from "./WeekDays";
import { HeatmapParsed } from "@/app/lib/definitions";

export default async function Cells({
  heatmapData,
  cellStats,
}: {
  heatmapData: HeatmapParsed;
  cellStats: CellStats;
}) {
  //filler cells and regular cells
  //fetch cells
  const cellData: CellDataParsed[] = await fetchCellData(heatmapData.heatmap_id);

  return (
    <>
      <WeekStart cellAmount={cellData.length} startDate={heatmapData.start_date}/>
      <div
        className="w-full row-start-2 row-span-7 col-span-12 h-full "
      >
        
        <div className="grid grid-rows-7 grid-flow-col grid-cols-[repeat(12,calc(100%/12))] auto-cols-[calc(100%/12)] place-items-center h-full">
        <FillerCells startDate={heatmapData.start_date} />
        {cellData.map((cell: CellDataParsed, index: Key) => (
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
