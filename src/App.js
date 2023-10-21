import React, { useState } from 'react'
import Form from './components/Form'
import ReminderFilter from './components/ReminderFilter'
import RemindersList from './components/RemindersList'

// NOTE:
// I learnt the act and ways of lifting state up from a child component to a parent component.
// 'Lifting State Up' helps to reduce the amount of stateful components that are present in an application.
// The child component's state is created in a parent component, then the state value and its setter function are then passed to the
// child component as props.
// 'Lifting Sate Up' also helps to share data/state amongst sibling components that needs the data/state. 

const App = () => {
  const [items, setItems] = useState([
    {
      reminderText: "Pick up Wesley",
      dueDate: "2023-01-15",
      isCompleted: false,
      id: 1,
    },
    {
      reminderText: "Meet with Jean-Luc",
      dueDate: "2023-01-29",
      isCompleted: false,
      id: 2,
    },
    {
      reminderText: "Holodeck time!",
      dueDate: "2023-06-01",
      isCompleted: false,
      id: 3,
    },
    {
      reminderText: "Wash Some Cloths",
      dueDate: "2023-10-10",
      isCompleted: false,
      id: 4,
    },
  ]);
const [selectedFilter, setSelectedFilter] = useState("all");

const getFiltered = (itemsToFilter, duration) => {
  if(duration === "all") {
    return items;
} else {
    let numberOfDays;

    switch(duration) {
        case "2day":
            numberOfDays = 2;
            break;
        case "1week":
            numberOfDays = 7;
            break;
        case "30days":
            numberOfDays = 30;
            break;
        default:
            numberOfDays = 0;
            break;
    }
    
    const result = itemsToFilter.filter(reminder => {
        const todaysDate = new Date().toISOString().slice(0, 10);
        const todaysTime = new Date(todaysDate).getTime();
        const dueTime = new Date(reminder.dueDate).getTime();
        return dueTime < (todaysTime + (numberOfDays * 86400000));
    });
    return result;
}
}

  const filteredItems = getFiltered(items, selectedFilter);

  const handleUpdate = newItem => setItems([newItem, ...items]);
  console.log(items);

  const handleCompleted = (checkCompleted, regId) => {
    let newItems = items.filter(item => ((item.id !== regId) && (item.isCompleted !== checkCompleted)));
    setItems([...newItems]);
    console.log(checkCompleted);
  };

  return (
    <div className='container'>
      <h2 className='title'>Reminder App: Never Forget To Complete Your Tasks</h2>
      <Form handleUpdate={handleUpdate} />
      <ReminderFilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <RemindersList filteredItems={filteredItems} handleCompleted={handleCompleted} />
      {(items.length === 0) && (<div><h2 className='title'>There's no task at the moment. Create any if needed.</h2></div>)}
    </div>
  )
}

export default App