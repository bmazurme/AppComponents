function Container(props) {
  return(
    <div id={props.id}
         className={`container ${props.container.data && 'container_opened'}`}
         onClick={()=>props.handleClick(props.id)}>

        <div className={`accordion__title ${props.container.data && 'accordion__title_opened'}`}>
        <div className={`container__icon  ${props.container.data && 'container__icon_opened'}`}></div>
          <p className="container__title">
            {props.container.title}
          </p>
        </div>

        {props.container.data && 
          <div className="accordion__content">
            {props.container.content}
          </div>
        }
  </div>
  );
}

export default Container;