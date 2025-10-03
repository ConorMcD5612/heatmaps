"use client";
import { useSearchParams } from "next/navigation";
import { updateCell } from "@/app/lib/actions";
import Link from "next/link";
import { HeatmapParsed, CellData } from "@/app/lib/definitions";
import { useRouter } from "next/navigation";
import { DateTime } from "luxon";
import { InputRenderer } from "./InputRenderer";

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

  const formattedDate = DateTime.fromISO(cellDate)
    .setLocale("en")
    .toFormat("cccc, LLLL d yyyy");

  const router = useRouter();

  const formSubmit = async (formData: FormData) => {
    const updateCellWithDate = updateCell.bind(null, heatmapID, cellDate, type);
    await updateCellWithDate(formData);
    router.refresh();
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-1 border-2 border-white p-2">
      <div>
        <div className="text-4xl font-extrabold">{mapName}</div>
        <div className="text-s font-medium text-gray-400">{formattedDate}</div>
      </div>
      <hr className="m-1" />
      <form className="flex flex-col gap-1" action={formSubmit}>
        <h2 className="text-lg font-semibold">Add To Cell:</h2>
        <InputRenderer unit={unit} type={type}></InputRenderer>
        <hr className="m-1" />
        <div className="bottom-10 right-10 flex justify-end gap-1">
          <button className="p-2" onClick={() => setModalOpen(false)}>
            Close
          </button>
          <button type="submit" className="rounded-sm bg-black p-2 text-white">
            Submit
          </button>
        </div>
      </form>
      <div></div>
    </div>
  );
}
