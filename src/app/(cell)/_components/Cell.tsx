"use client"
import { CellData, CellDataParsed, CellStats, HeatmapData, HeatmapParsed } from "@/app/lib/definitions";
import React, {useState, useEffect} from "react";
import CellPopUp from "./CellPopUp";
import Link from "next/link";
import CellColor from "./CellColor";
import UpdateCell from "./UpdateCell";
import ModalWrapper from "@/app/components/ModalWrapper";
import { calculateOpacity } from "@/app/lib/utils";

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

  useEffect(() => {
  console.log("Modal open state:", open);
}, [open]);


  const onClose = () => {
     setModalOpen(false);
  }

  const needsBorder = calculateOpacity(cellData.time_mins, cellStats.mean, cellStats.std_dev, heatmapData.inverse)

  return (
    <div className={`${needsBorder ? "border-[1px] border-white border-opacity-30" : "border-[1px] border-[#1a1a1a]" } bg-[#1a1a1a] w-[85%] h-[85%] group/item relative`}
    >
      {/*need this so we can close modal in updateCell (can't be on parent div) */}
      <button onClick={() => setModalOpen(true)} className="absolute inset-0 z-10 cursor-pointer bg-transparent p-0 m-0 border-0"></button>

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
        type={heatmapData.type}
        unit={heatmapData.unit}
      />
   
    <ModalWrapper open={open}>
      <UpdateCell setModalOpen={setModalOpen} heatmapData={heatmapData} cellData={cellData}/>
    </ModalWrapper>
    </div>
  );
}
