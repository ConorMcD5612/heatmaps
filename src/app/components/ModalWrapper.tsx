"use client";
//all this component does is wrap modal content in a dialog
//NOTE: maybe change this to not use dialog? 
import React, { useRef, useEffect } from "react";

type Props = {
  onClose: () => void;
  children: React.ReactNode;
  open: boolean;
};

export default function ModalWrapper({ onClose, open, children }: Props) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        className="bg-white rounded-md shadow-xl "
      >
        {children}
      </div>
    </div>
  );
}
