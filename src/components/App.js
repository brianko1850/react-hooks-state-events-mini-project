import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [origTasks, setOrigTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")
  const [displayedTasks, setDisplayedTaks] = useState(TASKS)
  
  const handleCategoryChange = (newCategory)=>{
    setCategory(newCategory)
    if(newCategory==="All"){
      setOrigTasks(TASKS)
    } else {
      const filteredTasks = TASKS.filter(task=>task.category===newCategory)
      setOrigTasks(filteredTasks)
    }
  }

  const handleDeleteTask = (text)=> {
    const newList = displayedTasks.filter(item => item.text !== text)
    setDisplayedTaks(newList)
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter category={category} selectCategory={handleCategoryChange} categories={CATEGORIES}/>
      <NewTaskForm category={category}/>
      <TaskList  tasks={origTasks} displayedTasks={displayedTasks} deleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
