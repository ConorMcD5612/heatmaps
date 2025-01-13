import React, { Suspense } from "react";
import LoginBtn from "../(dashboard)/_components/LoginBtn";
import HeatmapContainer from "../(dashboard)/_components/HeatmapContainer";
import Dialog from "../components/Dialog";

import Heatmap from "../(heatmap)/_components/Heatmap";
import UpdateCell from "../(cell)/_components/UpdateCell";
import HeatmapOptions from "../(heatmap)/_components/HeatmapOptions";
import CreateHeatmap from "../(dashboard)/_components/CreateHeatmap";

import { IoMdSettings } from "react-icons/io";

export default function Page() {
  async function onClose() {
    "use server";
    console.log("Modal has closed");
  }

  async function onSave() {
    "use server";
    console.log("Ok was clicked");
  }
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Dialog modalName="cellModal" onSave={onSave} onClose={onClose}>
          <UpdateCell />
        </Dialog>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Dialog modalName="optionsModal" onSave={onSave} onClose={onClose}>
          <HeatmapOptions />
        </Dialog>
      </Suspense>
      <div className="flex flex-col h-screen gap-1">
        <div className="h-[5%] ">
          <div className="flex shadow-[0px_1px_1px_-1px_rgba(0,0,0,1)]">
            <h1 className="text-3xl font-extrabold  roundedxl w-3/4">
              heatmaps
            </h1>
            <div className="flex border gap-1 border-black p-[4px] place-items-center rounded">
            <IoMdSettings size={16} />
              <h5 className="text-xs">Settings</h5>
            </div>
            <div className="ml-auto">
              <LoginBtn />
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[95%]">
          <HeatmapContainer />
        </div>
      </div>
    </>
  );
}
