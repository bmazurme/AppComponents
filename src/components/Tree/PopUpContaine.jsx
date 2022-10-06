import Tree from './Tree';

function PopUpContainer(props) {
  const {
    input,
    filters,
    getCount,
    openPopup,
    checkedAll,
    handleClick,
    checkFilter,
    handleChange,
    handleOnChange,
    handleChangeAll,
  } = props;

  return (
    <div className={`popup ${openPopup && 'popup_opened'}`}>
      <div className="popup__container">
        <Tree
          checkFilter={checkFilter} 
          getCount={getCount}
          handleOnChange={handleOnChange}
          handleChange={handleChange}
          handleChangeAll={handleChangeAll}
          filters={filters}
          checkedAll={checkedAll}
          input={input}
        />
        <button
          type="button"
          onClick={handleClick}
          className="popup__button"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default PopUpContainer;
