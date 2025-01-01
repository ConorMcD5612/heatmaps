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
          className={"absolute block top-[-110%] left-[-100%] rounded bg-black p-1 text-white z-10 invisible group-hover/item:visible hover:invisible text-xs whitespace-nowrap"
          }
        >
         
            {`${timeMins} minutes of ${mapName} on ${formattedDate}`}
          
        </div>
   
    </>
  );
}
