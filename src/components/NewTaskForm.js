import React from "react";

function NewTaskForm({category}) {
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {category}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
