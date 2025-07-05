import React from 'react'

export const BinaryInput = ({unit}: {unit: string}) => {
  return (
   
    <div>
    {/* has to be either 0 or 1*/}
     <input
           
              className="w-12 bg-gray-300 rounded-sm p-1"
              value={1}
              name="mins"
              type="checkbox"
            />

    </div>
  )
}
