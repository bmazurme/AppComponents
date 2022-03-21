function SeparateButton(props) {
  return(
    <div className="container-button">
      <button className="tree-button" 
              type="button" 
              onClick={props.handleClick}
      >
        <span className="tree-button__text">Material</span>
        <div className={`tree-button__icon`}></div>
      </button>

      <button onClick={props.handleReset}
              disabled={props.resetButton === 'All' ? true : false}
              className={`tree-button__reset ${props.resetButton === 'All' && 'tree-button_disabled'}`} 
              type="button">{props.resetButton}</button>
    </div>
  );
}

export default SeparateButton;