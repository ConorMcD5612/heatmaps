"use client";
import ModalWrapper from "@/app/_common/ModalWrapper";
import React, { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import HeatmapOptions from "./HeatmapOptions";
import { HeatmapParsed } from "@/app/lib/definitions";

export const OptionsBtn = ({ heatmapData }: { heatmapData: HeatmapParsed }) => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  return (
    <>
      <IoSettingsSharp
        onClick={() => setOptionsOpen(true)}
        size="16"
        stroke="black"
      />
      <ModalWrapper open={optionsOpen}>
        <HeatmapOptions
          heatmapID={heatmapData.heatmap_id}
          name={heatmapData.heatmap_name}
          color={heatmapData.color}
          setOptionsOpen={setOptionsOpen}
        />
      </ModalWrapper>
    </>
  );
};
