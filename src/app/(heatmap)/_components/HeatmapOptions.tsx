"use client";
import React, { Suspense, useEffect } from "react";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { useState, useRef } from "react";

import { deleteHeatmap, updateHeatmap } from "@/app/lib/actions";
import { useRouter } from "next/navigation";
import { DeleteHeatmapModal } from "./DeleteHeatmap";
import ModalWrapper from "@/app/components/ModalWrapper";
import { setDefaultAutoSelectFamily } from "net";
import { ColorPicker } from "@/app/components/ColorPicker";

export default function HeatmapOptions({
  heatmapID,
  name,
  color,
  setOptionsOpen,
}: {
  heatmapID: number;
  name: string;
  color: string;
  setOptionsOpen: (open: boolean) => void;
}) {
  //refs persist through renders
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [selectedColor, setColor] = useState<string>(`${color}`);

  const router = useRouter();

  const formSubmit = async (formData: FormData) => {
    
    
    //its a bunch of code bloat to parse null vals on serverside so just
    //gonna send original val if input not populated  
    formData.set("name", formData.get("name") || name);
    formData.set("color", formData.get("color") || color);

  
    const updateHeatmapWithID = updateHeatmap.bind(null, heatmapID);
    await updateHeatmapWithID(formData);
    

    router.refresh();
    setOptionsOpen(false);
  };


  return (
    <div className="p-5">
      <h1 className="text-3xl font-extrabold mb-3">Heatmap Settings: </h1>
      <hr />
      <form action={formSubmit} className="flex flex-col gap-3 mt-5">
        <div className="flex flex-col">
          <label className="font-semibold text-lg">Name:</label>
          <input
            className="text-4xl border-2 border-white"
            type="text"
            name="heatmapName"
            placeholder={`${name}`}
          />
        </div>
        <div className="flex flex-col">
          <label>Cell Color:</label>
          <ColorPicker selectedColor={selectedColor} setColor={setColor}/>
        </div>
        <hr />
       <button className="w-12 text-red-500" type="button" onClick={() => setDeleteModalOpen(true)}>
        Delete
       </button>
        <hr />
        <div className="flex right-10 bottom-10 gap-1 justify-end">
          <button className="p-2" onClick={() => setOptionsOpen(false)}>
            Close
          </button>
          <button type="submit" className="p-2 bg-black text-white rounded-sm">
            Submit
          </button>
        </div>
      </form>
      <ModalWrapper open={deleteModalOpen}>
        <DeleteHeatmapModal heatmapID={heatmapID} setOpen={setDeleteModalOpen} setOptionsOpen={setOptionsOpen} />
      </ModalWrapper>
    </div>
  );
}
