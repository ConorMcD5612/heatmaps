import React, { Key } from "react";

export default function WeekDays() {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="sticky left-0 z-10 row-span-8 grid grid-cols-subgrid grid-rows-subgrid border-b border-r border-white border-opacity-50 bg-[#1f1f1f] text-sm text-gray-500">
      <div>&nbsp;</div>
      {daysOfWeek.map((day: String, index: Key) => (
        <div
          key={index}
          className="row-span-1 flex items-center justify-center border-t border-white border-opacity-50"
        >
          {day}
        </div>
      ))}
    </div>
  );
}
