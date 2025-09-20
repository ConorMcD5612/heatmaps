import { create } from "domain";
import React from "react";
import { DateTime } from "luxon";


function getWeekStartDate(
  start: DateTime,
  i: number,
  daysFromMonday: number
): string {
  //get how many days to add
  let daysToAdd = i * 7 - daysFromMonday;

  //create a new date with the days added
  const dt = start.plus({days: daysToAdd})

  //return a string with month/day
  return `${dt.month}/${dt.day}`;
}

export default function WeekStart({
  cellAmount,
  isoStartDate,
}: {
  cellAmount: number;
  isoStartDate: string | null;
}) {
  
  const luxDate = DateTime.fromISO(isoStartDate as string)
  const daysFromMonday = luxDate.weekday - 1

  let numDates = Math.ceil((cellAmount + daysFromMonday) / 7);
  const dates = [];

  for (let i = 0; i < numDates; i++) {
    dates.push(
      <div className="
      border-b border-gray-400 text-gray-400 snap-center snap-always
      "
      key={i}>{getWeekStartDate(luxDate, i, daysFromMonday)}</div>
    );
  }

  return (
    <div className="col-span-8 row-span-1">
    <div className="grid grid-flow-col grid-cols-[repeat(12,calc(100%/12))] auto-cols-[calc(100%/12)] place-items-center h-full">
        {dates}
    </div>
    </div>
  );
}
