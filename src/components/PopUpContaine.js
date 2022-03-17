import Tree from "./Tree";

function PopUpContainer(props) {
  return(
    <div className={`popup ${props.open && 'popup_opened'}`}>
      <div className="popup__container">
        <input type="input" className="popup__input"></input>
          <Tree/>
        <button type="button" 
                onClick={props.handleClick}
                className="popup__button">Apply</button>
      </div>
    </div>
  );
}

export default PopUpContainer;