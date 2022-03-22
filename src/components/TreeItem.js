function TreeItem (props) {
  return(
    <>
      <input type="input"
             value={props.input}
             onChange={props.handleOnChange}
             className="popup__input"/>

      <div className="popup__tree">
        <div className="tree__group">
          <input className="tree__input" 
                 type="checkbox"
                 checked={props.checkedAll}
                 onChange={props.handleChangeAll}             
          />
            <span className="tree__label">All</span>  
            <span className="tree__count">({props.getCount()})</span>  
        </div>

        {props.filters.map((group, index) =>  
          <div className="tree__group" key={index}>
            <input className="tree__input" 
                   type="checkbox" 
                   checked={group.include}
                   onChange={()=>props.handleChange(group.groupId, null)}
            />
              <span className="tree__label">{group.group}</span>  
              <span className="tree__count">({group.children.length})</span>   
              {group.children.map((item, i) => 
                <div className="tree__item" key={`${index}_${i}`} value={item.name} >
                  <input className="tree__input" 
                         type="checkbox" 
                         checked={item.include}
                         onChange={()=>props.handleChange(group.groupId, item.id)}
                  />
                    {item.name}
                </div>
              )}
            </div>
          )} 
        </div>
      </>
  );
}

export default TreeItem;