"use client";
import { useState, useRef } from "react";
import { updateHeatmap } from "@/app/lib/actions";
import { useRouter } from "next/navigation";
import { DeleteHeatmapModal } from "./DeleteHeatmap";
import ModalWrapper from "@/app/_common/ModalWrapper";
import { ColorPicker } from "@/app/_common/ColorPicker";

export default function HeatmapOptions({
  heatmapID,
  name,
  color,
  setOptionsOpen,
}: {
  heatmapID: number;
  name: string;
  color: string;
  setOptionsOpen: (open: boolean) => void;
}) {
  //refs persist through renders
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedColor, setColor] = useState<string>(`${color}`);
  const router = useRouter();

  const formSubmit = async (formData: FormData) => {
    //its a bunch of code bloat to parse null vals on serverside so just
    //gonna send original val if input not populated
    formData.set("name", formData.get("name") || name);
    formData.set("color", formData.get("color") || color);

    const updateHeatmapWithID = updateHeatmap.bind(null, heatmapID);
    await updateHeatmapWithID(formData);

    router.refresh();
    setOptionsOpen(false);
  };

  return (
    <>
      <form
        action={formSubmit}
        className="flex flex-col gap-5 border border-white border-opacity-50 p-5 rounded-sm"
      >
        <h1 className="text-3xl font-extrabold">Heatmap Settings: </h1>

        <div className="flex flex-col">
          <label className="text-lg font-semibold">Name:</label>
          <input
            className="border-2 border-white text-4xl text-black"
            type="text"
            name="heatmapName"
            placeholder={`${name}`}
          />
        </div>

        <div className="flex flex-col">
          <label>Cell Color:</label>
          <ColorPicker selectedColor={selectedColor} setColor={setColor} />
        </div>

        <hr className="mt-6 border-white/20" />
        <div className="flex items-center justify-between ">
          <button
            className="justify-self-start opacity-70 rounded border border-red-500 px-4 py-2 text-red-500 hover:text-red-400 hover:opacity-100"
            type="button"
            onClick={() => setDeleteModalOpen(true)}
          >
            Delete
          </button>
          <div className="flex gap-3">
            <button className="px-3 py-2" onClick={() => setOptionsOpen(false)}>
              Close
            </button>
            <button
              type="submit"
              style={{borderColor: color}}
              className={`rounded-sm border px-3 py-2 `}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <ModalWrapper open={deleteModalOpen}>
        <DeleteHeatmapModal
          heatmapID={heatmapID}
          setOpen={setDeleteModalOpen}
          setOptionsOpen={setOptionsOpen}
        />
      </ModalWrapper>
    </>
  );
}
