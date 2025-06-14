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
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  //make this closable from here. 
  //everything has a submit button, so we can just make it here?
  //no because it need sto be in the form 
  return (
    <dialog
      ref={dialogRef}
      className="rounded-md shadow-xl p-4"
      onClose={onClose}
    >
      {children}
     
    </dialog>
  );
}
