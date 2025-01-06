import React from "react";
import { useState, useEffect } from "react";
import { CellStats } from "@/app/lib/definitions";
import { calculateOpacity } from "@/app/lib/utils";


export default function CellColor({
  timeMins,
  color,
  cellStats
}: {
 cellStats: CellStats;
 color: string
 timeMins: number;
}) {

  return (
    <>
      <div
        className={`w-full h-full z-0`}
        style={{
          opacity: calculateOpacity(timeMins, cellStats.mean, cellStats.std_dev),
          backgroundColor: color,
        }}
      ></div>
    </>
  );
}
