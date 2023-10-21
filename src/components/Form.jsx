import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Form = ({handleUpdate}) => {
  const [text, setText] = useState('');
  const [time, setTime] = useState('');

  let newReminder = {reminderText: text, dueDate: time, isComplete: false, id: new Date().getMilliseconds()};

  const handleSubmit = e => {
    e.preventDefault();
    setText('');
    setTime('');
  }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='form-field'>
                <label>What do you want to do?</label>
                <input type="text" 
                value={text} 
                onChange={e => setText(e.target.value)} />
            </div>
            <div className='form-field'>
                <label>When?</label>
                <input type="date"
                value={time}
                onChange={e => setTime(e.target.value)} />
            </div>
            <button onClick={() => handleUpdate(newReminder)}>Add Item</button>
        </form>
    </div>
  )
}

Form.propTypes = {
    handleUpdate: PropTypes.func.isRequired,
}

export default Form