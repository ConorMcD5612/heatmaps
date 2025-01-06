import React from "react";
import { useState, useEffect } from "react";


export default function CellColor({
 
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
          opacity: calculateOpacity(),
          backgroundColor: color,
        }}
      ></div>
    </>
  );
}
