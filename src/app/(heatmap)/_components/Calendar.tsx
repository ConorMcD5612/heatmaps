"use client"
import React from 'react'
import { HeatmapParsed, CellStats, CellData } from "@/app/lib/definitions";
import WeekDays from './WeekDays';
import Cells from './Cells';
import { useRef, useEffect } from 'react';

export const Calendar = ({
  heatmapData,
  cellStats,
  cellData,
  isoStartDate
}: {
  heatmapData: HeatmapParsed;
  cellStats: CellStats;
  cellData: CellData[];
  isoStartDate: string | null;
}) => {
  const endCellRef = useRef<HTMLDivElement>(null)

  //ref on the last element calc width from start to end of element, scroll to that width
  useEffect(() => {
    const element = endCellRef.current
    if (!element) return;
    const width = element.scrollWidth - (element.scrollWidth/2)
    console.log(width, element.scrollWidth)
    element.scrollIntoView({block: "nearest", inline: "end"})
  }, [])
    
  return ( 
    <div
        className="grid grid-rows-8 grid-cols-8 grid-flow-col mb-2 w-full h-[30vh] border border-white border-opacity-50
      scrollbar-gray-500 overflow-x-scroll snap-x snap-mandatory scroll-pl-9"
      
      >
        <WeekDays  />
        <Cells endCellRef={endCellRef} heatmapData={heatmapData} cellStats={cellStats} cellData={cellData} isoStartDate={isoStartDate} />
    </div>
  )
}
