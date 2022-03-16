import React from "react";

function Star(props) {
  return(
    <div onClick={props.handleClick}
         className={`rating__star ${props.active && 'rating__star_active'}`}>
    </div>
  );
}

export default Star;