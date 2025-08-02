"use client";
import React from "react";
import FeatherIcon from "feather-icons-react";
import CreateHeatmap from "./CreateHeatmap";
import { useState } from "react";
import ModalWrapper from "@/app/components/ModalWrapper";
import { colors } from "@/app/lib/definitions";

export default function CreateHeatmapBtn() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const closeModal = (): void => {
    setModalOpen(false);
  };

  const openModal = (): void => {
    setModalOpen(true);
  };

  const createGradient = (): void => {

  }

  return (
    <>
      <ModalWrapper open={modalOpen}>
        <CreateHeatmap closeModal={closeModal} />
      </ModalWrapper>

      <div
        onClick={() => openModal()}
        className=" w-full mt-6 flex items-center justify-center gap-2 rounded-lg border-2 b [border-image:linear-gradient(#4d9f0c,_#9198e5,_#4d9f0c_20px)_60]  bg-black/20 py-4 text-lg text-gray-300 hover:border-cyan-400 hover:text-white hover:bg-cyan-400/10 transition-all duration-150"
      >
        <FeatherIcon className="my-auto" size={20} icon="plus-circle" />
        <h4 className="my-auto">Add Heatmap</h4>
      </div>
    </>
  );
}
