import React from 'react';

function Switch() {
  const [switcher, setSwitcher] = React.useState(false);
  const handleClick = () => setSwitcher(!switcher);

  return (
    <button
      className={`switch ${switcher && 'switch_on'}`} 
      onClick={handleClick}
    >
      <div className={`switch__ball ${switcher && 'switch__ball_on'}`}/>
    </button>
  );
}

export default Switch;
