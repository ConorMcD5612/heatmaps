import React from 'react'
import { HeatmapParsed, CellStats } from "@/app/lib/definitions";
import WeekDays from './WeekDays';
import Cells from './Cells';

export const Calendar = ({
  heatmapData,
  cellStats,
}: {
  heatmapData: HeatmapParsed;
  cellStats: CellStats;
}) => {
  return (
    <div
        className="grid grid-rows-8 grid-cols-8 grid-flow-col mb-2 w-full h-[30vh] border border-white border-opacity-50
      scrollbar-gray-500 overflow-x-scroll snap-x snap-mandatory scroll-pl-9"
      >
        <WeekDays />
        <Cells heatmapData={heatmapData} cellStats={cellStats} />
    </div>
  )
}
