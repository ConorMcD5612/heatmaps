import React from 'react'
import FillerCell from './FillerCell'

export default function FillerCells({startDate} : {startDate: Date}) {
    //need start date 
    const daysFromMonday = startDate.getDay() == 0 ? 6 : startDate.getDay()

   
  return (
    <>
    {[...Array(daysFromMonday)].map((_, index) => (
        <FillerCell key={index} />
      ))}
    </>
  )
}
