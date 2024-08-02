"use client";
import { Sawarabi_Gothic } from "next/font/google";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";


//I want the monday date of the created week 

const calculateWeek = (index: number, startDate: number) => {
  // epoch to javascript 
  const startDateJS = new Date(startDate * 1000) ;
  //start week on monday 
  const daysFromMonday = startDateJS.getDay()

  //calculate days (index is multiple of 8)
  const days = (Math.floor(index / 8) * 7) - daysFromMonday
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
