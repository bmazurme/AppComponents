import React from 'react';

import Star from './Star';
import mockData from './mockData';

function Rating() {
  const [stars, setStars] = React.useState(mockData);

  const handleClick = (id) => {
    const i = stars.reduce((count, item) => item.clicked ? count+=1 : count, 0);
    const val = (id - i >= -1) ? !stars[id].clicked : true;
    const arr = stars.map(({ active }, index) =>
      id >= index ? { clicked: val, active } : { clicked: false, active });

    setStars(arr);
  };

  const handleFocus = (id) => {
    const arr = stars.map(({ clicked }, index) => 
      id >= index ? { clicked, active: true } : { clicked, active: false });

    setStars(arr);
  };

  const handleUnFocus = () => {
    const arr = stars.map(({clicked }) => ({ clicked, active: clicked }));

    setStars(arr);
  };

  return (
    <div className="rating">
      {stars.map((star, index) => 
        <Star
          key={index} 
          id={index}
          active={star.active }
          handleClick={handleClick}
          handleFocus={handleFocus}
          handleUnFocus={handleUnFocus}
        /> 
      )}
    </div>
  );
}

export default Rating;
