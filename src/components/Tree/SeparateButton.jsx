function SeparateButton({ handleClick, handleReset, resetButton }) {

  return (
    <div className="container-button">
      <button
        className="tree-button" 
        type="button" 
        onClick={handleClick}
      >
        <span className="tree-button__text">Material</span>
        <div className={`tree-button__icon`}></div>
      </button>

      <button
        onClick={handleReset}
        disabled={resetButton === 'All'}
        className={`tree-button__reset ${resetButton === 'All' && 'tree-button_disabled'}`} 
        type="button"
      >
        {resetButton}
      </button>
    </div>
  );
}

export default SeparateButton;
