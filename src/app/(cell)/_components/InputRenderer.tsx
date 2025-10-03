import React from "react";
import { BinaryInput } from "./_inputs/BinaryInput";
import { CountInput } from "./_inputs/CountInput";
import { TimeInput } from "./_inputs/TimeInput";
import { HeatmapType } from "@/app/lib/definitions";

const inputVariations: Record<HeatmapType, React.FC<{ unit: string }>> = {
  Binary: BinaryInput,
  Count: CountInput,
  Time: TimeInput,
};

interface InputRendererProps {
  type: HeatmapType;
  unit: string;
}

export const InputRenderer: React.FC<InputRendererProps> = ({ type, unit }) => {
  const InputComponent = inputVariations[type];
  return <InputComponent unit={unit} />;
};
