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
  //TODO: think its better to just pass these as props
  const cellDate = cellData.date;
  const formattedDate = DateTime.fromISO(cellDate)
    .setLocale("en")
    .toFormat("cccc, LLLL d yyyy");
  const mapName = heatmapData.heatmap_name;
  const heatmapID = heatmapData.heatmap_id;
  const unit = heatmapData.unit;
  const type = heatmapData.type;
  const router = useRouter();

  const formSubmit = async (formData: FormData) => {
    //TODO: figure this out with bind
    const updateCellWithDate = updateCell.bind(null, heatmapID, cellDate, type);
    await updateCellWithDate(formData);
    router.refresh();
    setModalOpen(false);
  };
  //would I need to handle null?

  return (
    <div className="flex flex-col p-2 gap-1 border-2 border-white">
      <div>
        <div className="text-4xl font-extrabold ">{mapName}</div>
        <div className="text-s font-medium text-gray-400">{formattedDate}</div>
      </div>
      <hr className="m-1"/>
      <form className="flex flex-col gap-1" action={formSubmit}>
        <h2 className="font-semibold text-lg">Add To Cell:</h2>
        <InputRenderer unit={unit} type={type}></InputRenderer>
        <hr className="m-1"/>
        <div className="flex right-10 bottom-10 gap-1 justify-end">
          <button className="p-2" onClick={() => setModalOpen(false)}>
            Close
          </button>
          <button type="submit" className="p-2 bg-black text-white rounded-sm">
            Submit
          </button>
        </div>
      </form>
      <div></div>
    </div>
  );
}
