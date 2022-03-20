import React from "react";
import PopUpContainer from "./PopUpContaine";

function TreeButton (props) {
  const [open, setOpen] = React.useState(false);

  function handleClick(evt) {
    setOpen(!open);
  }

  return (
    <>
      <button className="tree-button" 
              type="button" 
              onClick={handleClick}
      >
        <span className="tree-button__text">Material</span>
        <span className="tree-button__tag">All</span> 
        <div className={`tree-button__icon`}></div>
      </button>
      <PopUpContainer handleClick={handleClick} open={open}/>
    </>
  );
}

export default TreeButton;