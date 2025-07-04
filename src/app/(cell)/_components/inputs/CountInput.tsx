import React from 'react'

export const CountInput = ({unit}: {unit: string}) => {
  return (
     <div className="flex items-end">
            <input
              min="0"
              className="w-12 bg-gray-300 rounded-sm p-1"
              placeholder="00"
              name="mins"
              type="number"
            />
            <label className="">{unit}</label>
    </div>
  )
}
    