import React from "react";
import { clsx } from "clsx";

export default function Cell({
  startDate,
  fillerCellAmount,
  index
}: {
  startDate: number;
  fillerCellAmount: number;
  index: number;
}) {
  
  return (
    <div
      className={clsx(
        "border-black",
        "border-[.1vw]",
        index < fillerCellAmount ? "border-dashed" : "border-solid",
        "opacity-25",
        "col-span-3",
        "max-h-100"
      )}
    ></div>
  );
}
