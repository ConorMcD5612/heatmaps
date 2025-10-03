import React from "react";

export const CountInput = ({ unit }: { unit: string }) => {
  return (
    <div className="flex">
      <input
        min="0"
        className="w-12 rounded-sm bg-gray-300 p-1"
        placeholder="00"
        name="mins"
        type="number"
      />
      <label className="flex">{unit}</label>
    </div>
  );
};
