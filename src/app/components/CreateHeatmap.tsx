"use client";
import React from "react";
import { createHeatmap } from "../lib/actions";

export default function CreateHeatmap({
  closeModal,
}: {
  closeModal: () => void;
}) {
  //color input val is hex no matter what
  const formSubmit = (formData: FormData): void => {
    createHeatmap(formData)
    closeModal()
  }

  return (
    <div className="border-2 border-black text-lg">
      <form action={formSubmit} className="flex items-center m-5 gap-4">
        <input
          className="text-4xl focus:outline-none focus:border-b-2 focus:border-black w-6/12 h-1/4 "
          type="text"
          name="heatmapName"
          placeholder="Heatmap name?"
        />
        <div className="flex flex-col w-2/12 self-start h-full">
          <label>Cell Color:</label>
          <input className="w-full h-12" name="color" type="color" />
        </div>
        <fieldset className="w-3/12 self-start">
          <legend>Measure:</legend>
          <div>
            <div className="font-light text-base">
              <input name="type" type="radio" value="Count" />
              <label className="ml-1">Count (Interger) </label>
            </div>

            <div className="font-light text-base">
              <input name="type" type="radio" value="Time" />
              <label className="ml-1">Time (Hr, Mins)</label>
            </div>
          </div>
        </fieldset>
        <input
          className="w-2/12 bg-gray-200 hover:cursor-grab"
          type="submit"
          value="Save"
        />
      </form>
    </div>
  );
}
