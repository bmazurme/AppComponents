function Container(props) {
  const {
    id,
    last,
    first,
    container,
    handleClick,
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

      <div
        className={`accordion__title 
        ${container.data && 'accordion__title_opened'} 
        ${first && 'accordion__title_first' }`}
      >

        <span className={`container__icon ${container.data && 'container__icon_opened'}`} />
        <h6 className="container__title">{container.title}</h6>
      </div>

      {container.data && <div className="accordion__content">{container.content}</div>}
    </div>
  );
}

export default Container;
