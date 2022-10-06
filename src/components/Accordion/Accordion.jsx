import React from 'react';

import Container from './Container';
import mockData from './mockData';

function Accordion() {
  const [containers, setContainers] = React.useState(mockData);

  const handlerClick = (id) => {
    const arr = containers.map((box, index) => id === index ? { ...box, data: !box.data } : { ...box, data: false });

    setContainers(arr);
  }

  return (
    <div className="accordion">
      {containers.map((container, index) => 
        <Container
          id={index} 
          key={index}
          container={container}
          last={(containers.length - 1 === index)}
          first={index === 0}
          handleClick={handlerClick}
        />
      )}
    </div>
  );
}

export default Accordion;
