"use client";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useState } from "react";

export const Switch = ({
  selected,
  setSelected,
}: {
  selected: boolean;
  setSelected: Dispatch<SetStateAction<boolean>>;
}) => {
  const sliderStyles = {
    selected: "bg-green-500 justify-end",
    unSelected: "bg-gray-500 justify-start",
  };

  return (
    <div
      onClick={() => setSelected(!selected)}
      className={`flex h-8 w-16 cursor-grab items-center rounded-full border-2 border-white ${selected ? sliderStyles["selected"] : sliderStyles["unSelected"]}`}
    >
      {/* oval */}

      <div className="h-7 w-7 rounded-full bg-white"></div>
    </div>
  );
};
