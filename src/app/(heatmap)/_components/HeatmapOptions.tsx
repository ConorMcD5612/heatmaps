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
  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [selectedColor, setColor] = useState<string>(`${color}`);

  const router = useRouter();

  const formSubmit = async (formData: FormData) => {
    
    const formName = formData.get("heatmapName");
    const formColor = formData.get("color");

    if (formName || formColor != color) {
      const updateHeatmapWithID = updateHeatmap.bind(null, heatmapID);
      await updateHeatmapWithID(formData);
    }

    router.refresh();
    setOptionsOpen(false);
  };

  //debouncing triggering 200ms timeOut (setting color) every time onChange fires (clears the previous one so state isn't set)
  //so once user done dragging // 200ms goes by and color is set
  const handleColorChange = (newColor: string) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      setColor(newColor);
    }, 200);
  };

  //if its form why would you need to debounce? other form deosn't do this

  return (
    <div className="p-5">
      <h1 className="text-3xl font-extrabold mb-3">Heatmap Settings: </h1>
      <hr />
      <form action={formSubmit} className="flex flex-col gap-3 mt-5">
        <div className="flex flex-col">
          <label className="font-semibold text-lg">Name:</label>
          <input
            className="text-4xl border-2 border-black"
            type="text"
            name="heatmapName"
            placeholder={`${name}`}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-lg">Cell Color:</label>
          <input
            defaultValue={color}
            onChange={(e) => handleColorChange(e.target.value)}
            className="w-full h-12"
            name="color"
            type="color"
          />
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
