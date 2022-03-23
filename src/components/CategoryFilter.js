import React, { useState } from "react";

function CategoryFilter({categories}) {
  const[selected, setSelected]=useState(false)
  // const selectState = selected ? "selected" : ""
  


  return (
    <div className="categories" >
      <h5>Category filters</h5>
      {categories.map((category)=>{
         const selectState = selected ? "selected" : ""
        return(
          <button key={category} className={selectState} onClick={()=>setSelected(!selected)} >{category}</button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
