"use client";
import React from "react";
import FeatherIcon from "feather-icons-react";
import CreateHeatmap from "./CreateHeatmap";
import { useState } from "react";
import ModalWrapper from "@/app/components/ModalWrapper";

export default function CreateHeatmapBtn() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const closeModal = (): void => {
    setModalOpen(false);
  };

  const openModal = (): void => {
    setModalOpen(true);
  };

  return (
    <>
      <ModalWrapper open={modalOpen}>
        <CreateHeatmap closeModal={closeModal} />
      </ModalWrapper>

      <div
        onClick={() => openModal()}
        className="border-2 opacity-50 border-black border-dashed flex gap-1 justify-center p-1"
      >
        <FeatherIcon className="my-auto" size={20} icon="plus-circle" />
        <h4 className="my-auto">Add Heatmap</h4>
      </div>
    </>
  );
}
