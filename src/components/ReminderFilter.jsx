import React from 'react'

const ReminderFilter = ({selectedFilter, setSelectedFilter}) => {
    const handleChange = e => {
        setSelectedFilter(e.target.value);
    }

  return (
    <div className='filter-container'>
        <label>Show Items Due By Date: </label>
        <select value={selectedFilter} onChange={e => handleChange(e)}>
            <option value="2day">2 Days</option>
            <option value="1week">1 Week</option>
            <option value="30days">30 Days</option>
            <option value="all">any time</option>
        </select>
    </div>
  )
}

export default ReminderFilter