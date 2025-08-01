"use client";
//all this component does is wrap modal content in a dialog
//NOTE: maybe change this to not use dialog? 
import React, { useRef, useEffect } from "react";

type Props = {
  children: React.ReactNode;
  open: boolean;
};

export default function ModalWrapper({ open, children }: Props) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        className="rounded-md shadow-xl bg-black "
      >
        {children}
      </div>
    </div>
  );
}
