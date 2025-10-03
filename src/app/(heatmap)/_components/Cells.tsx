import { fetchCellData, fetchCellStats } from "@/app/lib/data";
import { CellData, CellDataParsed, HeatmapData } from "@/app/lib/definitions";
import Cell from "@/app/(cell)/_components/Cell";
import React, { Key, RefObject } from "react";
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
  endCellRef,
}: {
  heatmapData: HeatmapParsed;
  cellStats: CellStats;
  cellData: CellData[];
  isoStartDate: string | null;
  endCellRef: RefObject<HTMLDivElement>;
}) {
  return (
    <>
      <WeekStart
        cellAmount={cellData.length}
        isoStartDate={isoStartDate}
        endCellRef={endCellRef}
      />
      <div className="col-span-12 row-span-7 row-start-2 h-full w-full">
        <div className="grid h-full auto-cols-[calc(100%/12)] grid-flow-col grid-cols-[repeat(12,calc(100%/12))] grid-rows-7 place-items-center">
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
