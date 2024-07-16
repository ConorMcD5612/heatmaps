import React from "react";
import LoginBtn from "../components/LoginBtn";
import Heatmap from "../components/Heatmap";


export default function Page() {
  return (
    <div className="flex flex-col">
      <div>
        <div className="flex p-[.5vw] shadow-[0px_1px_1px_-1px_rgba(0,0,0,1)]">
          <h1 className="text-xl font-extrabold  roundedxl w-3/4">heatmaps</h1>
          <div className="ml-auto">
          <LoginBtn />
          </div>
        </div>
      </div>
      <div className="h-max overflow-x-scroll pt-[1vw]">
      <Heatmap name="excercise"/>
      </div>
    </div>
  );
}
