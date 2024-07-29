import React from "react";
import Cell from "./Cell";
import { fetchHeatmapData } from "../lib/data";

const daysFromStart = (startDate: number): number => {
  const startDateJS = new Date(startDate * 1000)
  const todaysDate = new Date()
  const difference = todaysDate.getTime() - startDateJS.getTime();
  
  const days = Math.ceil(difference / (1000 * 3600 * 24))
  return days 
};

// I think this should be a component
const currentWeek = (index: number, cellAmount: number, startDate: number): string => {
  // This won't work for the under 8 stuff 
  const startDateJS = new Date(startDate * 1000)

 
  if(index == 0) {
    console.log(startDateJS, "THIS IS STARTDATE")
    return `${startDateJS.getMonth()+1}/${startDateJS.getDay() + 1}`
  }

  // not sure if this is necessary going to need specific date for each cell
  
  const weekDate = new Date(startDateJS.getTime() + (7 * 24 * 60 * 60 * 1000))
  console.log(weekDate, "This is week date")

  return `${weekDate.getMonth()+1}/${weekDate.getDay() + 1}`
}



export default async function Heatmap({
  name,
  color,
  totalMins,
  type,
  startDate,
}: {
  name: string;
  color: string;
  totalMins: number;
  type: "time" | "count";
  startDate: number;
}) {
  const todaysDate = new Date();
  
 
  const cellAmount = daysFromStart(startDate)
  
 
  const yearArray = Array.from({ length: cellAmount });

  
  console.log(startDate, todaysDate);
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="flex flex-col h-[30%]">
      <div className="">{name}</div>
      <div
        className={`grid p-[.5vw] grid-rows-${Math.min(
          8,
          cellAmount
        )} grid-flow-col gap-1 h-4/5  text-center text-xs font-light border-black border-[.1vw] border-solid overflow-x-scroll`}
      >
        <div>&nbsp;</div>
        {daysOfWeek.map((day, index) =>
          index < cellAmount - 1 ? <div className="m-auto">{day}</div> : null
        )}
        {yearArray.map((cell, index) =>
          index % Math.min(8, cellAmount) ? (
            <Cell />
          ) : (
            <div className="col-span-3 m-auto">{currentWeek(index, cellAmount, startDate)}</div>
          )
        )}
      </div>
    </div>
  );
}
