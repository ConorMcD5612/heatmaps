
import React from "react";
import { clsx } from "clsx";
import CellPopUp from "./CellPopUp";


export default function Cell({
  startDate,
  fillerCellAmount,
  index,
  name,
  cellAmount
}: {
  startDate: Date;
  fillerCellAmount: number;
  index: number;
  name: string;
  cellAmount: number;
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
          cellAmount == index + 7 ? "shadow-inner border-black" : "border-gray-300"
        )}
      >
      <CellPopUp startDate={startDate} fillerCellAmount={fillerCellAmount} index={index} name={name}/>
      </div>
    </>
  );
}
