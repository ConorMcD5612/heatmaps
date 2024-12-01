"use client";
import { useSearchParams } from "next/navigation";
import { updateCell } from "../lib/actions";


export default function UpdateCell() {
  const searchParams = useSearchParams();
  const cellDate = searchParams.get("date");
  const cellID = searchParams.get("cellID");
  const heatmapID = searchParams.get("heatmapID");

  //dont think using state makes sense
  //dispatch from using save after done, it closes on save

  //need heatmapID in from URL

  const updateCellWithID = updateCell.bind(null, cellID, heatmapID);

  return (
      <div>
        <div>{cellDate}</div>
        <form action={updateCellWithID}>
          <input name="hrs" type="number"  />
          Hrs
          <input name="mins" type="number"  />
          Mins
          <button type="submit" className="bg-black text-white">Save</button>
        </form>
        <div></div>
      </div>
  );
}
