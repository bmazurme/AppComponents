import React from 'react';

function Slider() {
  const [position, setPosition] = React.useState(50);

  const handleInputChange = (evt) => {
    const target = evt.target;
    const { min, max, value } = target;
    target.style.backgroundSize = (value - min) * 100 / (max - min) + '% 100%';

    setPosition(value);
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
