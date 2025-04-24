import React from "react";
import { DateTime } from "luxon";

export default function CellPopUp({
  date,
  timeMins,
  mapName,
}: {
  date: DateTime;
  timeMins: number;
  mapName: string;
}) {
  const formattedDate = date.toISODate();

  return (
    <>
      <div
        className={
          "absolute block top-[-115%] left-1/2 transform -translate-x-1/2 rounded bg-black p-1 text-white z-10 invisible group-hover/item:visible hover:invisible text-xs whitespace-nowrap  "
        }
      >
        {`${timeMins} minutes of ${mapName} on ${formattedDate}`}
      </div>
    </>
  );
}
