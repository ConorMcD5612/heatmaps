"use client";
import React, { Suspense, useEffect } from "react";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { useState, useRef } from "react";

import { deleteHeatmap, updateHeatmap } from "@/app/lib/actions";

export default function HeatmapOptions() {
  //I think form seperate component? Maybe both would make sense
  const searchParams = useSearchParams();
  const heatmapID = Number(searchParams.get("heatmapID"));
  const name = searchParams.get("name");
  const colorParam = searchParams.get("color");

  //refs persist through renders
  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [color, setColor] = useState<string>(`${colorParam}`);

  const updateHeatmapWithID = updateHeatmap.bind(null, heatmapID);

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

  return (
    <div className="p-5">
      <h1 className="text-4xl text-center mb-1">Heatmap Options</h1>
      <div className="h-[1px] bg-black"></div>
      <form action={updateHeatmapWithID} className="flex flex-col gap-3 mt-5">
        <div className="flex flex-col">
          <label className="font-light">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className=""
            placeholder={`${name}`}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-light" htmlFor="color">Color:</label>
          <input
            type="color"
            name="color"
            value={color}
            onChange={(e) => handleColorChange(e.target.value)}
          />
        </div>
        <p className="mb-5">
          <button
            onDoubleClick={() => deleteHeatmap(heatmapID)}
            className="text-red-600"
          >
            Delete
          </button>{" "}
          this heatmap.
        </p>

        <input
          placeholder="save"
          type="submit"
          className="bg-black text-white hover:cursor-grab p-1"
        />
      </form>
      <Link className="absolute top-0 right-0 p-1" href="/dashboard">
          <IoMdClose size={18} />
        </Link>
    </div>
  );
}
