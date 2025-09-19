import React from 'react'
import FillerCell from './FillerCell'
import { DateTime } from 'luxon'


// because client component its no longer luxon obj
export default function FillerCells({startDate} : {startDate: string | null;}) {
    //need start date 
    const luxDate = DateTime.fromISO(startDate as string)
    const daysFromMonday = luxDate.weekday - 1
    console.log('startDate:', startDate, 'isDateTime:', DateTime.isDateTime(startDate), 'isValid:', DateTime.isDateTime(startDate) && startDate.isValid, 'weekday:', DateTime.isDateTime(startDate) ? startDate.weekday : undefined)
   
  return (
    <>
    {[...Array(daysFromMonday)].map((_, index) => (
        <FillerCell key={index} />
      ))}
    </>
  )
}
