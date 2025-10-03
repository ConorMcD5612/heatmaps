"use client";
import React from "react";
import { createHeatmap } from "../../lib/actions";
import { useEffect, useState } from "react";
import { Switch } from "@/app/_common/Switch";
import { useRouter } from "next/navigation";
import { ColorPicker } from "@/app/_common/ColorPicker";
import { colors } from "../../lib/definitions";

export default function CreateHeatmap({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const router = useRouter();
  const [countSelected, setCountSelected] = useState<boolean>(false);
  const [inverseSelected, setInverseSelected] = useState<boolean>(false);
  const [selectedColor, setColor] = useState(colors["green"]);

  const opacityStyle = {
    selected: "opacity-100",
    unSelected: "opacity-50 pointer-events-none",
  };

  //color input val is hex no matter what
  const formSubmit = async (formData: FormData) => {
    formData.append("inverse", inverseSelected.toString());
    await createHeatmap(formData);
    router.refresh();
    closeModal();
  };

  //this is for graying out unit input untill count is selected
  const handleRadioSelect = (e: React.FormEvent<HTMLFieldSetElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.value == "Count") {
      setCountSelected(true);
    } else {
      setCountSelected(false);
    }
  };

  
  return (
    <div className="border-2 border-white">
      <h2 className="m-5 text-3xl font-bold">Add Heatmap:</h2>
      <form action={formSubmit} className="m-5 flex flex-col gap-5">
        <hr />
        <div className="flex flex-col">
          <label className="text-lg font-semibold">Name:</label>
          <input
            className="border-2 border-white text-4xl text-black"
            type="text"
            name="heatmapName"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold">Cell Color:</label>
          <ColorPicker selectedColor={selectedColor} setColor={setColor} />
        </div>
        <hr />
        <div className="text-lg font-semibold">Type of Heatmap: </div>
        <fieldset onChange={(e) => handleRadioSelect(e)} className="">
          <legend className="font-medium">Tracking:</legend>
          <div>
            <div className="text-base font-light">
              <input name="type" type="radio" value="Count" />
              <label className="ml-1">Count (Integer) </label>
            </div>

            <div className="text-base font-light">
              <input name="type" required type="radio" value="Time" />
              <label className="ml-1">Time (Hr, Mins)</label>
            </div>

            <div className="text-base font-light">
              <input name="type" required type="radio" value="Binary" />
              <label className="ml-1">Binary (0 or 1)</label>
            </div>
          </div>
        </fieldset>
        <div
          className={`flex flex-col ${opacityStyle[countSelected ? "selected" : "unSelected"]}`}
        >
          <label className="font-medium">Unit:</label>
          <input
            className="border-2 border-white text-lg text-black"
            type="text"
            name="unit"
            placeholder="E.g g/ml/times/sets"
          />
        </div>
        <div className="font-semibold">
          <label>Inverse Color:</label>
          <Switch selected={inverseSelected} setSelected={setInverseSelected} />
        </div>
        <hr />
        <div className="bottom-10 right-10 flex justify-end gap-1">
          <button className="p-2" onClick={closeModal}>
            Close
          </button>
          <button type="submit" className="rounded-sm bg-black p-2 text-white">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
