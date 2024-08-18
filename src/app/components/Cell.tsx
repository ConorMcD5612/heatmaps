
import React from "react";
import { clsx } from "clsx";
import CellPopUp from "./CellPopUp";
import { useEffect } from "react";
import { createCell } from "../lib/actions";

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
  name: string
): string => {
  const date = getDate(startDate, index, fillerCellAmount);
  return `1hr 0m of ${name.toLowerCase()} on ${date.getMonth() + 1}/${
    date.getDate() + 1
  }/${date.getUTCFullYear()}`;
};

export default async function Cell({
  startDate,
  fillerCellAmount,
  index,
  name,
  cellAmount,
  heatmapID
}: {
  startDate: Date;
  fillerCellAmount: number;
  index: number;
  name: string;
  cellAmount: number;
  heatmapID: number;
}) {

  
  
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
        <CellPopUp
          formattedDate={formatDate(startDate, index, fillerCellAmount, name)}
          fillerCellAmount={fillerCellAmount}
          index={index}
        />
      </div>
    </>
  );
}
