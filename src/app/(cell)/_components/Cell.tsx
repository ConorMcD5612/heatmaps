import { CellData, CellDataParsed, CellStats, HeatmapData, HeatmapParsed } from "@/app/lib/definitions";
import React from "react";
import CellPopUp from "./CellPopUp";
import Link from "next/link";
import CellColor from "./CellColor";

export default function Cell({
  cellData,
  cellStats,
  heatmapData,
}: {
  cellData: CellDataParsed;
  cellStats: CellStats;
  heatmapData: HeatmapParsed;
}) {
  const formattedDate = cellData.date.toISODate();
  return (
    <div className="border border-black w-[90%] h-[90%] group/item relative ">
      <CellColor
        cellStats={cellStats}
        timeMins={cellData.time_mins}
        color={heatmapData.color}
        inverse={heatmapData.inverse}
      />
      <CellPopUp
        date={cellData.date}
        timeMins={cellData.time_mins}
        mapName={heatmapData.heatmap_name}
      />
      <Link
        className="absolute inset-0 block z-10"
        href={`/dashboard?cellModal=y&name=${heatmapData.heatmap_name}&date=${formattedDate}&heatmapID=${cellData.heatmap_id}&type=${heatmapData.type}&unit=${heatmapData.unit}`}
      >
        &nbsp;
      </Link>
    </div>
  );
}
