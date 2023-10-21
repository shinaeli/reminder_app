import React from 'react'
import Reminder from './Reminder'
import PropTypes from 'prop-types'

const RemindersList = ({filteredItems, handleCompleted}) => {
  return (
    <div>
        {filteredItems.map(reminder => {
            const {reminderText, id, dueDate, isCompleted} = reminder;
            return <Reminder key={id} 
            id={id}
            reminderText={reminderText} 
            dueDate={dueDate} 
            isCompleted={isCompleted} 
            handleCompleted={handleCompleted}  />
        })}
    </div>
  )
}

RemindersList.propTypes = {
   filteredItems: PropTypes.array.isRequired,
}

export default RemindersList