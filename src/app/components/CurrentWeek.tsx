"use client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const calculateWeek = (index: number, startDate: number) => {
  // epoch to javascript 
  const startDateJS = new Date(startDate * 1000);

  //calculate days (index is multiple of 8)
  const days = Math.floor(index / 8) * 7
  const weekDate = new Date(startDateJS.getTime() + days * 24 * 60 * 60 * 1000);

  return `${weekDate.getMonth() + 1}/${weekDate.getDate() + 1}`;
};
//startDate is epoch time should name it better
//only renders when % 8 element 8 16 24
export default function CurrentWeek({
  index,
  startDate,
}: {
  index: number;
  startDate: number;
}) {
  const [week, setWeek] = useState("");
 
  useEffect(() => {
    setWeek(calculateWeek(index, startDate));
  }, [index]);

  return <div className="col-span-3 m-auto">{week}</div>;
}
