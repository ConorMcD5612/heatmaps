import { create } from "domain";
import React from "react";


function getWeekStartDate(
  start: Date,
  i: number,
  daysFromMonday: number
): string {
  let daysToAdd = i * 7 - daysFromMonday;

  let date = new Date(start);
  date.setDate(date.getDate() + daysToAdd);

  return `${date.getMonth() + 1}/${date.getDate() + 1}`;
}

export default function WeekStart({
  cellAmount,
  startDate,
}: {
  cellAmount: number;
  startDate: Date;
}) {
  let daysFromMonday = startDate.getDay() == 0 ? 6 : startDate.getDay();

  let numDates = Math.ceil((cellAmount + daysFromMonday) / 7);
  const dates = [];

  for (let i = 0; i < numDates; i++) {
    dates.push(
      <div className="
      border-b border-black
      "
      key={i}>{getWeekStartDate(startDate, i, daysFromMonday)}</div>
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
