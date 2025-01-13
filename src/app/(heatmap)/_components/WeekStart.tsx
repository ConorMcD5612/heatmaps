import { create } from "domain";
import React from "react";

export default function WeekStart({
  cellAmount,
  startDate,
}: {
  cellAmount: number;
  startDate: Date;
}) {
  let daysFromMonday = startDate.getDay() == 0 ? 6 : startDate.getDay();

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

  let numDates = Math.ceil((cellAmount + daysFromMonday) / 7);

  const dates = [];

  for (let i = 0; i < numDates; i++) {
    dates.push(
      <div key={i}>{getWeekStartDate(startDate, i, daysFromMonday)}</div>
    );
  }

  return (
    <div className="grid grid-rows-subgrid grid-cols-subgrid row-span-1 col-span-8 border-t border-r border-l box-border border-black">
      <div className="col-span-1"></div>
      <div className=" text-sm  col-span-7 border-l box-border grid grid-cols-12 place-items-center border-black">
        {dates}
      </div>
    </div>
  );
}
