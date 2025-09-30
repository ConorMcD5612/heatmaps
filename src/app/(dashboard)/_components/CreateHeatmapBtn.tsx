"use client";
import React from "react";
import FeatherIcon from "feather-icons-react";
import CreateHeatmap from "./CreateHeatmap";
import { useState } from "react";
import ModalWrapper from "@/app/components/ModalWrapper";
import { useSession } from "next-auth/react";


export default function CreateHeatmapBtn() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const {status} = useSession()

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
      <button disabled={status != "authenticated"} className="w-full">
        
      <div
         onClick={() => openModal()}
        className=" w-full mt-6  flex items-center justify-center gap-2"
        id="btn-gradient"
      >
        <FeatherIcon className="my-auto" size={20} icon="plus-circle" />
        <h4 className="my-auto text-sm">Add Heatmap</h4>
      </div>
      {/* div so I can move btn up a bit */}
      <div className="mt-5 h-1"></div>
      </button>
    </>
  );
}
