"use client"
import React from "react";
import { clsx } from "clsx";
import { useState } from "react";

export default function Cell({
  startDate,
  fillerCellAmount,
  index
}: {
  startDate: Date;
  fillerCellAmount: number;
  index: number;
}) {

  
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
      
      <div className={clsx("absolute",
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
       )}>
        <div className="w-full">
        0 mins of excercise on Feb 14th
        </div>
      </div>
     </div>
  
      </>
  );
}
