import React, { Key } from 'react'

export default function WeekDays() {
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
      <div className='sticky text-gray-500 left-0 bg-[#1f1f1f] z-10 row-span-8 text-sm grid grid-rows-subgrid grid-cols-subgrid  border-b border-r border-white border-opacity-50'>
        <div>&nbsp;</div>
        {daysOfWeek.map((day: String, index: Key) => (
          <div key={index} className='flex items-center justify-center row-span-1 border-t border-opacity-50 border-white'>{day}</div>
        ))}
      </div>
    );
}
