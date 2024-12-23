import React from 'react'

export default function WeekDays() {
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
      <div className='bg-white box-border w-[10%] grid grid-rows-7 grid-flow-col'>
        {daysOfWeek.map((day) => (
          <div className='bg-white w-[10%]'>{day}</div>
        ))}
      </div>
    );
}
