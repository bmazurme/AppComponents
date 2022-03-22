import Tree from "./Tree";

function PopUpContainer(props) {
  return(
    <div className={`popup ${props.openPopup && 'popup_opened'}`}>
      <div className="popup__container">

        <Tree checkFilter={props.checkFilter} 
              getCount={props.getCount}
              handleOnChange={props.handleOnChange}
              handleChange={props.handleChange}
              handleChangeAll={props.handleChangeAll}
              filters={props.filters}
              checkedAll={props.checkedAll}
              input={props.input}
        />

        <button type="button"
                onClick={props.handleClick}
                className="popup__button">Apply</button>
      </div>
    </div>
  );
}

export default PopUpContainer;