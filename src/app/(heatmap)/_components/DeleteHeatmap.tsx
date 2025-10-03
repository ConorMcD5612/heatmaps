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
    setOptionsOpen(false);
  };

  return (
    <form className="w-full p-5" action={formSubmit}>
      <p>
        Are you sure you want to{" "}
        <span className="font-semibold">PERMANENTLY</span> delete this
        heatmap?{" "}
      </p>
      <hr className="m-2" />
      <div className="bottom-10 right-10 flex justify-end gap-1">
        <button className="p-1" onClick={() => setOpen(false)} type="button">
          Close
        </button>
        <button type="submit" className="rounded-sm bg-red-500 p-1 text-white">
          Delete
        </button>
      </div>
    </form>
  );
};
