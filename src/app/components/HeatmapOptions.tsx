import React from 'react'

export default function HeatmapOptions() {
  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" name="name" />
        <label for="name">Color</label>
        <input type="color" />
      </form>
      <button>Delete</button>
      <div className='absolute right-0'>
      <button>Close</button>
      <input name="save" placeholder='save' type="submit"/>
      </div>
    </div>
  )
}
