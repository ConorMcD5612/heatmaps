import { HeatmapData } from '@/app/lib/definitions'
import React from 'react'

export default function Cells({heatmapData}: {
    heatmapData: HeatmapData
}) {
    //filler cells and regular cells 
    //fetch cells 
    
  return (
    <div className='grid grid-row-7 h-[87.5%]'>
      <div>Cell</div>
      <div>Cell</div>
      <div>Cell</div>
      <div>Cell</div>
      <div>Cell</div>
      <div>Cell</div>
      <div>Cell</div>
    </div>
  )
}
