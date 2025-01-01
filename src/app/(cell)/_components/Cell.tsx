import { CellData, CellStats } from '@/app/lib/definitions'
import React from 'react'
import CellPopUp from './CellPopUp';
import Link from 'next/link';
import dateToYYYYMMDD from '@/app/lib/utils';

export default function Cell({cellData, cellStats, mapName}: {cellData: CellData;
  cellStats: CellStats;
  mapName: string
}) {
  
  const formattedDate = dateToYYYYMMDD(cellData.date as Date)
  return (
    <div className='border h-5/6 w-5/6 group/item relative'>
     <CellPopUp date={cellData.date} timeMins={cellData.time_mins} mapName={mapName}/>
     <Link
          className="absolute inset-0 block z-10"
          href={`/dashboard?cellModal=y&name=${mapName}&date=${formattedDate}&heatmapID=${cellData.heatmap_id}`}
        >
          &nbsp;
        </Link>
    </div>
  )
}
