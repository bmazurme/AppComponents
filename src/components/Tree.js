import React from "react";
import { materials } from "./initData";

function Tree() {
  function getCount() {
    let i = 0;
    materials.forEach(item => { 
      i += item.children.length;
    });
    return i;
  }

  return (
    <div className="popup__tree">
      <div className="tree__group">
        <input className="tree__input" type="checkbox"></input>
          <span className="tree__label">All</span>  
          <span className="tree__count">({getCount()})</span> 
      </div>

    {materials.map((material, index) =>         
      <div className="tree__group" key={index}>
        <input className="tree__input" type="checkbox"></input>
          <span className="tree__label">{material.group}</span>  
          <span className="tree__count">({material.children.length})</span>   
          {
            material.children.map((item, i) => 
              <div className="tree__item" key={`${index}_${i}`} value={item.name} >
                <input className="tree__input" type="checkbox"></input>
                {item.name}  
              </div>
            )}
            </div>
          )} 
        </div>

  );
}

export default Tree;