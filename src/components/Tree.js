import React from "react";
import TreeItem from "./TreeItem";

function Tree(props) {
  return(<TreeItem input={props.input}
                   filters={props.filters}
                   checkedAll={props.checkedAll}
                   handleOnChange={props.handleOnChange}
                   handleChange={props.handleChange} 
                   handleChangeAll={props.handleChangeAll} 
                   getCount={props.getCount}/>
  );
}

export default Tree;