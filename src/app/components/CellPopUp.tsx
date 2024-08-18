import React from "react";
import { clsx } from "clsx";


export default function CellPopUp({
  formattedDate,
  fillerCellAmount,
  index
}: {
  formattedDate: string;
  fillerCellAmount: number;
  index: number;
}) {
  return (
    <>
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
            "w-52",
            "h-6",
            "text-white",
            "z-10",
            "invisible",
            "group-hover/item:visible"
          )}
        >
          <div className="w-full">
            {formattedDate}
          </div>
        </div>
      )}
    </>
  );
}
