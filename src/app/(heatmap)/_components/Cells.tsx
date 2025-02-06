import { fetchCellData, fetchCellStats } from '@/app/lib/data'
import { CellData, HeatmapData } from '@/app/lib/definitions'
import Cell from '@/app/(cell)/_components/Cell'
import React, { Key } from 'react'
import WeekStart from './WeekStart'
import { CellStats } from '@/app/lib/definitions'
import FillerCells from './FillerCells'

export default async function Cells({heatmapData, cellStats}: {
    heatmapData: HeatmapData;
    cellStats: CellStats;
}) {
    //filler cells and regular cells 
    //fetch cells 
  const cellData = await fetchCellData(heatmapData.heatmap_id)
  
  return (
    <>
    <WeekStart cellAmount={cellData.length} startDate={heatmapData.start_date as Date}/>
    <div className='row-span-7 col-span-9 grid border-b border-l border-t border-black place-items-center grid-cols-[repeat(20)] grid-flow-col grid-rows-subgrid '>
        <FillerCells startDate={heatmapData.start_date as Date} />
        {cellData.map((cell: CellData, index: Key) => (
            <Cell cellData={cell} key={index} cellStats={cellStats} heatmapData={heatmapData}  />
        ))}
    </div>
    </>
  )
}
