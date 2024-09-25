import React from 'react'

export default function CreateHeatmap() {
  //color input val is hex no matter what 
  return (
    <div className='border-2 border-black'>
      <form>
        <input type="text" name="name" placeholder='Heatmap name?'/>
        Cell Color: <input name="color" type="color" />
        
        <div>
          <legend>Select Measurement:</legend>
          <input  type="radio"/>
          <label>Count</label>

          <input type="radio"/>
          <label>Time</label>
          
        </div>

        <button>Close</button>
        <button>Save</button>
        
      </form>
    </div>
  )
}
