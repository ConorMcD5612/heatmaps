"use client";
import React from "react";
import { clsx } from "clsx";
import { useEffect } from "react";


const getDate = (startDate: Date, index: number, fillerCellAmount: number): string => {
  //startDate + index = current day

  const currentDate = new Date(startDate);
  
  const dayAmount = (index - fillerCellAmount)
  currentDate.setDate(currentDate.getDate() + dayAmount);
  return `${currentDate.getMonth() + 1} ${currentDate.getDate() + 1}`;
};

export default function Cell({
  startDate,
  fillerCellAmount,
  index,
 
}: {
  startDate: Date;
  fillerCellAmount: number;
  index: number;

}) {
  useEffect(() => {
    console.log(getDate(startDate, index, fillerCellAmount))
    console.log("fillerCell", fillerCellAmount)
    console.log("index", index)
    
  }, []);

  return (
    <>
     
        <div
          className={clsx(
            "border-gray-300",
            "border-[.1vw]",
            index < fillerCellAmount ? "border-dashed" : "border-solid",
            "col-span-3",
            "max-h-100",
            "relative",
            "group/item"
          )}
        >
          {fillerCellAmount <= index && (
            <div
              className={clsx(
                "absolute",
                "flex",
                "place-items-center",
                "-top-[150%]",
                "-left-[50%]",
                "rounded",
                "bg-black",
                "w-48",
                "h-6",
                "text-white",
                "z-10",
                "invisible",
                "group-hover/item:visible"
              )}
            >
              <div className="w-full">{getDate(startDate, index, fillerCellAmount)}</div>
            </div>
          )}
        </div>
     
    </>
  );
}
