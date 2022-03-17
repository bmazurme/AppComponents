import React from "react";
import Container from "./Container";

function Accordion() {
  const [containers, setContainers] = React.useState([
    {data: false, title: 'Title1', content: 'Content 1 - bla-bla-bla...'},
    {data: false, title: 'Title2', content: 'Content 2 - bla-bla-bla...'},
    {data: false, title: 'Title3', content: 'Content 3 - bla-bla-bla...'}
  ]);

  function handleClick(id) {
    const arr = [];
    containers.map(
      (container, index) => {
        if (id === index) {
          return arr.push({
            data: !container.data,
            title: container.title,
            content: container.content
          });
        } else {
          return arr.push({
            data: false,
            title: container.title,
            content: container.content
          });
        }
    });
    setContainers(arr);
  }

  return(
    <div className="accordion">
      {containers.map((container, index) => 
      <Container id={index} key={index} container={container} handleClick={handleClick}/>)}
    </div>
  );
}

export default Accordion;