import React from "react";
import { useState, useEffect } from "react";

const calculateColor = (timeMins: number, max: number, min: number): number => {
  if (max - min === 0) return 0;

  let opacity = (timeMins - min) / (max - min);

  return parseInt(opacity.toFixed(1));
};

export default function CellColor({
  timeMins,
  min,
  max,
  color,
}: {
  timeMins: number;
  min: number;
  max: number;
  color: string;
}) {

  return (
    <>
      <div
        className={`w-full h-full z-0`}
        style={{
          opacity: calculateColor(timeMins, max, min),
          backgroundColor: color,
        }}
      ></div>
    </>
  );
}
