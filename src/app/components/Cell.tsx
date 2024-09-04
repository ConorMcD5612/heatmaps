
import React from "react";
import { clsx } from "clsx";
import CellPopUp from "./CellPopUp";
import { useEffect } from "react";
import { createCell } from "../lib/actions";
import Link from "next/link";
import { fetchCellData } from "../lib/data";
import { CellData } from "../lib/definitions";

const getDate = (
  startDate: Date,
  index: number,
  fillerCellAmount: number
): Date => {
  const currentDate = new Date(startDate);

  const dayAmount = index - fillerCellAmount;
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

  return `${hours}hr ${mins}m of ${name.toLowerCase()} on ${date.getMonth() + 1}/${
    date.getDate() + 1
  }/${date.getUTCFullYear()}`;
};




 //color intensity based on average
const calculateColor = (cellData: any, max: number, min: number): string => {
  const mins = cellData[0].time_mins
  //0 .25 5 .75 1
  //0, 128, 51
  //just do ratio 
  //just want a number below 0 
  // can just take average and see if above or below 
  //can do average + average + .25 of average 
  //how do I make it go 0-1 based on what the time is 
  //normalize 0-1 based on average?
  //think I need min and max then 
  //return base color if max-min === 0
  // max color
  if(max - min === 0) return "rgb(0,255,0)"
  //range from 0-1   
  const val = cellData[0].time_mins
  const opacity = (val - min) / (max - min) 
  return `rgba(0, 255, 0, ${opacity})`

} 

export default async function Cell({
  startDate,
  fillerCellAmount,
  index,
  name,
  cellAmount,
  heatmapID,
  minsAverage
}: {
  startDate: Date;
  fillerCellAmount: number;
  index: number;
  name: string;
  cellAmount: number;
  heatmapID: number;
  minsAverage: number;
}) {

  //if getDate doesnt work move it to utils can use in createCell
  //doing this for filler cells btw + 2
  await createCell(heatmapID, index, getDate(startDate, index, fillerCellAmount))
  

  const cellData = await fetchCellData(heatmapID, index)
  console.log("THIS IS FTECHCELL DATA", cellData[0].time_mins)
  const color = calculateColor(dataCell)
  
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
          `bg-color-[${color}]`
          cellAmount == index + 7
            ? "shadow-inner border-black"
            : "border-gray-300"
        )}
      >
        <CellPopUp
          formattedDate={formatDate(startDate, index, fillerCellAmount, name, cellData)}
          fillerCellAmount={fillerCellAmount}
          index={index}
        />
        <Link className="w-full h-full block" href={`/dashboard?showDialog=y&date=${getDate(startDate, index, fillerCellAmount).toLocaleDateString()}&heatmapID=${heatmapID}&cellID=${index}`}>&nbsp;</Link>
      </div>
    </>
  );
}
