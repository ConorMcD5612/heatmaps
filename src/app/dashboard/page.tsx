import React, { Suspense } from "react";
import LoginBtn from "../(dashboard)/_components/LoginBtn";
import HeatmapContainer from "../(dashboard)/_components/HeatmapContainer";
import FeatherIcon from "feather-icons-react";


export default function Page() {
  return (
    <>
      <div className="flex flex-col h-screen gap-1 ">
        <div className="h-[5%] ">
          <div className="flex shadow-[0px_1px_1px_-1px_rgba(0,0,0,1)]">
            <h1 className="text-3xl font-extrabold  roundedxl w-3/4">
              heatmaps
            </h1>
            <div className="flex gap-1">
              <button className="flex border gap-1 border-white p-[4px] place-items-center rounded">
                <h5 className="text-xs">Settings</h5>
                <FeatherIcon size={16} icon="settings" />
              </button>
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
