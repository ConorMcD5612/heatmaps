import React from 'react'

export default function FillerCells({startDate} : {startDate: Date}) {
    //need start date 
    const daysFromMonday = startDate.getDay() == 0 ? 6 : startDate.getDay()

    const fillerCells = []
    for(let i = 0; i < daysFromMonday; i++) {
        fillerCells.push(<div key={i}></div>)
    }
  return (
    <>
    {fillerCells}
    </>
  )
}
