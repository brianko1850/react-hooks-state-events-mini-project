import React from "react";

function Task( {category, text, onDelete }) {
  const handleClick = () => {
    onDelete(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button name={text} className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
