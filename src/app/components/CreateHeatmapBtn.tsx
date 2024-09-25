import React from 'react'
import FeatherIcon from 'feather-icons-react'
import CreateHeatmap from './CreateHeatmap'

export default function CreateHeatmapBtn() {
    


  return (
    <>
    <div className='border-2 opacity-50 border-black border-dashed flex gap-1 justify-center p-1'>
      
      <FeatherIcon className="my-auto" size={20} icon='plus-circle'/>

      <h4 className='my-auto'>Add Heatmap</h4>
    
    </div>
    <CreateHeatmap />
    </>
  )
}
