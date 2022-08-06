import React from 'react';

function Slider() {
  const [position, setPosition] = React.useState(50);
  const handleInputChange = (evt) => {
    let target = evt.target;
    const min = target.min;
    const max = target.max;
    const val = target.value;
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
    setPosition(val);
  };

  return (
    <input
      className="slider"
      onInput={handleInputChange} 
      type="range"
      value={position} 
      min="0"
      max="100"
      style = {{backgroundSize: position + '% 100%'}}
    />
  );
}

export default Slider;
