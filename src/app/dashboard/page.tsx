import React from "react";
import FeatherIcon from "feather-icons-react";


export default function Page() {
  return (
    <div>
      {/*Header = login  */}
      <div className="">

      
      <div className="flex p-[.5vw] shadow-[0px_1px_1px_-1px_rgba(0,0,0,1)]">
        <h1 className="text-xl font-extrabold  roundedxl w-3/4">heatmaps</h1>
        <div className="">

       
        <button className=" justify-self-end "><FeatherIcon icon="log-in"/></button>
        </div>
      </div>
    </div>
    </div>
  );
}
