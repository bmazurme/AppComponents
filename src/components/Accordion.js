import React from "react";

function Accordion(props) {
  const [data, setData] = React.useState(false);

  function handleClick() {
    setData(!data);
  }

  return(
    <div className={`accordion ${data && 'accordion_opend'}`} onClick={handleClick}>
      <div className="accordion__title">
      {data ? 'Close' : 'Open'}
      </div>
      {data && 
      
        <div className="accordion__content">
          Bla-bla-bla...
        </div>
      
      }
      

    </div>
  );
}

export default Accordion;