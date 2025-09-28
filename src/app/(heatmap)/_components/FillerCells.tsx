import React from 'react'
import FillerCell from './FillerCell'
import { DateTime } from 'luxon'


// because client component its no longer luxon obj
export default function FillerCells({isoStartDate} : {isoStartDate: string | null;}) {
    //need start date 
    const luxDate = DateTime.fromISO(isoStartDate as string, {zone: 'utc'})
    const daysFromMonday = luxDate.weekday - 1
    //TODO: for some reason this works in dev but not on prod
  return (
    <>
    {[...Array(daysFromMonday)].map((_, index) => (
        <FillerCell key={index} />
      ))}
    </>
  )
}
