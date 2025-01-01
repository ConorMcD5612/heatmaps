import React from "react";
import { useState, useEffect } from "react";

//percentiles are 10% first, 35% second, 60% third 
let ZScoreHash = {
  "first": -1.282,
  "second": -.385,
  "third": .253,
}


const calculateOpacity = (dataPt: number): number => {

};

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
