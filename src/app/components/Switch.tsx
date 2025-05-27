"use client"
import React, { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'

export const Switch = ({selected, setSelected} : {
    selected: boolean;
    setSelected: Dispatch<SetStateAction<boolean>>;
}) => {

  const sliderStyles = {
    "selected": "bg-green-500 justify-end",
    "unSelected": "bg-gray-500 justify-start" 
  }


  return (
    <div onClick={() =>  setSelected(!selected)} className={`flex items-center cursor-grab rounded-full w-16 h-8
    ${selected ? sliderStyles["selected"] : sliderStyles["unSelected"]}`}>
    {/* oval */}
   
    <div className='rounded-full w-7 h-7 bg-white'>

    </div>
    </div>
  )
}
