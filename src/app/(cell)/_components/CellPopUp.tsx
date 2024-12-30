import React from "react";
import { clsx } from "clsx";
import dateToYYYYMMDD from "@/app/lib/utils";


export default function CellPopUp({
  date,
  timeMins,
  mapName
}: {
  date: Date;
  timeMins: number;
  mapName: string;
}) {
  const formattedDate = dateToYYYYMMDD(date)

  return (
    <>
        <div
          className={clsx(
            "absolute",
            "flex",
            "place-items-center",
            "top-[-110%]",
            "left-[-100%]",
            "rounded",
            "bg-black",
            "w-64",
            "h-5",
            "p-1",
            "text-white",
            "z-10",
            "invisible",
            "group-hover/item:visible",
            "hover:invisible"
          )}
        >
          <div className="w-full text-sm">
            {`${timeMins} minutes of ${mapName} on ${formattedDate}`}
          </div>
        </div>
   
    </>
  );
}
