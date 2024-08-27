"use client";
import React from "react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function UpdateCell() {
  const searchParams = useSearchParams();
  const cellDate = searchParams.get("date");
  const [timeValue, setTimeValue] = useState({ hours: "00", mins: "00" });

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Regex to validate HH:MM format
    //[0-9][0-9]:[0-9][09]
    
    
      const [hours, mins] = value.split(":");
      setTimeValue({ hours, mins });
   
    
  };
  return (
    <>
      <div>
        <div>{cellDate}</div>
        <form>
          <label>Time :</label>


          <button></button>
        </form>
        <div>
          {hours}:{mins}
        </div>
        <button></button>
      </div>
    </>
  );
}
