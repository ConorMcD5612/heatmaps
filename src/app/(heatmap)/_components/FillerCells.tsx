import React from 'react'
import FillerCell from './FillerCell'
import { DateTime } from 'luxon'

export default function FillerCells({startDate} : {startDate: DateTime}) {
    //need start date 
    const daysFromMonday = startDate.weekday - 1
    console.log(startDate, "Daysfrommonday")
   
  return (
    <>
    {[...Array(daysFromMonday)].map((_, index) => (
        <FillerCell key={index} />
      ))}
    </>
  )
}
