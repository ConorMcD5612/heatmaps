"use client"
import { CellData, CellDataParsed, CellStats, HeatmapData, HeatmapParsed } from "@/app/lib/definitions";
import React, {useState} from "react";
import CellPopUp from "./CellPopUp";
import Link from "next/link";
import CellColor from "./CellColor";
import UpdateCell from "./UpdateCell";
import ModalWrapper from "@/app/components/ModalWrapper";

export default function Cell({
  cellData,
  cellStats,
  heatmapData,
}: {
  cellData: CellData;
  cellStats: CellStats;
  heatmapData: HeatmapParsed;
}) {
  const [open, setModalOpen] = useState(false)

  
  const onClose = () => {

  }

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
    <ModalWrapper onClose={onClose} open={open}>
      <UpdateCell heatmapData={heatmapData} cellData={cellData}/>
    </ModalWrapper>
    </div>
  );
}
