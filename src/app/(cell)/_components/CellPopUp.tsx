import React from "react";
import { DateTime } from "luxon";
import { format } from "path";

export default function CellPopUp({
  date,
  timeMins,
  mapName,
}: {
  date: string | null;
  timeMins: number;
  mapName: string;
}) {



  return (
    <>
      <div
        className={
          "absolute block top-[-115%] left-1/2 transform -translate-x-1/2 rounded bg-black p-1 text-white z-10 invisible group-hover/item:visible hover:invisible text-xs whitespace-nowrap  "
        }
      >
        {`${timeMins} minutes of ${mapName} on ${date}`}
      </div>
    </>
  );
}
