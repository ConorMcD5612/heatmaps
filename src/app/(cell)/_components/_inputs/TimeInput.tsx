import React from "react";

export const TimeInput = ({ unit }: { unit: string }) => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col">
        <label className="h-5">Hrs</label>
        <input
          min="0"
          className="w-12 rounded-sm bg-gray-300 p-1"
          placeholder="00"
          name="hrs"
          type="number"
        />
      </div>

      <div className="flex flex-col">
        <label className="h-5">Mins</label>
        <input
          min="0"
          className="w-12 rounded-sm bg-gray-300 p-1"
          placeholder="00"
          name="mins"
          type="number"
        />
      </div>
    </div>
  );
};
