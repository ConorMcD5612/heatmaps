import React from "react";
import Cell from "./Cell";

export default function Heatmap({ name }: { name: string }) {
  const yearArray = Array.from({ length: 365 });

  return (
    <div>
      {name}
      <div className="flex">
        <div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
          <div>Sun</div>
        </div>
        <div className="grid grid-rows-7 grid-flow-col gap-1 w-max h-max">
          {yearArray.map((day) => (
            <Cell />
          ))}
        </div>
      </div>
    </div>
  );
}
