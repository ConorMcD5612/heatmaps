
import React from "react";
import { clsx } from "clsx";
import CellPopUp from "./CellPopUp";
import { useEffect } from "react";
import { createCell } from "../lib/actions";
import Link from "next/link";
import { fetchCellData } from "../lib/data";
import { CellData } from "../lib/definitions";
import { fetchMinMax } from "../lib/data";
import CellColor from "./CellColor"

const getDate = (
  startDate: Date,
  index: number,
  fillerCellAmount: number
): Date => {
  const currentDate = new Date(startDate);

  const dayAmount = index - fillerCellAmount + 1;
 
  currentDate.setDate(currentDate.getDate() + dayAmount);
  return currentDate;
};

const formatDate = (
  startDate: Date,
  index: number,
  fillerCellAmount: number,
  name: string,
  cellData: any
 
): string => {
  const date = getDate(startDate, index, fillerCellAmount);
  const hours = Math.floor(cellData[0].time_mins / 60)
  const mins = cellData[0].time_mins - (hours * 60)


  //getDate() not 0 indexed but month is lol
  return `${hours}hr ${mins}m of ${name.toLowerCase()} on ${date.getMonth() + 1}/${
    date.getDate()
  }/${date.getUTCFullYear()}`;
};




 //color intensity based on average

export default async function Cell({
  startDate,
  fillerCellAmount,
  index,
  name,
  cellAmount,
  heatmapID,
  min,
  max
}: {
  startDate: Date;
  fillerCellAmount: number;
  index: number;
  name: string;
  cellAmount: number;
  heatmapID: number;
  min: number;
  max: number;
}) {

  //if getDate doesnt work move it to utils can use in createCell
  //doing this for filler cells btw + 2
  await createCell(heatmapID, index, getDate(startDate, index, fillerCellAmount))
 
  
  const cellData = await fetchCellData(heatmapID, index)
  console.log(cellData, "LAWL")
 

  
  return (
    <>
      <div
        className={clsx(
          "border-[.1vw]",
          index < fillerCellAmount ? "border-dashed" : "border-solid",
          "col-span-3",
          "max-h-100",
          "relative",
          "group/item",
          
          cellAmount == index + 7
            ? "shadow-inner border-black"
            : "border-gray-300"
        )}
      >
        <CellColor timeMins={cellData[0].time_mins} min={min} max={max}/>
        <CellPopUp
          formattedDate={formatDate(startDate, index, fillerCellAmount, name, cellData)}
          fillerCellAmount={fillerCellAmount}
          index={index}
        />
        <Link className="absolute inset-0 block z-10" href={`/dashboard?showDialog=y&date=${getDate(startDate, index, fillerCellAmount).toLocaleDateString()}&heatmapID=${heatmapID}&cellID=${index}`}>&nbsp;</Link>
      </div>
    </>
  );
}
