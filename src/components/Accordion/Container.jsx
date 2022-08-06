function Container(props) {
  const {
    id,
    container,
    last,
    handleClick,
    first,
  } = props;

  return (
    <div
      id={id}
      className={`container 
        ${container.data && 'container_opened'}
        ${last && 'container_last'}
      `}
      onClick={() => handleClick(id)}
    >

    <div className={`accordion__title 
        ${container.data && 'accordion__title_opened'} 
        ${first && 'accordion__title_first' }`
      }
    >

    <div className={`container__icon  
      ${container.data && 'container__icon_opened'}`}></div>
      <p className="container__title">
        {container.title}
      </p>
    </div>

    {container.data && 
      <div className="accordion__content">
        {container.content}
      </div>
    }
  </div>
  );
}

export default Container;
