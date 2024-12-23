import React from 'react'

export default function WeekDays() {
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
      <div className='row-start-2 row-span-7 col-span-1 grid grid-rows-subgrid grid-cols-subgrid border-l border-b'>
        {daysOfWeek.map((day) => (
          <div className='flex items-center justify-center row-span-1 border-t'>{day}</div>
        ))}
      </div>
    );
}
