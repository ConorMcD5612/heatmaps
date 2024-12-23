import React from 'react'

export default function WeekDays() {
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
      <div className='row-start-2 row-span-7 col-span-1 grid grid-rows-subgrid grid-cols-subgrid border-l border-b box-border'>
        {daysOfWeek.map((day) => (
          <div className='box-border border-t'>{day}</div>
        ))}
      </div>
    );
}
