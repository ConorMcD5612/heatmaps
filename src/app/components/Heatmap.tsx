import React from "react";
import Cell from "./Cell";
import CurrentWeek from "./CurrentWeek";


//startDate.getDay() 0-6  add this + 1 to cell amount render 
//should also make the date not start on friday for weeks 

//This is correct days, doesn't account for dateCells
const daysFromStart = (startDateJS: Date): number => {
  
  const todaysDate = new Date()
  const difference = todaysDate.getTime() - startDateJS.getTime();
  
  const days = Math.ceil(difference / (1000 * 3600 * 24))
  return days
};

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
  const startDateJS = new Date(startDate * 1000)

  //amount of days from monday (startingDate)
  const fillerCellAmount = startDateJS.getDate() + 1

  const dateCellsAmount = Math.floor(daysFromStart(startDateJS) / 7)
  const cellAmount = daysFromStart(startDateJS) + dateCellsAmount + fillerCellAmount
  
 
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
           <CurrentWeek index={index} startDate={startDate}/>
          )
        )}
      </div>
    </div>
  );
}
