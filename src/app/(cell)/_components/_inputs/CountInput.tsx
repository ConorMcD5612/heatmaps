import { UnderlineInput } from "@/app/_common/UnderlineInput";
import React from "react";

export const CountInput = ({ unit, color }: { unit: string; color: string;}) => {
  return (
    <>
    <h2 className="text-xl font-semibold">Add {unit}:</h2>
    <div className="flex w-full justify-center">
      
      <UnderlineInput color={color} width={52} />
      
    </div>
    </>
  );
};
