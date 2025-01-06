import { fetchCellData, fetchCellStats } from '@/app/lib/data'
import { CellData, HeatmapData } from '@/app/lib/definitions'
import Cell from '@/app/(cell)/_components/Cell'
import React from 'react'
import WeekStart from './WeekStart'

export default async function Cells({heatmapData}: {
    heatmapData: HeatmapData
}) {
    //filler cells and regular cells 
    //fetch cells 
  const cellData = await fetchCellData(heatmapData.heatmap_id)
  const cellStats = await fetchCellStats(heatmapData.heatmap_id)
  return (
    <>
    <WeekStart cellAmount={cellData.length} startDate={heatmapData.start_date as Date}/>
    <div className='row-span-7 col-span-7 grid border border-black place-items-center grid-cols-12 grid-rows-subgrid grid-flow-col'>
        {cellData.map((cell: CellData) => (
            <Cell cellData={cell}  cellStats={cellStats} heatmapData={heatmapData}  />
        ))}
    </div>
    </>
  )
}
