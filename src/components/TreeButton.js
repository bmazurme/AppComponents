import React from "react";
import PopUpContainer from "./PopUpContaine";

function TreeButton (props) {
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = React.useState('All');

  function handleClick(evt) {
    setOpen(!open);
  }

  function checkFilter(flag) {
    flag ? setFilter('X') : setFilter('All');
  }

  return (
    <>
      <button className="tree-button" 
              type="button" 
              onClick={handleClick}
      >
        <span className="tree-button__text">Material</span>
        <span className="tree-button__tag">{filter}</span> 
        <div className={`tree-button__icon`}></div>
      </button>
      <PopUpContainer checkFilter={checkFilter} handleClick={handleClick} open={open}/>
    </>
  );
}

export default TreeButton;