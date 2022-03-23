import React, { useState } from "react";
import Task from "./Task";

function TaskList( { tasks }) {
  const [ list, setList ] = useState(tasks)
  function handleDelete (text) {
    const newList = list.filter(item => item.text !== text)
    setList(newList)
  }

  return (
    <div className="tasks">
      {list.map((task)=>{
        return(
        <Task category={task.category} text={task.text} key={task.text} onDelete={handleDelete}/>
      )})}
    </div>
  );
}

export default TaskList;
