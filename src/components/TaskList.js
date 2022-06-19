import React, { useState } from "react";
import Task from "./Task";

function TaskList( { displayedTasks, deleteTask }) {
  // const [ list, setList ] = useState(tasks)
  // function handleDelete (text) {
  //   const newList = list.filter(item => item.text !== text)
  //   setList(newList)
  // }
  
  const handleDelete = (e) => {
    deleteTask(e.target.name)
  }
  const taskList = displayedTasks.map(task=> <Task category={task.category} text={task.text} key={task.text} onDelete={handleDelete}/>)
  return (
    <div className="tasks">
     {taskList}
    </div>
  );
}

export default TaskList;
