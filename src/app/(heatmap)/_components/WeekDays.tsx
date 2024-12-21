import React from 'react'

export default function WeekDays() {
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
      <div className="grid grid-rows-8 w-[20%]">
      <div className="">&nbsp;</div>
        {daysOfWeek.map((day) => (
          <div>{day}</div>
        ))}
      </div>
    );
}
