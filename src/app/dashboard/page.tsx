import React from "react";
import LoginBtn from "../components/LoginBtn";
import Heatmap from "../components/Heatmap";
import HeatmapContainer from "../components/HeatmapContainer";


export default function Page() {
  return (
    <div className="flex flex-col h-screen gap-1">
      <div className="h-[5%] ">
        <div className="flex shadow-[0px_1px_1px_-1px_rgba(0,0,0,1)]">
          <h1 className="text-3xl font-extrabold  roundedxl w-3/4">heatmaps</h1>
          <div className="ml-auto">
          <LoginBtn />
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[95%]">
      <HeatmapContainer />
      </div>
    </div>
  );
}
