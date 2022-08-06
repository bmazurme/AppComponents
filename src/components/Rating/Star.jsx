import React from 'react';

function Star(props) {
  const {
    id,
    handleClick,
    handleFocus,
    handleUnFocus,
    active,
  } = props;
  
  return (
    <div
      onClick={() => handleClick(id)}
      onPointerEnter={() => {handleFocus(id)}}
      onPointerLeave={handleUnFocus}
      className={`rating__star ${ active && 'rating__star_active'}`}
    >
    </div>
  );
}

export default Star;
