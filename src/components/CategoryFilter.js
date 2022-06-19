import React, { useState } from "react";

function CategoryFilter({category, selectCategory, categories}) {
 
  const handleClick = e =>{
    selectCategory(e.target.innerText)
  }

  const categoryButtons = categories.map((cat)=>  <button key={cat} className={cat===category ? "selected" : ""} onClick={handleClick} >{cat}</button>)
          
  // const handleClick = e =>{
  //   // setSelected(!selected)
  //   selectCategory(e.target.innerText)
  // }
  return (
    <div className="categories" >
      <h5>Category filters</h5>
            {categoryButtons}
          
    </div>
  );
}
export default CategoryFilter;