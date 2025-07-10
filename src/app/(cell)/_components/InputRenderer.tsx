import React from 'react'
import { BinaryInput } from "./inputs/BinaryInput";
import { CountInput } from "./inputs/CountInput";
import { TimeInput } from "./inputs/TimeInput"
import { HeatmapType } from '@/app/lib/definitions';




const inputVariations: Record<HeatmapType, React.FC<{unit: string}>> = {
  'Binary': BinaryInput,
  'Count':  CountInput,
  'Time':   TimeInput,
};


interface InputRendererProps {
  type: HeatmapType;
  unit: string;
}


export const InputRenderer: React.FC<InputRendererProps> = ({ type, unit }) => {
  const InputComponent = inputVariations[type];
  return <InputComponent unit={unit} />;
};