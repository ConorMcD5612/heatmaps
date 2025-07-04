import React from 'react'
import { BinaryInput } from "./inputs/BinaryInput";
import { CountInput } from "./inputs/CountInput";
import { TimeInput } from "./inputs/TimeInput"



// should put this in definitions 
export type InputType = 'Binary' | 'Count' | 'Time';


// 3) Build a map from InputType → component
const inputVariations: Record<InputType, React.FC<{unit: string}>> = {
  'Binary': BinaryInput,
  'Count':  CountInput,
  'Time':   TimeInput,
};

// 4) Type your renderer’s props
interface InputRendererProps {
  type: InputType;
  unit: string;
}


// 5) Pull out the right component and render it
export const InputRenderer: React.FC<InputRendererProps> = ({ type, unit }) => {
  const InputComponent = inputVariations[type];
  return <InputComponent unit={unit} />;
};