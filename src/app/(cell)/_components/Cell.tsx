import { CellData } from '@/app/lib/definitions'
import React from 'react'
import CellPopUp from './CellPopUp';

export default function Cell({cellData, mapName}: {cellData: CellData;
  mapName: string
}) {
  return (
    <div className='border h-5/6 w-5/6 group/item relative '>
     <CellPopUp date={cellData.date} timeMins={cellData.time_mins} mapName={mapName}/>
    </div>
  )
}
