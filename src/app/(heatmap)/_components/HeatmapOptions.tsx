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

     <>
      <form action={formSubmit} className="flex flex-col p-5 gap-5 border border-white">
         <h1 className="text-3xl font-extrabold">Heatmap Settings: </h1>

        <div className="flex flex-col">
          <label className="font-semibold text-lg">Name:</label>
          <input
            className="text-4xl border-2 border-white text-black"
            type="text"
            name="heatmapName"
            placeholder={`${name}`}
          />
        </div>
  
        <div className="flex flex-col">
          <label>Cell Color:</label>
          <ColorPicker selectedColor={selectedColor} setColor={setColor}/>
        </div>

        <hr className="border-white/20 mt-6" />
        <div className="flex justify-between items-center py-3">
        
        <button className="px-4 py-2 justify-self-start rounded text-red-500 hover:text-red-400 border border-red-500" type="button" onClick={() => setDeleteModalOpen(true)}>
        Delete 
       </button>
       <div className="flex gap-3">
    
          <button className="px-4 py-2" onClick={() => setOptionsOpen(false)}>
            Close
          </button>
          <button type="submit" style={{backgroundColor: color}} className={`px-4 py-2 rounded-sm text-black border border-light-black`}>
            Submit
          </button>
        </div>
            
       </div>
      </form>
      <ModalWrapper open={deleteModalOpen}>
        <DeleteHeatmapModal heatmapID={heatmapID} setOpen={setDeleteModalOpen} setOptionsOpen={setOptionsOpen} />
      </ModalWrapper>
    </>
  );
}
