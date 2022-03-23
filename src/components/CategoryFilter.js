import React from "react";

function CategoryFilter({categories}) {
  return (
    <div className="categories" >
      <h5>Category filters</h5>
      {categories.map((category)=>{
        return(
          <button key={category} class="selected">{category}</button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
