import React from 'react'
import { fetchTotalTime } from '../../lib/data'
import Heatmap from './Heatmap'


export default async function TotalMins({heatmapID} : {
    heatmapID: number
}) {

  const totalMins = await fetchTotalTime(heatmapID)
  return (
    <div>{totalMins.sum}</div>
  )
}
