"use client";
import React from "react";
import { createHeatmap } from "../../lib/actions";
import { useEffect, useState } from "react";
import { Switch } from "@/app/components/Switch";

export default function CreateHeatmap({
  closeModal,
}: {
  closeModal: () => void;
}) {

  const [countSelected, setCountSelected] = useState<boolean>(false)
  const [inverseSelected, setInverseSelected] = useState<boolean>(false)

  //color input val is hex no matter what
  const formSubmit = (formData: FormData): void => {
    formData.append("inverse", inverseSelected.toString())
    createHeatmap(formData);
    closeModal();
  };

  //this is for graying out unit input untill count is selected
  const handleRadioSelect = (e: React.FormEvent<HTMLFieldSetElement>) => {
    const target = e.target as HTMLInputElement
    if(target.value == "Count") {
      setCountSelected(true)
    } else {
      setCountSelected(false)
    }
  }

  const opacityStyle = {
    selected: "opacity-100",
    unSelected: "opacity-50 pointer-events-none"
  }

  return (
    
    <div className="border-2 border-black">
      <h2 className="text-3xl font-bold m-5">Add Heatmap:</h2>
      <form action={formSubmit} className="flex flex-col m-5 gap-4">
        <hr />
        <div className="flex flex-col">
          <label className="font-semibold text-lg">Name:</label>
          <input
            className="text-4xl border-2 border-black"
            type="text"
            name="heatmapName"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-lg">Cell Color:</label>
          <input className="w-full h-12" name="color" type="color" />
        </div>
        <hr />
        <div className="font-semibold text-lg">Type of Heatmap: </div>
        <fieldset onChange={(e) => handleRadioSelect(e)} className="">
          <legend className="font-medium">Tracking:</legend>
          <div>
            <div className="font-light text-base">
              <input name="type" type="radio" value="Count"  />
              <label className="ml-1">Count (Interger) </label>
            </div>

            <div className="font-light text-base">
              <input name="type" required type="radio" value="Time" />
              <label className="ml-1">Time (Hr, Mins)</label>
            </div>
          </div>
        </fieldset>
        <div className={`flex flex-col ${opacityStyle[countSelected ? "selected" : "unSelected"]}`}>
          <label className="font-medium">Unit:</label>
          <input
            className="text-lg border-2 border-black"
            type="text"
            name="unit"
            placeholder="E.g g/ml/times/sets"
          />
        </div>
        <div className="font-semibold">
          <label>Inverse Color:</label>
          <Switch selected={inverseSelected} setSelected={setInverseSelected}/>
        </div>
        <hr />
        <div className="flex right-10 bottom-10 gap-1 justify-end">
          <button className="p-2" onClick={closeModal}>Close</button>
           <button type="submit" className="p-2 bg-black text-white rounded-sm">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
