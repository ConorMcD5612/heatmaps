import React, { Key } from 'react'

export default function WeekDays() {
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
      <div className='sticky left-0 bg-gray-300 z-10 row-span-8 text-sm grid grid-rows-subgrid grid-cols-subgrid  border-b border-r border-black'>
        <div>&nbsp;</div>
        {daysOfWeek.map((day: String, index: Key) => (
          <div key={index} className='flex items-center justify-center row-span-1 border-t border-black'>{day}</div>
        ))}
      </div>
    );
}
