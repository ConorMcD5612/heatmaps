"use client";
import { useSearchParams } from "next/navigation";
import { updateCell } from "@/app/lib/actions";
import dateToYYYYMMDD from "@/app/lib/utils";

export default function UpdateCell() {
  const searchParams = useSearchParams();
  const cellDate = searchParams.get("date");
  const mapName = searchParams.get("name");
  const heatmapID = searchParams.get("heatmapID");

  //dont think using state makes sense
  //dispatch from using save after done, it closes on save

  //need heatmapID in from URL

  const updateCellWithDate = updateCell.bind(cellDate, heatmapID);

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
            <input className="w-12 bg-gray-300 rounded-sm p-1" placeholder="00" name="hrs" type="number" />
          </div>

          <div className="flex flex-col">
            <label className="h-5">Mins</label>
            <input className="w-12 bg-gray-300 rounded-sm p-1" placeholder="00" name="mins" type="number" />
          </div>
        </div>
        <div className="flex gap-1">
          <button type="submit" className="bg-black text-white w-1/2 rounded-sm">
            Add
          </button>
          <button className="w-1/2 rounded-sm bg-gray-300">Close</button>
        </div>
      </form>
      <div></div>
    </div>
  );
}
