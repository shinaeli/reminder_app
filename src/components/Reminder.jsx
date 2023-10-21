import React from 'react'
import PropTypes from 'prop-types'

const Reminder = ({reminderText, id, isCompleted, dueDate, handleCompleted}) => {

  return (
    <div className='reminder-container'>
        <p className='task'>{reminderText}</p>
        <p className='due-date'>{dueDate}</p>
        <input type="checkbox" checked={isCompleted} onChange={() => handleCompleted(!isCompleted, id)} />
    </div>
  )
}

Reminder.propTypes = {
    reminderText: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
}

Reminder.defaultProps = {
    reminderText: "Read Books",
}

export default Reminder