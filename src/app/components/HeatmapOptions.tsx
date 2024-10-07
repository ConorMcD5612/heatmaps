import React from 'react'

export default function HeatmapOptions() {
  return (
    <div className='w-[30vw] h-[50vh] p-5'>
      <form className='flex flex-col'>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor='color'>Color:</label>
        <input type="color" />
      </form>
      <button className='text-white bg-red-600'>Delete</button>
      <div className='flex gap-1 absolute right-5 bottom-0'>
      <button>Close</button>
      <input name="save" placeholder='save' type="submit"/>
      </div>
    </div>
  )
}
