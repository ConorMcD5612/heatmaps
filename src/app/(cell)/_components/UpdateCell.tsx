"use client";
import { useSearchParams } from "next/navigation";
import { updateCell } from "@/app/lib/actions";
import {dateToYYYYMMDD} from "@/app/lib/utils";
import Link from "next/link";

export default function UpdateCell() {
  const searchParams = useSearchParams();

  const cellDate = searchParams.get("date");
  const mapName = searchParams.get("name");
  const heatmapID = searchParams.get("heatmapID");

  const updateCellWithDate = updateCell.bind(null, heatmapID, cellDate);

  return (
    <div className="flex flex-col p-2 gap-1 border-2 border-black">
      <div>
      <div className="text-3xl font-bold h-7">{mapName}</div>
      <div className="text-s font-medium text-gray-400 ">{cellDate}</div>
      </div>
      <form className="flex flex-col gap-1" action={updateCellWithDate}>
        <div className="flex gap-2">
          <div className="flex flex-col">
            <label className="h-5">Hrs</label>
            <input min="0" className="w-12 bg-gray-300 rounded-sm p-1" placeholder="00" name="hrs" type="number" />
          </div>

          <div className="flex flex-col">
            <label className="h-5">Mins</label>
            <input min="0" className="w-12 bg-gray-300 rounded-sm p-1" placeholder="00" name="mins" type="number" />
          </div>
        </div>
        <div className="flex gap-1">
          <button type="submit" className="bg-black text-white w-1/2 rounded-sm">
            Add
          </button>
          <Link href="/dashboard"className="w-1/2 rounded-sm bg-gray-300 text-center">Close</Link>
        </div>
      </form>
      <div></div>
    </div>
  );
}
