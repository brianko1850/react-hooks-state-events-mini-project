import React, { useState } from "react";
import Task from "./Task";

function TaskList( { tasks, deleteTask }) {
  // const [ list, setList ] = useState(tasks)
  // function handleDelete (text) {
  //   const newList = list.filter(item => item.text !== text)
  //   setList(newList)
  // }
  

  const taskList = tasks.map(task=> <Task category={task.category} text={task.text} key={task.text} onDelete={deleteTask}/>)
  return (
    <div className="tasks">
     {taskList}
    </div>
  );
}

export default TaskList;
