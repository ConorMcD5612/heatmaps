import { fetchCellData, fetchCellStats } from "@/app/lib/data";
import { CellData, CellDataParsed, HeatmapData } from "@/app/lib/definitions";
import Cell from "@/app/(cell)/_components/Cell";
import React, { Key } from "react";
import WeekStart from "./WeekStart";
import { CellStats } from "@/app/lib/definitions";
import FillerCells from "./FillerCells";
import WeekDays from "./WeekDays";
import { HeatmapParsed } from "@/app/lib/definitions";

export default function Cells({
  heatmapData,
  cellStats,
  cellData,
  isoStartDate,
}: {
  heatmapData: HeatmapParsed;
  cellStats: CellStats;
  cellData: CellData[];
  isoStartDate: string | null;
}) {
  console.log(cellData, "THIS IS CELL DATA");
  return (
    <>
      <WeekStart
        cellAmount={cellData.length}
        isoStartDate={isoStartDate}
      />
      <div className="w-full row-start-2 row-span-7 col-span-12 h-full  ">
        <div
          className="grid 
        grid-rows-7 
        grid-flow-col 
        grid-cols-[repeat(12,calc(100%/12))] 
        auto-cols-[calc(100%/12)] 
        place-items-center
        h-full
        "
        >
          <FillerCells isoStartDate={isoStartDate} />
          {cellData.map((cell: CellData, index: Key) => {
            return (
              <Cell
                cellData={cell}
                key={index}
                cellStats={cellStats}
                heatmapData={heatmapData}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
