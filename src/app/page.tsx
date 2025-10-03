import React, { Suspense } from "react";
import LoginBtn from "./(dashboard)/_components/LoginBtn";
import HeatmapContainer from "./(dashboard)/_components/HeatmapContainer";
import FeatherIcon from "feather-icons-react";
import { IconBtn } from "./_common/IconBtn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heatmaps",
  description: "Heatmap habit tracking app",
  icons: {
    icon: [
      { url: "../favicon.ico" },
      { url: "../favicon-16x16.png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
};

export default function Page() {
  return (
    <>
      <div className="flex h-screen flex-col gap-1">
        <div className="h-[5%]">
          <div className="flex shadow-[0px_1px_1px_-1px_rgba(0,0,0,1)]">
            <h1 className="roundedxl w-3/4 text-3xl font-extrabold">
              heatmaps
            </h1>
            <div className="flex w-1/4 gap-1">
              <IconBtn disabled={true} iconName="settings" text="Settings" />
              {/* Rename this to LoginBtns*/}
              <LoginBtn />
            </div>
          </div>
        </div>
        <hr className="opacity-50"></hr>
        <div className="flex h-[95%] flex-col">
          <HeatmapContainer />
        </div>
      </div>
    </>
  );
}
