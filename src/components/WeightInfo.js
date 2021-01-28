import React from 'react'

function WeightInfo(props) {
  return (
    <div className="date-picker">
      <div className="date-input">
        <label>Enter the start date  </label>
        <input
          type="date"
          name="start-date"
        />
      </div>
      <div className="date-input">
        <label>Enter the end date  </label>
        <input
          type="date"
          name="end-date"
        />
      </div>
    </div>
  )
}

export default WeightInfo
