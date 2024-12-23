import React from 'react'

export default function WeekDays() {
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
      <div className='w-[10%] grid grid-rows-7 grid-flow-col'>
        {daysOfWeek.map((day) => (
          <div className='border-r border-l'>{day}</div>
        ))}
      </div>
    );
}
