import React from 'react';
import TreeItem from './TreeItem';

function Tree(props) {
  const {
    input,
    filters,
    checkedAll,
    handleOnChange,
    handleChange,
    handleChangeAll,
    getCount
  } = props;
  
  return (
    <TreeItem
      input={input}
      filters={filters}
      checkedAll={checkedAll}
      handleOnChange={handleOnChange}
      handleChange={handleChange} 
      handleChangeAll={handleChangeAll} 
      getCount={getCount}
    />
  );
}

export default Tree;
