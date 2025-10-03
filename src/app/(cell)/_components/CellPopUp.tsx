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
        "invisible absolute left-1/2 top-[-115%] z-10 block -translate-x-1/2 transform whitespace-nowrap rounded bg-black p-1 text-xs text-white hover:invisible group-hover/item:visible"
      }
    >
      {typeStrings[type]}
    </div>
  );
}
