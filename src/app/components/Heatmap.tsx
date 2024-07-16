import React from 'react'
import Cell from './Cell'

export default function Heatmap() {
   
    const yearArray = Array.from({length: 365})

  return (
    <div className='grid grid-rows-8 grid-flow-col gap-1 w-max h-max '>
        
        {yearArray.map((day) => <Cell/>)}
    </div>
  ) 
}
