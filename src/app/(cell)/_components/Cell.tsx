import { CellData, CellStats, HeatmapData } from '@/app/lib/definitions'
import React from 'react'
import CellPopUp from './CellPopUp';
import Link from 'next/link';
import {dateToYYYYMMDD, calculateOpacity} from '@/app/lib/utils';

export default function Cell({cellData, cellStats, heatmapData}: {cellData: CellData;
  cellStats: CellStats;
  heatmapData: HeatmapData; 
}) {
  
  const formattedDate = dateToYYYYMMDD(cellData.date as Date)
  return (
    <div className='border h-5/6 w-5/6 group/item relative' style={{backgroundColor: `${heatmapData.color}`, opacity: `${calculateOpacity(cellData.time_mins, cellStats.mean, cellStats.stdDev)}`}}>
     <CellPopUp date={cellData.date} timeMins={cellData.time_mins} mapName={heatmapData.heatmap_name}  />
     <Link
          className="absolute inset-0 block z-10"
          href={`/dashboard?cellModal=y&name=${heatmapData.heatmap_name}&date=${formattedDate}&heatmapID=${cellData.heatmap_id}`}
        >
          &nbsp;
        </Link>
    </div>
  )
}
