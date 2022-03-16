import React from "react";

function Star(props) {
  return(
    <div onClick={()=>props.handleClick(props.id)}
         onPointerEnter={()=>{props.handleFocus(props.id)}}
         onPointerLeave={props.handleUnFocus}

         className={`rating__star ${ props.active && 'rating__star_active'}`}>
    </div>
  );
}

export default Star;