import React, { Suspense } from "react";
import LoginBtn from "../(dashboard)/_components/LoginBtn";
import HeatmapContainer from "../(dashboard)/_components/HeatmapContainer";
import FeatherIcon from "feather-icons-react";
import { IconBtn } from "../components/IconBtn";

export default function Page() {
  return (
    <>
      <div className="flex flex-col h-screen gap-1 ">
        <div className="h-[5%] ">
          <div className="flex shadow-[0px_1px_1px_-1px_rgba(0,0,0,1)]">
            <h1 className="text-3xl font-extrabold roundedxl w-3/4">
              heatmaps
            </h1>
            <div className="flex gap-1 w-1/4">
              <IconBtn disabled={true} iconName="settings" text="Settings" />
              {/* Rename this to LoginBtns*/}
              <LoginBtn />
            </div>
          </div>
        </div>
        <hr className="opacity-50"></hr>
        <div className="flex flex-col h-[95%]">
          <HeatmapContainer />
        </div>
      </div>
    </>
  );
}
