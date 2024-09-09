
import React from "react";
import { useState, useEffect } from "react";

const calculateColor = (timeMins: number, max: number, min: number): number => {
  if (max - min === 0) return 0;

  let opacity = (timeMins - min) / (max - min);
  console.log("Min:", min, "Max:", max, "Value:", timeMins);
 
  return opacity.toFixed(1) 
};

export default function CellColor({
  timeMins,
  min,
  max,
}: {
  timeMins: number;
  min: number;
  max: number;
}) {

  return (
    <>
      <div className={`bg-green-500 w-full h-full z-0`} style={{opacity: calculateColor(timeMins, max, min)}}></div>
    </>
  );
}
