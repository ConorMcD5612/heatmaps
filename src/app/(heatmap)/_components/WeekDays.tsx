import React, { Key } from 'react'

export default function WeekDays() {
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
      <div className='row-start-2 row-span-7 col-span-1 text-sm grid grid-rows-subgrid grid-cols-subgrid border-l border-b border-black'>
        {daysOfWeek.map((day: String, index: Key) => (
          <div key={index} className='flex items-center justify-center row-span-1 border-t border-black'>{day}</div>
        ))}
      </div>
    );
}
