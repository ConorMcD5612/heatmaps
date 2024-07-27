import React from "react";
import Cell from "./Cell";
import { fetchHeatmapData } from "../lib/data";

export default async function Heatmap({
  name,
  color,
  totalMins,
  type,
}: {
  name: string;
  color: string;
  totalMins: number;
  type: "time" | "count";
}) {
  const cellAmount = 200;
  const yearArray = Array.from({ length: cellAmount });
  const todaysDate = new Date();
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    
      <div className="flex flex-col h-[30%]">
        <div className="">{name}</div>
        <div
          className={`grid p-[.5vw] grid-rows-${Math.min(8, cellAmount)} grid-flow-col gap-1 h-4/5  text-center text-xs font-light border-black border-[.1vw] border-solid overflow-x-scroll`}
        >
          <div>&nbsp;</div>
          {daysOfWeek.map((day, index) =>
            index < cellAmount - 1 ? <div className="m-auto">{day}</div> : null
          )}
          {yearArray.map((cell, index) =>
            index % Math.min(8, cellAmount) ? <Cell /> : <div className="col-span-3 m-auto">10/26</div>
          )} 

        </div>
      </div>

  );  
}
