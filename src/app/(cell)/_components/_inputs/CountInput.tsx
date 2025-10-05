import React from "react";

export const CountInput = ({ unit, color }: { unit: string; color: string;}) => {
  return (
    <div className="flex w-full justify-center">
      <input
        min="0"
        className={`text-8xl w-48 text-center underline caret-transparent decoration-[3px] rounded-sm bg-gray-300 p-1 border-none bg-inherit focus:outline-none outline-none hover:decoration-[var(--dec)] focus:decoration-[var(--dec)] underline-offset-[10px]`}
        style={{ '--dec': color } as React.CSSProperties }
        placeholder="0"
        name="mins"
        type="number"
      />
      
    </div>
  );
};
