"use client";
import React, { useEffect } from "react";

import { deleteHeatmap } from "../lib/actions";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { updateHeatmap } from "../lib/actions";
import { useState, useRef } from "react";

export default function HeatmapOptions() {
  //I think form seperate component? Maybe both would make sense
  const searchParams = useSearchParams();
  const heatmapID = Number(searchParams.get("heatmapID"));
  const name = searchParams.get("name")
  const colorParam = searchParams.get("color")

  //refs persist through renders 
  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [color, setColor] = useState<string>(`${colorParam}`)

  const updateHeatmapWithID = updateHeatmap.bind(heatmapID)

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
    <div className="w-[25vw] h-[40vh] p-5">
      <h1 className="text-4xl text-center mb-1">Heatmap Options</h1>
      <div className="h-[1px] bg-black"></div>
      <form className="flex flex-col gap-3 mt-5">
        <div className="flex flex-col">
          <label>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className=""
            placeholder={`${name}`}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="color">Color:</label>
          <input type="color" value={color} onChange={(e) => handleColorChange(e.target.value)}/>
        </div>
        <p> 
        <button
          onClick={() => deleteHeatmap(heatmapID)}
          className="text-red-600"
        >
          Delete
        </button>{" "}
        this heatmap 
      </p>
      </form>
    
      <div className="flex gap-2 absolute right-5 bottom-0">
        <Link className="p-1 bg-gray-200 border border-black" href="/dashboard">Close</Link>
        <input name="save" placeholder="save" type="submit" className=" bg-black text-white hover:cursor-grab p-1" />
      </div>
    </div>
  );
}
