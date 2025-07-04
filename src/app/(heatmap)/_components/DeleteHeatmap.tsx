import React from "react";
import { deleteHeatmap } from "@/app/lib/actions";
import { useRouter } from "next/navigation";

export const DeleteHeatmapModal = ({
  heatmapID,
  setOpen,
  setOptionsOpen,
}: {
  heatmapID: number;
  setOpen: (modalOpen: boolean) => void;
  setOptionsOpen: (modalOpen: boolean) => void;
}) => {
  const router = useRouter();

  const formSubmit = async () => {
    await deleteHeatmap(heatmapID);

    router.refresh();
    //closing options modal will close both 
    setOptionsOpen(false)
  };

  return (
    <form className="w-full p-5" action={formSubmit}>
      <p>Are you sure you want to <span className="font-semibold">PERMANENTLY</span> delete this heatmap? </p>
      <hr className="m-2" />
      <div className="flex right-10 bottom-10 gap-1 justify-end">
        <button className="p-1" onClick={() => setOpen(false)}type="button">Close</button>
        <button type="submit" className="bg-red-500 text-white rounded-sm p-1">
          Delete
        </button>
      </div>
    </form>
  );
};
