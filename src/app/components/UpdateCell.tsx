"use client";
import React from "react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function UpdateCell() {
  const searchParams = useSearchParams();
  const cellDate = searchParams.get("date");
  
  //dont think using state makes sense
  //dispatch from using save after done, it closes on save
  

  return (
    <>
      <div>
        <div>{cellDate}</div>
        <form action={}>
          
         
          <input type="number"></input>
          Hrs
          <input type="number"></input>
          Mins
        
          <button></button>
        </form>
        <div>
        
        </div>
        <button className="bg-black text-white">Save</button>
      </div>
    </>
  );
}
