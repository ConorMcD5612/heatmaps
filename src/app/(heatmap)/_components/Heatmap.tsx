import React from "react";
import { HeatmapParsed, CellData } from "@/app/lib/definitions";
import { addCell } from "@/app/lib/actions";
import { fetchCellStats } from "@/app/lib/data";
import { HeatmapTotal } from "./HeatmapTotal";
import { OptionsBtn } from "./OptionsBtn";
import { Calendar } from "./Calendar";
import { fetchCellData } from "@/app/lib/data";

export default async function Heatmap({
  heatmapData,
}: {
  heatmapData: HeatmapParsed;
}) {
  //check if heatmap cells are up to date, add cells to todays date if not
  await addCell(heatmapData.heatmap_id, heatmapData.last_updated);

  //for opacity calculation
  const cellStats = await fetchCellStats(heatmapData.heatmap_id);

  const cellData: CellData[] = await fetchCellData(heatmapData.heatmap_id);

  return (
    <div className="mb-3 mt-3 ">
      <div className="flex w-full place-items-center justify-between text-lg">
        <HeatmapTotal
          cellStats={cellStats}
          heatmapName={heatmapData.heatmap_name}
          unit={heatmapData.unit}
          type={heatmapData.type}
          color={heatmapData.color}
        />
        <div className="flex place-items-center gap-1 rounded border-white p-1">
          <OptionsBtn heatmapData={heatmapData} />
        </div>
      </div>

      {/*make this a component, then can useClient to make it scroll */}
      <Calendar
        heatmapData={heatmapData}
        isoStartDate={heatmapData.start_date.toISO()}
        cellStats={cellStats}
        cellData={cellData}
      />
    </div>
  );
}
