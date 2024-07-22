import React from "react";
import Cell from "./Cell";
import { fetchHeatmapData } from "../lib/data";



export default async function Heatmap({name, color, totalMins, type} : {
  name: string;
  color: string;
  totalMins: number;
  type: 'time' | 'count';
}) {
  const yearArray = Array.from({ length: 365 });
  const startDate = new Date();




  return (
    <div className="">
      <div className="">{name}</div>
      <div className="grid p-[.5vw] grid-rows-8 grid-flow-col gap-1 w-100 h-max text-center text-xs font-light border-black border-[.1vw] border-solid overflow-x-scroll">
        <div>&nbsp;</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
        {yearArray.map((day, index) => (index % 8 ? <Cell /> : <div>10/26</div>))}
      </div>
    </div>
  );
}
