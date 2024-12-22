import { fetchCellData } from '@/app/lib/data'
import { CellData, HeatmapData } from '@/app/lib/definitions'
import Cell from '@/app/(cell)/_components/Cell'
import React from 'react'

export default async function Cells({heatmapData}: {
    heatmapData: HeatmapData
}) {
    //filler cells and regular cells 
    //fetch cells 
  const cellData = await fetchCellData(heatmapData.heatmap_id)
  return (
    <div className='w-[90%] grid grid-rows-7 grid-flow-col'>
        {cellData.map((cell: CellData) => (
            <Cell cellData={cell}  />
        ))}
    </div>
  )
}
