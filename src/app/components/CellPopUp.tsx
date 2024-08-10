import React from "react";
import { clsx } from "clsx";

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

export default function CellPopUp({
  startDate,
  index,
  fillerCellAmount,
  name,
}: {
  startDate: Date;
  index: number;
  fillerCellAmount: number;
  name: string;
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
            {formatDate(startDate, index, fillerCellAmount, name)}
          </div>
        </div>
      )}
    </>
  );
}
