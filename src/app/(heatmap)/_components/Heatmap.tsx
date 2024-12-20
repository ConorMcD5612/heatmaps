import React from "react";

import CurrentWeek from "./CurrentWeek";
import Cell from "@/app/(cell)/_components/Cell";

import { createCell } from "@/app/lib/actions";
import { fetchCellData, fetchMinMax } from "@/app/lib/data";
import { fetchMinsAverage } from "@/app/lib/data";
import FeatherIcon from "feather-icons-react";
import Link from "next/link";
import TotalMins from "./TotalMins";

//startDate.getDay() 0-6  add this + 1 to cell amount render
//should also make the date not start on friday for weeks

//This is correct days, doesn't account for dateCells
const daysFromStart = (startDate: Date): number => {
  const todaysDate = new Date();
  const difference = todaysDate.getTime() - startDate.getTime();

  const days = Math.ceil(difference / (1000 * 3600 * 24));

  return days;
};

export default async function Heatmap({
  name,
  color,
  totalMins,
  type,
  startDate,
  heatmapID,
}: {
  name: string;
  color: string;
  totalMins: number;
  type: "time" | "count";
  startDate: Date;
  heatmapID: number;
}) {
  const todaysDate = new Date();

  //This could possibly be wrong It goes sat-sunday
  const fillerCellAmount = startDate.getDay();
  console.log("Name", fillerCellAmount, "HeatmapID", heatmapID)

  const dateCellsAmount = Math.floor(daysFromStart(startDate) / 7) + 1;
 
  //plus 2 when date is a week start (Monday), date cell and cell itself
  const cellAmount =
    daysFromStart(startDate) + dateCellsAmount + fillerCellAmount;

  const daysArray = Array.from({ length: cellAmount });
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  //use for cell indexing
  let dateCounter = 0;
  const minMaxData = await fetchMinMax(heatmapID);

  return (
    <div className="flex flex-col h-[30%]">
      <div className="flex justify-between">
        <div className="flex">
          {name}
          <TotalMins heatmapID={heatmapID}/>
        </div>
        <Link href={`/dashboard?optionsModal=y&heatmapID=${heatmapID}&name=${name}&color=${encodeURIComponent(color)}`}>
          <FeatherIcon icon="settings" />
        </Link>
      </div>
      <div
        className={`grid p-[.5vw] grid-rows-${Math.min(
          8,
          cellAmount
        )} grid-flow-col gap-1 h-4/5  text-center text-xs font-light border-black border-[.1vw] border-solid overflow-x-scroll`}
      >
        <div>&nbsp;</div>
        {daysOfWeek.map((day, index) =>
          index < cellAmount - 1 ? <div key={index} className="m-auto">{day}</div> : null
        )}
        {daysArray.map((_, index) => {
          
          const isCell = index % Math.min(8, cellAmount) !== 0;
          if (isCell) {
            const currentIndex = dateCounter;
            dateCounter++; // Increment only if a Cell is rendered
            console.log(currentIndex, "current index")
            return (
              <Cell
                startDate={startDate}
                index={currentIndex}
                fillerCellAmount={fillerCellAmount}
                cellAmount={cellAmount}
                name={name}
                heatmapID={heatmapID}
                min={minMaxData.min_time}
                max={minMaxData.max_time}
                color={color}
                key={index}
              />
            );
          } else {
            return (
              <CurrentWeek key={index} index={index} startDate={startDate} />
            );
          }
        })}
      </div>
    </div>
  );
}
