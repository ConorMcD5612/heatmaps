"use client";
import React from "react";
import { colors } from "../lib/definitions";

//form needs to get "color"
export const ColorPicker = ({
  selectedColor,
  setColor,
}: {
  selectedColor: string;
  setColor: (val: string) => void;
}) => {
  const styles = {
    selected: "border-white",
    unselected: "border-white border-opacity-50",
  };

  return (
    <fieldset
      onChange={(e) => setColor((e.target as HTMLInputElement).value)}
      className={`grid w-40 grid-cols-3 grid-rows-2 gap-2 border border-black`}
    >
      {Object.values(colors).map((color, index) => (
        <input
          type="radio"
          value={color}
          key={index}
          name="color"
          checked={selectedColor === color}
          className={`h-10 w-10 appearance-none rounded-full border-2 ${
            selectedColor == color ? styles["selected"] : styles["unselected"]
          }`}
          style={{ backgroundColor: color }}
        ></input>
      ))}
    </fieldset>
  );
};
