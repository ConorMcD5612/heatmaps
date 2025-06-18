"use client";
import { useSearchParams } from "next/navigation";
import { updateCell } from "@/app/lib/actions";
import Link from "next/link";
import { HeatmapParsed, CellData } from "@/app/lib/definitions";

export default function UpdateCell({
  heatmapData,
  cellData,
  setModalOpen,
}: {
  heatmapData: HeatmapParsed;
  cellData: CellData;
  setModalOpen: (open: boolean) => void;
}) {
  const cellDate = cellData.date;
  const mapName = heatmapData.heatmap_name;
  const heatmapID = heatmapData.heatmap_id;
  const unit = heatmapData.unit;
  const type = heatmapData.type;
  console.log(cellDate);
  

  //would I need to handle null?
  const updateCellWithDate = updateCell.bind(null, heatmapID, cellDate);

  return (
    <div className="flex flex-col p-2 gap-1 border-2 border-black">
      <div>
        <div className="text-3xl font-bold h-7">{mapName}</div>
        <div className="text-s font-medium text-gray-400 ">{cellDate}</div>
      </div>
      <form className="flex flex-col gap-1" action={updateCellWithDate}>
        {type == "Time" ? (
          <div className="flex gap-2">
            <div className="flex flex-col">
              <label className="h-5">Hrs</label>
              <input
                min="0"
                className="w-12 bg-gray-300 rounded-sm p-1"
                placeholder="00"
                name="hrs"
                type="number"
              />
            </div>

            <div className="flex flex-col">
              <label className="h-5">Mins</label>
              <input
                min="0"
                className="w-12 bg-gray-300 rounded-sm p-1"
                placeholder="00"
                name="mins"
                type="number"
              />
            </div>
          </div>
        ) : (
          <div className="flex">
            <input
              min="0"
              className="w-12 bg-gray-300 rounded-sm p-1"
              placeholder="00"
              name="mins"
              type="number"
            />
            <label className="h-5">{unit}</label>
          </div>
        )}

        <div className="flex gap-1">
          <button
            type="submit"
            className="bg-black text-white w-1/2 rounded-sm"
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="w-1/2 rounded-sm bg-gray-300 text-center"
          >
            Close
          </button>
        </div>
      </form>
      <div></div>
    </div>
  );
}
