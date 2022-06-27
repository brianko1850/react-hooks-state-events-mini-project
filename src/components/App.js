import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  
  const handleCategoryChange = (category)=>{
    setCategory(category)
  }

  const filteredTasks = tasks.filter(task => task.category === category || category === "All")

  const handleDeleteTask = (deletedTaskText)=> {
    setTasks(tasks.filter(task => task.text !== deletedTaskText))
  }

  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter category={category} selectCategory={handleCategoryChange} categories={CATEGORIES}/>
      <NewTaskForm categories={CATEGORIES.filter(category => category !== "All")} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList  tasks={filteredTasks} deleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
