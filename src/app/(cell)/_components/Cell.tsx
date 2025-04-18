import { CellData, CellStats, HeatmapData } from "@/app/lib/definitions";
import React from "react";
import CellPopUp from "./CellPopUp";
import Link from "next/link";
import { dateToYYYYMMDD, calculateOpacity } from "@/app/lib/utils";
import CellColor from "./CellColor";

export default function Cell({
  cellData,
  cellStats,
  heatmapData,
}: {
  cellData: CellData;
  cellStats: CellStats;
  heatmapData: HeatmapData;
}) {
  const formattedDate = dateToYYYYMMDD(cellData.date as Date);
  return (
    <div className="border border-black w-[90%] h-[90%] group/item relative ">
      <CellColor
        cellStats={cellStats}
        timeMins={cellData.time_mins}
        color={heatmapData.color}
      />
      <CellPopUp
        date={cellData.date as Date}
        timeMins={cellData.time_mins}
        mapName={heatmapData.heatmap_name}
      />
      <Link
        className="absolute inset-0 block z-10"
        href={`/dashboard?cellModal=y&name=${heatmapData.heatmap_name}&date=${formattedDate}&heatmapID=${cellData.heatmap_id}`}
      >
        &nbsp;
      </Link>
    </div>
  );
}
