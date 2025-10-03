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
      className={`flex w-1/2 gap-1 rounded-sm border ${disabled && "opacity-50"} max-h-10 place-items-center whitespace-nowrap border-white/50 bg-[#1a1a1a] p-[4px]`}
      onClick={onClickCallback}
    >
      <FeatherIcon size={16} icon={iconName} />
      <h5 className="text-sm">{text}</h5>
    </button>
  );
};
