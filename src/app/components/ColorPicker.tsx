"use client";
import React from "react";


//form needs to get "color"
export const ColorPicker = ({
  selectedColor,
  setColor,
}: {
  selectedColor: string;
  setColor: (val: string) => void;
}) => {
  const colors = {
    pink: "#FF4F9A",
    green: "#39FF14",
    blue: "#00FFFF",
    yellow: "#FFFF33",
    purple: "#9D00FF",
    orange: "#FFA500",
  };

  const styles = {
    selected: "border-white",
    unselected: "border-white border-opacity-50",
  };

  //selected when selectedColor is  == color
  return (
    <fieldset
      onChange={(e) => setColor((e.target as HTMLInputElement).value)}
      className={`grid grid-rows-3
       grid-cols-3 gap-2
        border border-black
        w-40`}
        
    >
      {Object.values(colors).map((color, index) => (
        <input
          type="radio"
          value={color}
          key={index}
          name="color"
          checked={selectedColor === color}
          className={`rounded-full w-10 h-10 appearance-none border-2 ${
            selectedColor == color ? styles["selected"] : styles["unselected"]
          }`}
          style={{ backgroundColor: color }}
        ></input>
      ))}
    </fieldset>
  );
};
