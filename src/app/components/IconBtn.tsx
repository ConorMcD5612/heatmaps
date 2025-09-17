import React from "react";
import FeatherIcon from "feather-icons-react";

export const IconBtn = ({
  disabled,
  iconName,
  text,
  onClickCallback,
}: {
  disabled: boolean;
  iconName: string;
  text: string;
  onClickCallback?: () => void;
}) => {
  return (
    <button
      className={`flex 
     w-1/2 
     rounded-sm 
     border 
     gap-1
     ${disabled && "opacity-50"}
     border-white/50
     bg-[#1a1a1a]  
     p-[4px] 
     place-items-center
     max-h-10
     whitespace-nowrap`}
     onClick={onClickCallback}
    >
      <FeatherIcon  size={16} icon={iconName} />
      <h5 className="text-sm">{text}</h5>
    </button>
  );
};
