"use client";
import React from "react";
import { HeatmapParsed, CellStats, CellData } from "@/app/lib/definitions";
import WeekDays from "./WeekDays";
import Cells from "./Cells";
import { useRef, useLayoutEffect } from "react";

export const Calendar = ({
  heatmapData,
  cellStats,
  cellData,
  isoStartDate,
}: {
  heatmapData: HeatmapParsed;
  cellStats: CellStats;
  cellData: CellData[];
  isoStartDate: string | null;
}) => {
  const endCellRef = useRef<HTMLDivElement>(null);

  //ref on the last element calc width from start to end of element, scroll to that width
  useLayoutEffect(() => {
    const element = endCellRef.current;
    if (!element) return;

    element.scrollIntoView({ block: "nearest", inline: "end" });
  }, []);

  return (
    <div className="scrollbar-gray-500 mb-2 grid h-[30vh] w-full snap-x snap-mandatory scroll-pl-9 grid-flow-col grid-cols-8 grid-rows-8 overflow-x-scroll border border-white border-opacity-50">
      <WeekDays />
      <Cells
        endCellRef={endCellRef}
        heatmapData={heatmapData}
        cellStats={cellStats}
        cellData={cellData}
        isoStartDate={isoStartDate}
      />
    </div>
  );
};
