import React from "react";
import { DateTime } from "luxon";
import { format } from "path";
import { HeatmapType } from "@/app/lib/definitions";

type CellPopUpProps = {
  date: string | null;
  timeMins: number;
  mapName: string;
  type: HeatmapType;
  unit: string;
};

export default function CellPopUp({
  date,
  timeMins,
  mapName,
  type,
  unit,
}: CellPopUpProps) {
  const typeStrings: Record<HeatmapType, string> = {
    Binary: `${timeMins ? "Did" : "Did not"} ${mapName} on ${date}`,
    Count: `${timeMins}${unit} of ${mapName} on ${date}`,
    Time: `${timeMins} minutes of ${mapName} on ${date}`,
  };

  return (
    <div
      className={
        "absolute block top-[-115%] left-1/2 transform -translate-x-1/2 rounded bg-black p-1 text-white z-10 invisible group-hover/item:visible hover:invisible text-xs whitespace-nowrap  "
      }
    >
      {typeStrings[type]}
    </div>
  );
}
